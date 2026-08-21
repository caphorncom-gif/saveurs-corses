export type Produit = {
  slug: string
  nom: string
  desc: string
  img: string
  bientot?: boolean
}

export const produits: Produit[] = [
  {
    slug: 'saucisson-nature',
    nom: 'Saucisson nature',
    desc: 'Recette traditionnelle corse, affiné avec soin. Saveurs intenses et authentiques du terroir corse.',
    img: '/images/saucisson_porc.webp',
  },
  {
    slug: 'saucisson-aux-myrtes',
    nom: 'Saucisson aux myrtes',
    desc: 'Saucisson de porc parfumé aux baies de myrte du maquis corse. Une recette emblématique aux arômes uniques.',
    img: '/images/saucisson_porc.webp',
  },
  {
    slug: 'saucisson-de-sanglier',
    nom: 'Saucisson de sanglier',
    desc: 'Saucisson de sanglier sauvage aux arômes puissants du maquis corse. Une spécialité rare et authentique.',
    img: '/images/saucisson_sanglier.png',
  },
  {
    slug: 'coppa',
    nom: 'Coppa',
    desc: 'Échine marinée et séchée selon les méthodes ancestrales. Sa texture fondante et ses arômes délicats en font une spécialité incontournable.',
    img: '/images/coppa.webp',
  },
  {
    slug: 'lonzo',
    nom: 'Lonzo',
    desc: "Filet mignon séché aux herbes du maquis corse. Une pièce d'exception, au goût subtil et raffiné.",
    img: '/images/lonzu_fermier.webp',
  },
  {
    slug: 'jambon-sec',
    nom: 'Jambon sec',
    desc: 'Affiné selon les méthodes ancestrales corses pendant de longs mois.',
    img: '/images/jambon_sec.webp',
    bientot: true,
  },
  {
    slug: 'moutardes',
    nom: 'Moutardes',
    desc: 'Moutardes de caractère et spécialités artisanales corses.',
    img: '/images/moutardes.webp',
  },
  {
    slug: 'miels',
    nom: 'Miels du maquis',
    desc: "Maquis d'automne et miellats du maquis — arômes de noisettes, châtaignes et myrtes du terroir corse.",
    img: '/images/miels.webp',
  },
  {
    slug: 'terrines',
    nom: 'Terrines',
    desc: 'Figatellu, sanglier et à lustincat — des terrines généreuses aux saveurs authentiques du terroir.',
    img: '/images/terrines.webp',
  },
]

/** Sélection mise en avant sur la page d'accueil. */
export const produitsVedette = produits.filter(p =>
  ['saucisson-nature', 'saucisson-de-sanglier', 'coppa', 'lonzo', 'miels', 'jambon-sec'].includes(p.slug)
)
