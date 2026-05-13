'use client'
import { useState } from 'react'
import Produits from './components/Produits'
import APropos from './components/APropos'
import { expositions } from './data/expositions'
import HeroCarousel from './components/HeroCaroussel'
import Footer from './components/Footer'

const BASE = 'https://kpfjwpfjbemlchlksqzr.supabase.co/storage/v1/object/public/Photos/'

function ContactForm() {
  const [formData, setFormData] = useState({ nom: '', email: '', sujet: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setStatus('success')
        setFormData({ nom: '', email: '', sujet: '', message: '' })
      } else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <input type="text" placeholder="Votre nom" required value={formData.nom}
        onChange={e => setFormData({ ...formData, nom: e.target.value })}
        style={{ width: '100%', padding: '13px 14px', fontSize: '14px', background: 'rgba(255,255,255,0.08)', border: '0.5px solid rgba(255,255,255,0.2)', color: '#f5ebe0', borderRadius: '4px', outline: 'none', boxSizing: 'border-box' }} />
      <input type="email" placeholder="Votre e-mail" required value={formData.email}
        onChange={e => setFormData({ ...formData, email: e.target.value })}
        style={{ width: '100%', padding: '13px 14px', fontSize: '14px', background: 'rgba(255,255,255,0.08)', border: '0.5px solid rgba(255,255,255,0.2)', color: '#f5ebe0', borderRadius: '4px', outline: 'none', boxSizing: 'border-box' }} />
      <input type="text" placeholder="Sujet" required value={formData.sujet}
        onChange={e => setFormData({ ...formData, sujet: e.target.value })}
        style={{ width: '100%', padding: '13px 14px', fontSize: '14px', background: 'rgba(255,255,255,0.08)', border: '0.5px solid rgba(255,255,255,0.2)', color: '#f5ebe0', borderRadius: '4px', outline: 'none', boxSizing: 'border-box' }} />
      <textarea placeholder="Votre message..." rows={3} required value={formData.message}
        onChange={e => setFormData({ ...formData, message: e.target.value })}
        style={{ width: '100%', padding: '13px 14px', fontSize: '14px', background: 'rgba(255,255,255,0.08)', border: '0.5px solid rgba(255,255,255,0.2)', color: '#f5ebe0', borderRadius: '4px', outline: 'none', resize: 'none', boxSizing: 'border-box' }} />
      {status === 'success' && (
        <p style={{ fontSize: '13px', color: '#6fcf97', padding: '10px 14px', background: 'rgba(111,207,151,0.1)', borderRadius: '4px', border: '0.5px solid rgba(111,207,151,0.3)' }}>
          ✅ Message envoyé ! Rodolphe vous répondra rapidement.
        </p>
      )}
      {status === 'error' && (
        <p style={{ fontSize: '13px', color: '#eb5757', padding: '10px 14px', background: 'rgba(235,87,87,0.1)', borderRadius: '4px', border: '0.5px solid rgba(235,87,87,0.3)' }}>
          ❌ Erreur lors de l'envoi. Réessayez ou appelez le 06 58 58 95 80.
        </p>
      )}
      <button type="submit" disabled={status === 'sending'} style={{
        alignSelf: 'flex-start', padding: '12px 28px', fontSize: '12px', fontWeight: 700,
        letterSpacing: '1.5px', textTransform: 'uppercase', color: '#fff',
        background: status === 'sending' ? '#6b1212' : '#8b1a1a',
        border: 'none', borderRadius: '4px', cursor: status === 'sending' ? 'not-allowed' : 'pointer',
      }}>
        {status === 'sending' ? 'Envoi...' : 'Envoyer le message'}
      </button>
    </form>
  )
}

