import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions légales',
  robots: 'noindex, follow',
  alternates: { canonical: '/mentions-legales' },
}

const sections: { titre: string; contenu: React.ReactNode }[] = [
  {
    titre: '1. Éditeur du site',
    contenu: (
      <>
        <strong>Raison sociale :</strong> Saveurs Corses<br />
        <strong>Forme juridique :</strong> [FORME JURIDIQUE]<br />
        <strong>SIRET :</strong> [NUMÉRO SIRET]<br />
        <strong>Responsable de la publication :</strong> Rodolphe Defouloy<br />
        <strong>Adresse :</strong> [ADRESSE COMPLÈTE], Venette, 60280<br />
        <strong>Téléphone :</strong> 06 58 58 95 80<br />
        <strong>Email :</strong> saveurs.corses60@gmail.com
      </>
    ),
  },
  {
    titre: '2. Hébergement',
    contenu: (
      <>
        <strong>Hébergeur :</strong> Vercel Inc.<br />
        <strong>Adresse :</strong> 340 Pine Street, Suite 700, San Francisco, CA 94104, États-Unis<br />
        <strong>Site web :</strong> www.vercel.com
      </>
    ),
  },
  {
    titre: '3. Conception et réalisation',
    contenu: (
      <>
        <strong>Agence :</strong> Cap Horn Communications<br />
        <strong>Adresse :</strong> Compiègne, Oise (60)<br />
        <strong>Site web :</strong> caphorncom.fr
      </>
    ),
  },
  {
    titre: '4. Propriété intellectuelle',
    contenu:
      "L'ensemble du contenu de ce site (textes, images, logos, graphismes) est la propriété exclusive de Saveurs Corses, sauf mentions contraires. Toute reproduction, même partielle, est strictement interdite sans autorisation préalable écrite.",
  },
  {
    titre: '5. Données personnelles',
    contenu:
      "Les informations collectées via le formulaire de contact sont utilisées uniquement pour répondre à vos demandes et ne sont jamais transmises à des tiers. Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données en contactant : saveurs.corses60@gmail.com",
  },
  {
    titre: '6. Cookies',
    contenu:
      "Ce site n'utilise aucun cookie de suivi ni outil de mesure d'audience. Seuls des cookies techniques strictement nécessaires au fonctionnement du site peuvent être déposés ; ils ne requièrent pas de consentement.",
  },
  {
    titre: '7. Responsabilité',
    contenu:
      "Saveurs Corses s'efforce de maintenir les informations de ce site à jour et exactes. Toutefois, la responsabilité de l'éditeur ne saurait être engagée en cas d'inexactitudes ou d'omissions.",
  },
]

export default function PageMentions() {
  return (
    <section className="section" style={{ background: 'var(--creme)' }}>
      <div className="wrap" style={{ maxWidth: '760px' }}>
        <span className="kicker">Informations légales</span>
        <h1 style={{ fontSize: 'clamp(30px, 4vw, 44px)', fontWeight: 560, marginBottom: '40px' }}>
          Mentions légales
        </h1>
        {sections.map(s => (
          <section key={s.titre} style={{ marginBottom: '32px' }}>
            <h2 style={{
              fontSize: '16px', fontWeight: 700, color: 'var(--rouge)',
              textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: '10px',
            }}>{s.titre}</h2>
            <p style={{ fontSize: '14.5px', lineHeight: 1.8, color: 'var(--brun-doux)' }}>{s.contenu}</p>
          </section>
        ))}
      </div>
    </section>
  )
}
