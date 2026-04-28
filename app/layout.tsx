import type { Metadata } from 'next'
import './globals.css'
import Navbar from './components/Navbar'

export const metadata: Metadata = {
  title: 'Saveurs Corses — Charcuteries & spécialités corses à Venette',
  description: 'Saveurs Corses propose une sélection de charcuteries et spécialités corses authentiques sur les marchés et galeries de l\'Oise — Venette, Compiègne.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}