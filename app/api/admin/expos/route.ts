import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { AIRTABLE_API, autorise, codeConfigure } from '../../../lib/admin'

export async function GET(req: Request) {
  if (!codeConfigure()) return NextResponse.json({ error: 'ADMIN_CODE non configuré sur le serveur' }, { status: 500 })
  if (!autorise(req)) return NextResponse.json({ error: 'Code invalide' }, { status: 401 })
  const token = process.env.AIRTABLE_TOKEN
  if (!token) return NextResponse.json({ error: 'AIRTABLE_TOKEN manquant' }, { status: 500 })

  const res = await fetch(`${AIRTABLE_API}?pageSize=100&sort%5B0%5D%5Bfield%5D=Date+d%C3%A9but&sort%5B0%5D%5Bdirection%5D=asc`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: 'no-store',
  })
  if (!res.ok) {
    const detail = res.status === 401 || res.status === 403
      ? `Airtable refuse le jeton (${res.status}) — ajouter la base au scope du token`
      : `Erreur Airtable (${res.status})`
    return NextResponse.json({ error: detail }, { status: 502 })
  }
  const data = await res.json()
  const expos = (data.records as { id: string; fields: Record<string, unknown> }[]).map(r => ({
    id: r.id,
    nom: r.fields['Nom'] ?? '',
    detail: r.fields['Détail'] ?? '',
    debut: r.fields['Date début'] ?? '',
    fin: r.fields['Date fin'] ?? null,
    type: r.fields['Type'] ?? 'Marché',
    visible: Boolean(r.fields['Visible']),
  }))
  return NextResponse.json({ expos })
}

export async function POST(req: Request) {
  if (!autorise(req)) return NextResponse.json({ error: 'Code invalide' }, { status: 401 })
  const token = process.env.AIRTABLE_TOKEN
  if (!token) return NextResponse.json({ error: 'AIRTABLE_TOKEN manquant' }, { status: 500 })

  const { nom, detail, debut, fin, type } = await req.json()
  if (!nom || !debut) return NextResponse.json({ error: 'Nom et date de début obligatoires' }, { status: 400 })

  const fields: Record<string, unknown> = {
    'Nom': nom,
    'Détail': detail || '',
    'Date début': debut,
    'Type': ['Marché', 'Exposition', 'Salon'].includes(type) ? type : 'Marché',
    'Visible': true,
  }
  if (fin) fields['Date fin'] = fin

  const res = await fetch(AIRTABLE_API, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ records: [{ fields }], typecast: true }),
  })
  if (!res.ok) {
    const detail = res.status === 401 || res.status === 403
      ? `Airtable refuse le jeton (${res.status}) — vérifier le scope écriture (data.records:write)`
      : `Erreur Airtable à la création (${res.status})`
    return NextResponse.json({ error: detail }, { status: 502 })
  }

  revalidatePath('/')
  revalidatePath('/agenda')
  return NextResponse.json({ success: true })
}
