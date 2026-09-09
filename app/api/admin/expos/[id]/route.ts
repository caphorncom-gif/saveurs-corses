import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { AIRTABLE_API, autorise } from '../../../../lib/admin'

export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!autorise(req)) return NextResponse.json({ error: 'Code invalide' }, { status: 401 })
  const token = process.env.AIRTABLE_TOKEN
  if (!token) return NextResponse.json({ error: 'AIRTABLE_TOKEN manquant' }, { status: 500 })

  const { id } = await params
  if (!/^rec[a-zA-Z0-9]{14}$/.test(id)) return NextResponse.json({ error: 'Identifiant invalide' }, { status: 400 })

  const { nom, detail, debut, fin, type } = await req.json()
  if (!nom || !debut) return NextResponse.json({ error: 'Nom et date de début obligatoires' }, { status: 400 })

  const fields: Record<string, unknown> = {
    'Nom': nom,
    'Détail': detail || '',
    'Date début': debut,
    'Date fin': fin || null,
    'Type': ['Marché', 'Exposition', 'Salon'].includes(type) ? type : 'Marché',
  }

  const res = await fetch(`${AIRTABLE_API}/${id}`, {
    method: 'PATCH',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ fields, typecast: true }),
  })
  if (!res.ok) {
    const detailErr = res.status === 401 || res.status === 403
      ? `Airtable refuse le jeton (${res.status}) — vérifier le scope écriture (data.records:write)`
      : `Erreur Airtable à la modification (${res.status})`
    return NextResponse.json({ error: detailErr }, { status: 502 })
  }

  revalidatePath('/')
  revalidatePath('/agenda')
  return NextResponse.json({ success: true })
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!autorise(req)) return NextResponse.json({ error: 'Code invalide' }, { status: 401 })
  const token = process.env.AIRTABLE_TOKEN
  if (!token) return NextResponse.json({ error: 'AIRTABLE_TOKEN manquant' }, { status: 500 })

  const { id } = await params
  if (!/^rec[a-zA-Z0-9]{14}$/.test(id)) return NextResponse.json({ error: 'Identifiant invalide' }, { status: 400 })

  const res = await fetch(`${AIRTABLE_API}/${id}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` },
  })
  if (!res.ok) return NextResponse.json({ error: 'Erreur Airtable à la suppression' }, { status: 502 })

  revalidatePath('/')
  revalidatePath('/agenda')
  return NextResponse.json({ success: true })
}
