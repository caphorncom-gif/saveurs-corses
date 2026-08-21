import Link from 'next/link'
import Marquee from './components/Marquee'
import ProduitCard from './components/ProduitCard'
import DateCard from './components/DateCard'
import { produitsVedette } from './lib/produits'
import { getExpositions, plageEnLettres } from './lib/agenda'

export const revalidate = 3600

export default async function Accueil() {
  const expos = await getExpositions()
  const prochaine = expos[0]

  return (
    <>
      {/* Ruban prochaine date */}
      {prochaine && (
        <div style={{
          background: 'var(--rouge)', color: '#fdf6ea',
          fontSize: '12.5px', letterSpacing: '.12em', textTransform: 'uppercase',
          textAlign: 'center', padding: '9px 16px', fontWeight: 700,
        }}>
          Prochaine date : <span style={{ color: '#f3cf9b' }}>{prochaine.nom} · {plageEnLettres(prochaine)}</span> — venez nous rencontrer
        </div>
      )}

      {/* Hero */}
      <section style={{ position: 'relative', background: 'var(--ardoise)', color: 'var(--creme)', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(/images/hero-bg.jpg)',
          backgroundSize: 'cover', backgroundPosition: 'center',
          opacity: .38,
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(100deg, rgba(23,16,9,.96) 0%, rgba(23,16,9,.75) 45%, rgba(23,16,9,.35) 100%)',
        }} />
        <div className="wrap" style={{
          position: 'relative', zIndex: 2,
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px', alignItems: 'center',
          minHeight: 'min(85vh, 760px)',
          paddingTop: 'clamp(56px, 8vw, 96px)', paddingBottom: 'clamp(56px, 8vw, 96px)',
        }}>
          <div>
            <span className="rise" style={{
              display: 'inline-flex', alignItems: 'center', gap: '12px',
              fontSize: '12px', fontWeight: 700, letterSpacing: '.3em', textTransform: 'uppercase',
              color: 'var(--miel)', marginBottom: '22px',
            }}>
              <span style={{ width: '34px', height: '1px', background: 'var(--miel)' }} />
              Artisan corse dans l&apos;Oise
            </span>
            <h1 className="rise-1" style={{
              fontSize: 'clamp(42px, 6.4vw, 80px)', fontWeight: 560,
              lineHeight: 1.02, letterSpacing: '-0.015em', marginBottom: '24px',
            }}>
              Le goût vrai<br />de <em style={{ fontWeight: 420, color: 'var(--miel)' }}>l&apos;Île de Beauté</em>
            </h1>
            <p className="rise-2" style={{
              fontSize: 'clamp(15px, 1.6vw, 18px)', color: 'rgba(246,238,222,.78)',
              maxWidth: '480px', marginBottom: '36px',
            }}>
              Saucissons, coppa, lonzo, miels et terrines — une sélection rigoureuse de produits corses
              authentiques, issus d&apos;un savoir-faire ancestral, sur les marchés de Compiègne et de l&apos;Oise.
            </p>
            <div className="rise-3" style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Link href="/produits" className="btn btn-rouge">Découvrir nos produits</Link>
              <Link href="/agenda" className="btn btn-ghost-sombre">Où nous trouver</Link>
            </div>
          </div>

          <div className="rise-4" style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <div style={{
              width: 'clamp(260px, 28vw, 400px)', aspectRatio: '1', borderRadius: '50%',
              background: 'radial-gradient(circle at 35% 30%, #fbf4e6, var(--kraft) 75%)',
              boxShadow: '0 40px 80px rgba(0,0,0,.5), inset 0 0 0 10px rgba(156,33,33,.08)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <img src="/images/saucisson_porc.webp" alt="Saucisson corse artisanal" style={{
                width: '82%', transform: 'rotate(-14deg)',
                filter: 'drop-shadow(0 18px 24px rgba(0,0,0,.35))',
              }} />
            </div>
            <div className="hidden md:block" aria-hidden="true" style={{
              position: 'absolute', top: '-4%', right: '6%',
              width: '112px', height: '112px',
              animation: 'tourne 24s linear infinite',
            }}>
              <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
                <defs><path id="cercle" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" /></defs>
                <text style={{
                  fontFamily: 'var(--font-karla)', fontSize: '10.5px', fontWeight: 800,
                  letterSpacing: '.32em', textTransform: 'uppercase', fill: 'var(--miel)',
                }}>
                  <textPath href="#cercle">· Depuis la Corse · Avec passion </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <Marquee />

      {/* Produits vedette */}
      <section className="section" style={{ background: 'var(--creme)' }}>
        <div className="wrap">
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
            gap: '24px', marginBottom: '48px', flexWrap: 'wrap',
          }}>
            <div>
              <span className="kicker">Nos spécialités</span>
              <h2>Charcuteries &amp; produits<br />du <em>terroir corse</em></h2>
            </div>
            <p style={{ maxWidth: '420px', color: 'var(--brun-doux)' }}>
              Chaque produit est sélectionné chez des producteurs corses pour son authenticité
              et son goût. Affinés avec soin, ils portent les arômes du maquis.
            </p>
          </div>
          <div className="grille-produits">
            {produitsVedette.map(p => <ProduitCard key={p.slug} produit={p} />)}
          </div>
          <div style={{ textAlign: 'center', marginTop: '44px' }}>
            <Link href="/produits" className="btn btn-rouge">Voir tous nos produits</Link>
          </div>
        </div>
      </section>

      {/* Agenda — 3 prochaines dates */}
      <section className="section" style={{ background: 'var(--ardoise)', color: 'var(--creme)', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(/images/texture.jpg)', backgroundSize: 'cover', backgroundPosition: 'center',
          opacity: .1,
        }} />
        <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
          <span className="kicker" style={{ color: 'var(--miel)' }}>Agenda</span>
          <h2 style={{ color: 'var(--creme)' }}>Retrouvez-nous<br /><em style={{ color: 'var(--miel)' }}>près de chez vous</em></h2>
          {expos.length > 0 ? (
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '18px', marginTop: '44px',
            }}>
              {expos.slice(0, 3).map(e => <DateCard key={e.id} expo={e} />)}
            </div>
          ) : (
            <p style={{ marginTop: '32px', color: 'rgba(246,238,222,.7)' }}>
              Les prochaines dates arrivent bientôt — suivez-nous sur les réseaux ou contactez-nous.
            </p>
          )}
          <div style={{
            marginTop: '40px', display: 'flex', alignItems: 'center',
            justifyContent: 'space-between', gap: '20px', flexWrap: 'wrap',
          }}>
            <p className="serif" style={{ fontStyle: 'italic', fontSize: '19px', color: 'rgba(246,238,222,.85)' }}>
              « Vous organisez un événement ? Nous serions ravis d&apos;y participer. »
            </p>
            <Link href="/agenda" className="btn btn-ghost-sombre">Tout l&apos;agenda</Link>
          </div>
        </div>
      </section>

      {/* Notre histoire — teaser */}
      <section className="section" style={{ background: 'var(--papier)', overflow: 'hidden' }}>
        <div className="wrap" style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(36px, 6vw, 80px)', alignItems: 'center',
        }}>
          <div style={{ position: 'relative', maxWidth: '440px' }}>
            <img src="/images/rodolphe.jpg" alt="Rodolphe Defouloy sur un marché" style={{
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
            <span className="kicker">Notre histoire</span>
            <h2 style={{ marginBottom: '20px' }}>Une passion pour les traditions de <em>l&apos;Île de Beauté</em></h2>
            <p style={{ color: 'var(--brun-doux)', marginBottom: '16px', maxWidth: '520px' }}>
              Saveurs Corses, c&apos;est Rodolphe et Sylvie Defouloy — une petite entreprise passionnée,
              dédiée à la mise en valeur des traditions culinaires corses.
            </p>
            <p style={{ color: 'var(--brun-doux)', marginBottom: '16px', maxWidth: '520px' }}>
              Présents sur les marchés et dans les galeries marchandes de l&apos;Oise, ils proposent une
              sélection rigoureuse de produits authentiques, dans un esprit de proximité et de convivialité.
            </p>
            <div style={{ display: 'flex', gap: 'clamp(24px, 4vw, 48px)', marginTop: '32px', flexWrap: 'wrap' }}>
              {[['100%', 'Produits corses'], ['Artisan', 'Producteurs sélectionnés'], ['Local', "Présents dans l'Oise"]].map(([haut, bas]) => (
                <div key={haut}>
                  <div className="serif" style={{ fontSize: '30px', fontWeight: 640, color: 'var(--rouge)' }}>{haut}</div>
                  <div style={{ fontSize: '11.5px', fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--brun-doux)' }}>{bas}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '36px' }}>
              <Link href="/notre-histoire" className="btn btn-ghost-clair">Découvrir notre histoire</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bandeau plateau cadeau */}
      <section style={{ background: 'var(--rouge)', color: '#fdf6ea', padding: 'clamp(48px, 7vw, 80px) 0' }}>
        <div className="wrap" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: '28px', flexWrap: 'wrap',
        }}>
          <div>
            <h2 style={{ color: '#fdf6ea' }}>Un plateau cadeau,<br />une <em style={{ color: '#f3cf9b' }}>commande spéciale&nbsp;?</em></h2>
            <p style={{ color: 'rgba(253,246,234,.8)', maxWidth: '460px', marginTop: '10px' }}>
              Plateaux apéritifs, coffrets gourmands, commandes pour vos événements — contactez-nous
              directement, nous préparons tout avec soin.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', alignItems: 'flex-start' }}>
            <a href="tel:0658589580" className="btn btn-creme">☎&nbsp; 06 58 58 95 80</a>
            <Link href="/contact" className="btn btn-ghost-sombre">Écrire un message</Link>
          </div>
        </div>
      </section>
    </>
  )
}
