import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { AIRTABLE_API, autorise } from '../../../../lib/admin'

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
