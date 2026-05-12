import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { nom, email, sujet, message } = await req.json()

  try {
    await resend.emails.send({
      from: 'Saveurs Corses <onboarding@resend.dev>',
      to: 'saveurs.corses60@gmail.com',
      subject: `[Contact] ${sujet}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8b1a1a; border-bottom: 2px solid #8b1a1a; padding-bottom: 8px;">
            Nouveau message via saveurs-corses.fr
          </h2>
          <p><strong>Nom :</strong> ${nom}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Sujet :</strong> ${sujet}</p>
          <hr style="border: 0.5px solid #e8d5c4; margin: 16px 0;" />
          <p><strong>Message :</strong></p>
          <p style="background: #fffaf6; padding: 16px; border-left: 3px solid #8b1a1a; border-radius: 4px;">
            ${message}
          </p>
          <hr style="border: 0.5px solid #e8d5c4; margin: 16px 0;" />
          <p style="font-size: 12px; color: #a08060;">
            Message envoyé depuis le formulaire de contact de saveurs-corses.fr
          </p>
        </div>
      `,
    })
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Erreur envoi email' }, { status: 500 })
  }
}