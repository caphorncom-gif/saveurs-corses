import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Notre histoire',
  description:
    "Rodolphe et Sylvie Defouloy font découvrir les traditions culinaires corses sur les marchés de l'Oise : une sélection rigoureuse de produits authentiques, dans un esprit de proximité.",
  alternates: { canonical: '/notre-histoire' },
}

export default function PageHistoire() {
  return (
    <>
      <section style={{ background: 'var(--ardoise)', color: 'var(--creme)', padding: 'clamp(56px, 7vw, 90px) 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(/images/contact-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center',
          opacity: .25,
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(rgba(23,16,9,.4), var(--ardoise))' }} />
        <div className="wrap" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <span className="kicker centre" style={{ color: 'var(--miel)' }}>Notre histoire</span>
          <h1 style={{ fontSize: 'clamp(34px, 5vw, 56px)', fontWeight: 560, lineHeight: 1.05 }}>
            Une passion pour les traditions<br />de <em style={{ fontWeight: 420, color: 'var(--miel)', fontStyle: 'italic' }}>l&apos;Île de Beauté</em>
          </h1>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--papier)', overflow: 'hidden' }}>
        <div className="wrap" style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(36px, 6vw, 80px)', alignItems: 'center',
        }}>
          <div style={{ position: 'relative', maxWidth: '440px' }}>
            <img src="/images/rodolphe.jpg" alt="Rodolphe Defouloy sur son stand" style={{
              borderRadius: '16px', aspectRatio: '4/5', objectFit: 'cover', width: '100%',
              boxShadow: '0 30px 60px rgba(43,28,14,.28)',
            }} />
            <img src="/images/sylvie.png" alt="Sylvie Defouloy" style={{
              position: 'absolute', right: '-8%', bottom: '-10%',
              width: '42%', aspectRatio: '1', objectFit: 'cover', objectPosition: 'center top',
              borderRadius: '12px', border: '6px solid var(--papier)',
              boxShadow: '0 20px 40px rgba(43,28,14,.3)',
            }} />
          </div>
          <div>
            <h2 style={{ marginBottom: '20px' }}>Rodolphe &amp; Sylvie, <em>artisans du goût</em></h2>
            <p style={{ color: 'var(--brun-doux)', marginBottom: '16px', maxWidth: '540px' }}>
              Saveurs Corses est une petite entreprise passionnée, dédiée à la mise en valeur des
              traditions culinaires corses. Fondée par Rodolphe et Sylvie Defouloy, elle est présente
              toute l&apos;année sur les marchés et dans les galeries marchandes de l&apos;Oise.
            </p>
            <p style={{ color: 'var(--brun-doux)', marginBottom: '16px', maxWidth: '540px' }}>
              Chaque produit est choisi chez des producteurs corses pour son authenticité : saucissons
              affinés avec soin, coppa et lonzo séchés selon les méthodes ancestrales, miels du maquis,
              terrines généreuses.
            </p>
            <p style={{ color: 'var(--brun-doux)', maxWidth: '540px' }}>
              À travers chaque produit, l&apos;ambition est simple : faire découvrir le goût vrai, la
              générosité et l&apos;authenticité de la Corse — dans un esprit de proximité et de convivialité.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--creme)' }}>
        <div className="wrap">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="kicker centre">Nos engagements</span>
            <h2>Ce qui nous <em>tient à cœur</em></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '22px' }}>
            {[
              ['100% corse', 'Tous nos produits viennent de l’Île de Beauté, sélectionnés chez des producteurs qui travaillent dans le respect des traditions.'],
              ['Savoir-faire artisanal', 'Affinage, séchage aux herbes du maquis, recettes ancestrales : rien n’est industriel, tout est fait avec le temps qu’il faut.'],
              ['Proximité', 'Nous sommes présents chaque semaine dans l’Oise. Venez discuter, goûter, demander conseil — c’est aussi ça, le marché.'],
            ].map(([titre, texte]) => (
              <div key={titre} className="carte" style={{ padding: '32px 28px' }}>
                <h3>{titre}</h3>
                <p>{texte}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '48px', display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/produits" className="btn btn-rouge">Découvrir nos produits</Link>
            <Link href="/agenda" className="btn btn-ghost-clair">Où nous trouver</Link>
          </div>
        </div>
      </section>
    </>
  )
}
