import type { Metadata } from 'next'
import './globals.css'
import Navbar from './components/Navbar'

export const metadata: Metadata = {
  title: 'Saveurs Corses — Charcuteries & spécialités corses à Compiègne',
  description: 'Découvrez les charcuteries et spécialités corses authentiques de Rodolphe Defouloy, présent sur les marchés de Compiègne, Venette et l\'Oise. Saucissons, coppa, lonzo, miels et terrines corses.',
  keywords: 'charcuterie corse Compiègne, spécialités corses Oise, saucisson corse, coppa corse, lonzo, jambon sec corse, marchés Compiègne, produits corses Venette, Saveurs Corses',
  openGraph: {
    title: 'Saveurs Corses — Charcuteries & spécialités corses à Compiègne',
    description: 'Charcuteries et spécialités corses authentiques sur les marchés de l\'Oise — Compiègne, Venette et alentours.',
    url: 'https://saveurs-corses.fr',
    siteName: 'Saveurs Corses',
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}