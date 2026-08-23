// Agenda des expositions — source : base Airtable « Saveurs Corses — Site web ».
// Sans AIRTABLE_TOKEN (dev local, panne), on retombe sur la liste locale ci-dessous.

export type Expo = {
  id: string
  nom: string
  detail: string
  debut: string // ISO yyyy-mm-dd
  fin: string | null
  type: 'Marché' | 'Exposition' | 'Salon'
}

import { AIRTABLE_API } from './admin'

const fallback: Expo[] = [
  { id: 'lm-sept', nom: 'Leroy Merlin de Jaux', detail: 'ZAC Jaux-Venette', debut: '2026-09-03', fin: '2026-09-05', type: 'Exposition' },
  { id: 'carrefour-sept', nom: 'Carrefour Venette', detail: 'Galerie marchande Carrefour', debut: '2026-09-21', fin: '2026-09-26', type: 'Exposition' },
  { id: 'lm-oct', nom: 'Leroy Merlin de Jaux', detail: 'ZAC Jaux-Venette', debut: '2026-10-01', fin: '2026-10-03', type: 'Exposition' },
  { id: 'gout-oct', nom: 'Week-end du Goût', detail: 'Centre-ville de Compiègne', debut: '2026-10-10', fin: null, type: 'Marché' },
  { id: 'lm-nov', nom: 'Leroy Merlin de Jaux', detail: 'ZAC Jaux-Venette', debut: '2026-11-05', fin: '2026-11-07', type: 'Exposition' },
  { id: 'vintage-nov', nom: 'Salon du Vintage — Le Tigre', detail: 'Le Tigre, Margny-lès-Compiègne', debut: '2026-11-07', fin: '2026-11-08', type: 'Salon' },
  { id: 'carrefour-nov', nom: 'Carrefour Venette', detail: 'Galerie marchande Carrefour', debut: '2026-11-23', fin: '2026-11-28', type: 'Exposition' },
  { id: 'lm-dec', nom: 'Leroy Merlin de Jaux', detail: 'ZAC Jaux-Venette', debut: '2026-12-03', fin: '2026-12-05', type: 'Exposition' },
  { id: 'noel-venette', nom: 'Marché de Noël de Venette', detail: 'Venette', debut: '2026-12-12', fin: '2026-12-13', type: 'Marché' },
  { id: 'carrefour-dec', nom: 'Carrefour Venette', detail: 'Galerie marchande Carrefour', debut: '2026-12-14', fin: '2026-12-25', type: 'Exposition' },
]

type AirtableRecord = {
  id: string
  fields: {
    'Nom'?: string
    'Détail'?: string
    'Date début'?: string
    'Date fin'?: string
    'Type'?: string
    'Visible'?: boolean
  }
}

async function fetchAirtable(): Promise<Expo[]> {
  const token = process.env.AIRTABLE_TOKEN
  if (!token) return fallback

  const url = `${AIRTABLE_API}?pageSize=100&sort%5B0%5D%5Bfield%5D=Date+d%C3%A9but&sort%5B0%5D%5Bdirection%5D=asc`
  try {
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
      next: { revalidate: 3600 },
    })
    if (!res.ok) return fallback
    const data = (await res.json()) as { records: AirtableRecord[] }
    return data.records
      .filter(r => r.fields['Visible'] && r.fields['Nom'] && r.fields['Date début'])
      .map(r => ({
        id: r.id,
        nom: r.fields['Nom']!,
        detail: r.fields['Détail'] ?? '',
        debut: r.fields['Date début']!,
        fin: r.fields['Date fin'] ?? null,
        type: (['Marché', 'Exposition', 'Salon'].includes(r.fields['Type'] ?? '') ? r.fields['Type'] : 'Marché') as Expo['type'],
      }))
  } catch {
    return fallback
  }
}

/** Expositions à venir (fin — ou début — pas encore passée), triées par date. */
export async function getExpositions(): Promise<Expo[]> {
  const expos = await fetchAirtable()
  const aujourdhui = new Date().toISOString().slice(0, 10)
  return expos
    .filter(e => (e.fin ?? e.debut) >= aujourdhui)
    .sort((a, b) => a.debut.localeCompare(b.debut))
}

const MOIS_COURT = ['Janv.', 'Févr.', 'Mars', 'Avr.', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.']
const MOIS_LONG = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']

function jourDe(iso: string) { return parseInt(iso.slice(8, 10), 10) }
function moisDe(iso: string) { return parseInt(iso.slice(5, 7), 10) - 1 }

/** Pastille date : { jour: "21-26", mois: "Sept." } */
export function pastille(e: Expo): { jour: string; mois: string } {
  const j1 = jourDe(e.debut)
  const m1 = MOIS_COURT[moisDe(e.debut)]
  if (!e.fin || e.fin === e.debut) return { jour: String(j1), mois: m1 }
  const j2 = jourDe(e.fin)
  if (moisDe(e.fin) === moisDe(e.debut)) return { jour: `${j1}-${j2}`, mois: m1 }
  return { jour: String(j1), mois: m1 } // plage à cheval sur deux mois : le détail texte précise
}

/** Plage en toutes lettres : « le 10 octobre » / « du 21 au 26 septembre » */
export function plageEnLettres(e: Expo): string {
  const j1 = jourDe(e.debut)
  const m1 = MOIS_LONG[moisDe(e.debut)]
  if (!e.fin || e.fin === e.debut) return `le ${j1 === 1 ? '1er' : j1} ${m1}`
  const j2 = jourDe(e.fin)
  const m2 = MOIS_LONG[moisDe(e.fin)]
  if (m1 === m2) return `du ${j1} au ${j2} ${m1}`
  return `du ${j1} ${m1} au ${j2} ${m2}`
}
