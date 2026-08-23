import type { Metadata } from 'next'
import { Fraunces, Karla } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  axes: ['opsz'],
  display: 'swap',
})

const karla = Karla({
  subsets: ['latin'],
  variable: '--font-karla',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.saveurs-corses.fr'),
  title: {
    default: 'Saveurs Corses — Charcuteries & spécialités corses à Compiègne',
    template: '%s — Saveurs Corses',
  },
  description:
    "Charcuteries et spécialités corses authentiques — saucissons, coppa, lonzo, miels et terrines — sur les marchés de Compiègne, Venette et l'Oise.",
  keywords:
    'charcuterie corse Compiègne, spécialités corses Oise, saucisson corse, coppa corse, lonzo, jambon sec corse, marchés Compiègne, produits corses Venette, Saveurs Corses',
  authors: [{ name: 'Saveurs Corses' }],
  creator: 'Saveurs Corses',
  robots: 'index, follow',
  openGraph: {
    title: 'Saveurs Corses — Charcuteries & spécialités corses à Compiègne',
    description:
      "Charcuteries et spécialités corses authentiques sur les marchés de l'Oise — Compiègne, Venette et alentours.",
    url: 'https://www.saveurs-corses.fr',
    siteName: 'Saveurs Corses',
    locale: 'fr_FR',
    type: 'website',
    images: ['/images/hero-bg.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saveurs Corses — Charcuteries corses à Compiègne',
    description: "Charcuteries et spécialités corses authentiques sur les marchés de l'Oise.",
  },
  alternates: {
    canonical: '/',
  },
  verification: {
    google: 'aoG0x905pe5Ffvn7Bb_YhCrxvl-agqdhvb6lXemu2eI',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Saveurs Corses',
  description: "Charcuteries et spécialités corses authentiques sur les marchés de l'Oise",
  url: 'https://www.saveurs-corses.fr',
  telephone: '+33658589580',
  email: 'saveurs.corses60@gmail.com',
  image: 'https://www.saveurs-corses.fr/images/logo.png',
  legalName: 'Saveurs Corses',
  founder: { '@type': 'Person', name: 'Rodolphe Defouloy' },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '373 rue de la République',
    addressLocality: 'Venette',
    postalCode: '60280',
    addressCountry: 'FR',
  },
  areaServed: ['Compiègne', 'Venette', 'Oise', 'Jaux'],
  priceRange: '€€',
  sameAs: [
    'https://www.instagram.com/saveurs.corses60/',
    'https://www.facebook.com/profile.php?id=61584344613212',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${karla.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
