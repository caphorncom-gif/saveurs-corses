import { Resend } from 'resend'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { nom, email, telephone, sujet, message, societe } = await req.json()

  // Honeypot : le champ « societe » est invisible pour les humains ; s'il est rempli,
  // c'est un robot — on répond « succès » sans rien envoyer pour ne pas l'alerter.
  if (societe) return NextResponse.json({ success: true })

  if (!nom || !email || !telephone || !sujet || !message) {
    return NextResponse.json({ error: 'Champs obligatoires manquants' }, { status: 400 })
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const { data, error } = await resend.emails.send({
      from: 'Saveurs Corses <onboarding@resend.dev>',
      to: 'saveurs.corses60@gmail.com',
      cc: 'caphorncom@gmail.com',
      replyTo: email,
      subject: `[Contact] ${sujet}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #9c2121; border-bottom: 2px solid #9c2121; padding-bottom: 8px;">
            Nouveau message via saveurs-corses.fr
          </h2>
          <p><strong>Nom :</strong> ${nom}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Téléphone :</strong> ${telephone}</p>
          <p><strong>Sujet :</strong> ${sujet}</p>
          <hr style="border: 0.5px solid #e8d5c4; margin: 16px 0;" />
          <p><strong>Message :</strong></p>
          <p style="background: #fffaf6; padding: 16px; border-left: 3px solid #9c2121; border-radius: 4px;">
            ${message}
          </p>
          <hr style="border: 0.5px solid #e8d5c4; margin: 16px 0;" />
          <p style="font-size: 12px; color: #a08060;">
            Message envoyé depuis le formulaire de contact de saveurs-corses.fr
          </p>
        </div>
      `,
    })
    if (error) {
      console.error('Resend a refusé l’envoi :', error)
      return NextResponse.json({ error: `Envoi refusé par Resend : ${error.message ?? error.name ?? 'erreur inconnue'}` }, { status: 502 })
    }
    console.log('Email envoyé via Resend, id :', data?.id)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Erreur formulaire contact :', error)
    return NextResponse.json({ error: 'Erreur envoi email' }, { status: 500 })
  }
}
