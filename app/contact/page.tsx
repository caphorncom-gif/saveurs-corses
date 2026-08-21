import type { Metadata } from 'next'
import ContactForm from '../components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Une question, un plateau cadeau, une commande spéciale ou un événement à organiser ? Contactez Rodolphe et Sylvie Defouloy — Saveurs Corses, Venette (60280).',
  alternates: { canonical: '/contact' },
}

export default function PageContact() {
  return (
    <section style={{ background: 'var(--ardoise)', color: 'var(--creme)', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(/images/contact-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center',
        opacity: .3,
      }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(rgba(23,16,9,.55), rgba(23,16,9,.85))' }} />
      <div className="wrap section" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ marginBottom: '40px' }}>
          <span className="kicker" style={{ color: 'var(--miel)' }}>Contact</span>
          <h1 style={{ fontSize: 'clamp(34px, 5vw, 52px)', fontWeight: 560, lineHeight: 1.05, marginBottom: '14px' }}>
            Une question&nbsp;?<br /><em style={{ fontWeight: 420, color: 'var(--miel)', fontStyle: 'italic' }}>Une commande&nbsp;?</em>
          </h1>
          <p style={{ color: 'rgba(246,238,222,.75)', maxWidth: '520px' }}>
            Plateau cadeau, commande spéciale, présence sur un événement… Contactez-nous directement,
            nous vous répondrons rapidement.
          </p>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
          gap: 'clamp(28px, 4vw, 56px)', alignItems: 'start',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { img: '/images/rodolphe.jpg', nom: 'Rodolphe Defouloy', role: 'Fondateur' },
              { img: '/images/sylvie.png', nom: 'Sylvie Defouloy', role: 'Fondatrice' },
            ].map(p => (
              <div key={p.nom} style={{
                display: 'flex', alignItems: 'center', gap: '16px',
                padding: '16px 18px', background: 'rgba(246,238,222,.07)',
                borderRadius: '12px', border: '1px solid rgba(246,238,222,.15)',
              }}>
                <img src={p.img} alt={p.nom} style={{
                  width: '56px', height: '56px', borderRadius: '50%',
                  objectFit: 'cover', objectPosition: 'center top',
                  border: '2px solid rgba(246,238,222,.25)', flexShrink: 0,
                }} />
                <div>
                  <p className="serif" style={{ fontSize: '17px', fontWeight: 640 }}>{p.nom}</p>
                  <p style={{ fontSize: '10.5px', letterSpacing: '.2em', textTransform: 'uppercase', color: 'rgba(246,238,222,.55)' }}>
                    {p.role} · Saveurs Corses
                  </p>
                </div>
              </div>
            ))}

            <div style={{
              display: 'flex', flexDirection: 'column', gap: '12px',
              padding: '18px 20px', background: 'rgba(246,238,222,.07)',
              borderRadius: '12px', border: '1px solid rgba(246,238,222,.15)',
              fontSize: '14.5px',
            }}>
              <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                <span style={{ fontSize: '10.5px', fontWeight: 800, letterSpacing: '.15em', textTransform: 'uppercase', color: 'var(--miel)', minWidth: '38px' }}>Tél.</span>
                <a href="tel:0658589580" style={{ fontWeight: 700 }}>06 58 58 95 80</a>
              </div>
              <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                <span style={{ fontSize: '10.5px', fontWeight: 800, letterSpacing: '.15em', textTransform: 'uppercase', color: 'var(--miel)', minWidth: '38px' }}>Lieu</span>
                <span style={{ color: 'rgba(246,238,222,.8)' }}>Venette, 60280</span>
              </div>
            </div>

            <div style={{
              borderRadius: '12px', overflow: 'hidden',
              border: '1px solid rgba(246,238,222,.15)',
              aspectRatio: '16/9', background: 'var(--ardoise-2)',
            }}>
              <iframe
                title="Carte — Venette (60280)"
                src="https://www.google.com/maps?q=Venette,60280,France&output=embed&z=12"
                width="100%" height="100%"
                style={{ border: 0, display: 'block' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  )
}
