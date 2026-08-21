import type { Metadata } from 'next'
import Link from 'next/link'
import ProduitCard from '../components/ProduitCard'
import { produits } from '../lib/produits'

export const metadata: Metadata = {
  title: 'Nos produits',
  description:
    'Saucissons, coppa, lonzo, jambon sec, miels, moutardes et terrines corses — des produits artisanaux authentiques sélectionnés chez des producteurs corses.',
  alternates: { canonical: '/produits' },
}

export default function PageProduits() {
  return (
    <>
      <section style={{ background: 'var(--ardoise)', color: 'var(--creme)', padding: 'clamp(56px, 7vw, 90px) 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(/images/texture.jpg)', backgroundSize: 'cover', backgroundPosition: 'center',
          opacity: .12,
        }} />
        <div className="wrap" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <span className="kicker centre" style={{ color: 'var(--miel)' }}>Nos spécialités</span>
          <h1 style={{ fontSize: 'clamp(34px, 5vw, 56px)', fontWeight: 560, lineHeight: 1.05 }}>
            Charcuteries &amp; produits<br />du <em style={{ fontWeight: 420, color: 'var(--miel)', fontStyle: 'italic' }}>terroir corse</em>
          </h1>
          <p style={{ color: 'rgba(246,238,222,.75)', maxWidth: '560px', margin: '20px auto 0' }}>
            Chaque produit est sélectionné chez des producteurs corses pour son authenticité et son goût.
            Retrouvez-les sur nos stands, sur les marchés et dans les galeries marchandes de l&apos;Oise.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--creme)' }}>
        <div className="wrap">
          <div className="grille-produits">
            {produits.map(p => <ProduitCard key={p.slug} produit={p} />)}
          </div>

          <div style={{
            marginTop: '64px', background: 'var(--papier)',
            border: '1px solid rgba(43,28,14,.1)', borderRadius: '16px',
            padding: 'clamp(28px, 4vw, 44px)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            gap: '24px', flexWrap: 'wrap',
          }}>
            <div>
              <h2 style={{ fontSize: 'clamp(22px, 3vw, 30px)' }}>Envie de goûter&nbsp;?</h2>
              <p style={{ color: 'var(--brun-doux)', maxWidth: '480px', marginTop: '8px' }}>
                Nos produits sont en vente directe sur nos stands. Pour un plateau cadeau ou une
                commande spéciale, contactez-nous — nous préparons tout avec soin.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Link href="/agenda" className="btn btn-rouge">Où nous trouver</Link>
              <Link href="/contact" className="btn btn-ghost-clair">Nous contacter</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