export default function Home() {
  return (
    <main className="scroll-container" id="scroll-container">

      <HeroCarousel />
      <APropos />
      <Produits />

      {/* SECTION 4 — GALERIE */}
      <section id="galerie" style={{
        background: '#1a0a02',
        height: '100vh',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        padding: 'clamp(72px, 8vw, 100px) clamp(16px, 6vw, 80px) clamp(40px, 6vw, 60px)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${BASE}texture.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 0, opacity: 0.15, transform: 'translateZ(0)', willChange: 'transform' }} />
        <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '1100px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <p style={{ fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', color: '#8b1a1a', fontWeight: 700, marginBottom: '10px' }}>Galerie</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(24px, 5vw, 36px)', fontWeight: 700, color: '#f5ebe0', marginBottom: '10px' }}>
              Nos salons & expositions
            </h2>
            <p style={{ fontSize: '15px', color: 'rgba(245,235,224,0.6)', maxWidth: '480px', margin: '0 auto' }}>
              Retrouvez-nous sur les marchés et galeries de l'Oise.
            </p>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'repeat(2, 1fr)',
            gap: '12px',
            flex: 1,
            maxHeight: '55vh',
          }}>
            {['Salon de Compiègne', 'Leroy Merlin de Jaux', 'Carrefour Venette', 'Marché local', 'Exposition', 'Événement'].map((label, i) => (
              <div key={i} style={{
                borderRadius: '6px',
                border: '0.5px solid rgba(255,255,255,0.1)',
                background: 'rgba(255,255,255,0.04)',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center', gap: '12px',
              }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(139,26,26,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '20px' }}>📷</span>
                </div>
                <p style={{ fontSize: '12px', color: 'rgba(245,235,224,0.35)', textAlign: 'center', padding: '0 16px', fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}>
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — AGENDA */}
      <section id="agenda" style={{
        background: '#fffaf6',
        position: 'relative',
        height: '100vh',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 'clamp(56px, 8vw, 80px) clamp(16px, 8vw, 120px)',
        gap: '64px', overflow: 'hidden',
      }}>
        {/* opacité */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${BASE}texture.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.08, zIndex: 0, pointerEvents: 'none' }} />

        <div className="hidden md:block" style={{ position: 'relative', zIndex: 1, flexGrow: 0, flexShrink: 0, flexBasis: '38%', height: '600px', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 24px rgba(26,10,2,0.08)', border: '0.5px solid #e8d5c4', background: '#f5f0eb' }}>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '12px', zIndex: 0 }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#8b1a1a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: '#fff', fontSize: '20px' }}>📍</span>
            </div>
            <p style={{ fontSize: '13px', color: '#a08060', fontFamily: 'Playfair Display, serif' }}>Chargement de la carte...</p>
          </div>
          <iframe src="https://maps.google.com/maps?q=Venette,60280,France&output=embed&z=13" width="100%" height="100%" style={{ border: 0, display: 'block', position: 'relative', zIndex: 1 }} allowFullScreen loading="lazy" />
        </div>

        <div style={{ position: 'relative', zIndex: 1, flexGrow: 1, flexShrink: 1, flexBasis: 'auto', width: '100%', maxWidth: '480px', maxHeight: '600px', display: 'flex', flexDirection: 'column', gap: '8px', justifyContent: 'flex-start' }}>
          <div>
            <p style={{ fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', color: '#8b1a1a', fontWeight: 700, marginBottom: '8px' }}>Agenda</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(22px, 4vw, 34px)', fontWeight: 700, color: '#1a0a02', marginBottom: '8px', lineHeight: 1.2 }}>Retrouvez-nous<br />près de chez vous</h2>
          </div>
          <div className="block md:hidden" style={{ width: '100%', height: '160px', borderRadius: '8px', overflow: 'hidden', border: '0.5px solid #e8d5c4', flexShrink: 0, position: 'relative', background: '#f5f0eb' }}>
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 0 }}>
              <p style={{ fontSize: '12px', color: '#a08060' }}>Chargement de la carte...</p>
            </div>
            <iframe src="https://maps.google.com/maps?q=Venette,60280,France&output=embed&z=13" width="100%" height="100%" style={{ border: 0, display: 'block', position: 'relative', zIndex: 1 }} allowFullScreen loading="lazy" />
          </div>
          <div className="agenda-list" onWheel={e => e.stopPropagation()}
            style={{ display: 'flex', flexDirection: 'column', gap: '8px', overflowY: 'auto', maxHeight: '420px', paddingRight: '8px', scrollbarWidth: 'thin', scrollbarColor: 'rgba(139,26,26,0.3) transparent' }}>
            <style>{`
              .agenda-list::-webkit-scrollbar { width: 4px; }
              .agenda-list::-webkit-scrollbar-track { background: transparent; }
              .agenda-list::-webkit-scrollbar-thumb { background: rgba(139,26,26,0.3); border-radius: 2px; }
              .agenda-list::-webkit-scrollbar-thumb:hover { background: rgba(139,26,26,0.6); }
            `}</style>
            {expositions.map((e) => (
              <div key={e.lieu + e.jour} style={{
                display: 'flex', gap: '16px', alignItems: 'center',
                padding: '14px 16px', background: '#fff',
                borderLeft: `3px solid ${e.tag === 'Exposition' ? '#8b1a1a' : e.tag === 'Salon' ? '#6b3fa0' : '#d4820a'}`,
                border: '0.5px solid #e8d5c4', borderLeftWidth: '3px',
                borderRadius: '4px', transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                boxShadow: '0 1px 4px rgba(26,10,2,0.04)',
              }}
                onMouseEnter={e2 => { e2.currentTarget.style.transform = 'translateX(4px)'; e2.currentTarget.style.boxShadow = '0 4px 20px rgba(139,26,26,0.1)' }}
                onMouseLeave={e2 => { e2.currentTarget.style.transform = 'translateX(0)'; e2.currentTarget.style.boxShadow = '0 1px 4px rgba(26,10,2,0.04)' }}
              >
                <div style={{ textAlign: 'center', minWidth: '44px', flexShrink: 0, borderRight: '1px solid #e8d5c4', paddingRight: '12px' }}>
                  <p style={{ fontFamily: 'Playfair Display, serif', fontSize: e.jour.length > 2 ? '18px' : '26px', fontWeight: 700, color: e.tag === 'Exposition' ? '#8b1a1a' : e.tag === 'Salon' ? '#6b3fa0' : '#d4820a', lineHeight: 1 }}>{e.jour}</p>
                  <p style={{ fontSize: '10px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#a08060', marginTop: '2px' }}>{e.mois}</p>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontSize: '15px', fontWeight: 700, color: '#1a0a02', marginBottom: '3px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{e.lieu}</p>
                  <p style={{ fontSize: '13px', color: '#5a3a2a', lineHeight: 1.5 }}>{e.detail}</p>
                </div>
                <span style={{
                  fontSize: '9px', letterSpacing: '1px', textTransform: 'uppercase',
                  padding: '3px 8px', borderRadius: '2px', fontWeight: 700, flexShrink: 0,
                  background: e.tag === 'Exposition' ? '#fef3ef' : e.tag === 'Salon' ? '#f3effe' : '#fef8ec',
                  color: e.tag === 'Exposition' ? '#8b1a1a' : e.tag === 'Salon' ? '#6b3fa0' : '#d4820a',
                  border: e.tag === 'Exposition' ? '0.5px solid rgba(139,26,26,0.2)' : e.tag === 'Salon' ? '0.5px solid rgba(107,63,160,0.2)' : '0.5px solid rgba(212,130,10,0.2)',
                }}>{e.tag}</span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', background: '#1a0a02', borderRadius: '6px', flexShrink: 0 }}>
            <p style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(12px, 2vw, 15px)', fontWeight: 700, color: '#f5ebe0' }}>Vous souhaitez nous accueillir ?</p>
            <a href="#contact" style={{ flexShrink: 0, background: '#8b1a1a', color: '#fff', padding: '8px 14px', borderRadius: '3px', fontSize: '11px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', textDecoration: 'none', marginLeft: '12px' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#6b1212')}
              onMouseLeave={e => (e.currentTarget.style.background = '#8b1a1a')}
            >Nous contacter</a>
          </div>
        </div>
      </section>

      {/* SECTION 6 — CONTACT + FOOTER */}
      <section id="contact" style={{
        background: 'var(--brun)',
        minHeight: 'calc(100dvh - 80px)',
        display: 'flex', flexDirection: 'column',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${BASE}contact-bg.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 0, opacity: 0.35, transform: 'translateZ(0)', willChange: 'transform' }} />
        <div style={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'clamp(60px, 8vw, 80px) clamp(16px, 6vw, 80px)' }}>
          <div style={{ maxWidth: '900px', width: '100%', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <p style={{ fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', color: '#f5ebe0', fontWeight: 700, marginBottom: '8px' }}>Contact</p>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(24px, 5vw, 36px)', fontWeight: 700, color: '#f5ebe0', marginBottom: '8px' }}>Une question ?<br />Une commande ?</h2>
              <p style={{ fontSize: '15px', color: 'rgba(245,235,224,0.7)', lineHeight: 1.7, maxWidth: '480px' }}>
                Plateau cadeau, commande spéciale, présence sur un événement... Contactez-nous directement.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px', alignItems: 'start' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '14px 16px', background: 'rgba(255,255,255,0.08)', borderRadius: '6px', border: '0.5px solid rgba(255,255,255,0.15)' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: '2px solid rgba(255,255,255,0.2)' }}>
                    <img src={BASE + 'photo_rodolphe.JPEG'} alt="Rodolphe Defouloy" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
                  </div>
                  <div>
                    <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '16px', fontWeight: 700, color: '#f5ebe0', marginBottom: '3px' }}>Rodolphe Defouloy</p>
                    <p style={{ fontSize: '11px', color: 'rgba(245,235,224,0.55)', letterSpacing: '2px', textTransform: 'uppercase' }}>Fondateur · Saveurs Corses</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '14px 16px', background: 'rgba(255,255,255,0.08)', borderRadius: '6px', border: '0.5px solid rgba(255,255,255,0.15)' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: '2px solid rgba(255,255,255,0.2)' }}>
                    <img src={BASE + 'photo_sylvie.png'} alt="Sylvie Defouloy" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
                  </div>
                  <div>
                    <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '16px', fontWeight: 700, color: '#f5ebe0', marginBottom: '3px' }}>Sylvie Defouloy</p>
                    <p style={{ fontSize: '11px', color: 'rgba(245,235,224,0.55)', letterSpacing: '2px', textTransform: 'uppercase' }}>Fondatrice · Saveurs Corses</p>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '14px 18px', background: 'rgba(255,255,255,0.08)', borderRadius: '6px', border: '0.5px solid rgba(255,255,255,0.15)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', color: '#f5ebe0' }}>
                    <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: '#e8c090', minWidth: '28px' }}>Tél.</span>
                    <strong style={{ color: '#f5ebe0' }}>06 58 58 95 80</strong>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', color: 'rgba(245,235,224,0.7)' }}>
                    <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: '#e8c090', minWidth: '28px' }}>Lieu</span>
                    <span>Venette, 60280</span>
                  </div>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
        {/* FOOTER intégré dans la section contact */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <Footer />
        </div>
      </section>

    </main>
  )
}