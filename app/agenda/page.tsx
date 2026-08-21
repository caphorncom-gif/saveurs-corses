import type { Metadata } from 'next'
import Link from 'next/link'
import DateCard from '../components/DateCard'
import { getExpositions, plageEnLettres } from '../lib/agenda'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Agenda — où nous trouver',
  description:
    "Marchés, expositions et salons : toutes les prochaines dates de présence de Saveurs Corses à Compiègne, Venette, Jaux et dans l'Oise.",
  alternates: { canonical: '/agenda' },
}

export default async function PageAgenda() {
  const expos = await getExpositions()

  const jsonLd = expos.map(e => ({
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: `Saveurs Corses — ${e.nom}`,
    startDate: e.debut,
    endDate: e.fin ?? e.debut,
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: { '@type': 'Place', name: e.nom, address: { '@type': 'PostalAddress', addressLocality: e.detail || 'Oise', addressCountry: 'FR' } },
    organizer: { '@type': 'Organization', name: 'Saveurs Corses', url: 'https://www.saveurs-corses.fr' },
  }))

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section style={{ background: 'var(--ardoise)', color: 'var(--creme)', padding: 'clamp(56px, 7vw, 90px) 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(/images/texture.jpg)', backgroundSize: 'cover', backgroundPosition: 'center',
          opacity: .12,
        }} />
        <div className="wrap" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <span className="kicker centre" style={{ color: 'var(--miel)' }}>Agenda</span>
          <h1 style={{ fontSize: 'clamp(34px, 5vw, 56px)', fontWeight: 560, lineHeight: 1.05 }}>
            Retrouvez-nous<br /><em style={{ fontWeight: 420, color: 'var(--miel)', fontStyle: 'italic' }}>près de chez vous</em>
          </h1>
          <p style={{ color: 'rgba(246,238,222,.75)', maxWidth: '560px', margin: '20px auto 0' }}>
            Marchés, galeries marchandes, salons : voici toutes nos prochaines dates dans l&apos;Oise.
            {expos[0] && <> Prochaine étape : <strong style={{ color: 'var(--miel)' }}>{expos[0].nom}, {plageEnLettres(expos[0])}</strong>.</>}
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--ardoise-2)', color: 'var(--creme)' }}>
        <div className="wrap" style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(32px, 5vw, 64px)', alignItems: 'start',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {expos.length > 0
              ? expos.map(e => <DateCard key={e.id} expo={e} />)
              : (
                <p style={{ color: 'rgba(246,238,222,.7)' }}>
                  Les prochaines dates arrivent bientôt — suivez-nous sur les réseaux ou contactez-nous.
                </p>
              )}
          </div>

          <div style={{ position: 'sticky', top: '96px' }}>
            <div style={{
              borderRadius: '14px', overflow: 'hidden',
              border: '1px solid rgba(246,238,222,.18)',
              boxShadow: '0 24px 48px rgba(0,0,0,.3)',
              aspectRatio: '4/3', background: 'var(--ardoise)',
            }}>
              <iframe
                title="Carte — Venette (60280)"
                src="https://www.google.com/maps?q=Venette,60280,France&output=embed&z=12"
                width="100%" height="100%"
                style={{ border: 0, display: 'block' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div style={{
              marginTop: '20px', padding: '24px',
              background: 'rgba(246,238,222,.05)',
              border: '1px solid rgba(246,238,222,.14)', borderRadius: '12px',
            }}>
              <h2 className="serif" style={{ fontSize: '20px', fontWeight: 600, marginBottom: '8px' }}>
                Vous souhaitez nous accueillir&nbsp;?
              </h2>
              <p style={{ fontSize: '14px', color: 'rgba(246,238,222,.65)', marginBottom: '18px' }}>
                Marché, salon, événement d&apos;entreprise : nous nous déplaçons dans toute l&apos;Oise.
              </p>
              <Link href="/contact" className="btn btn-rouge">Nous contacter</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
