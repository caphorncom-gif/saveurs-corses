import type { Metadata } from 'next'
import GestionClient from './GestionClient'

export const metadata: Metadata = {
  title: 'Gestion de l’agenda',
  robots: 'noindex, nofollow',
}

export default function PageGestion() {
  return <GestionClient />
}
