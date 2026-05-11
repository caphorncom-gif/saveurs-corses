'use client'
import Produits from './components/Produits'
import APropos from './components/APropos'
import { expositions } from './data/expositions'
import HeroCarousel from './components/HeroCaroussel'
import Footer from './components/Footer'

const BASE = 'https://kpfjwpfjbemlchlksqzr.supabase.co/storage/v1/object/public/Photos/'

export default function Home() {
  return (
    <main className="scroll-container" id="scroll-container">

      <HeroCarousel />
      <APropos />
      <Produits />

      {/* SECTION 4 — AGENDA */}
      <section id="agenda" style={{
        background: '#fffaf6', height: '100vh',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 'clamp(56px, 8vw, 80px) clamp(16px, 8vw, 120px)',
        gap: '64px', overflow: 'hidden',
      }}>
        <div className="hidden md:block" style={{flexGrow: 0, flexShrink: 0, flexBasis: '38%', height: '600px', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 24px rgba(26,10,2,0.08)', border: '0.5px solid #e8d5c4'}}>
          <iframe src="https://maps.google.com/maps?q=Venette,60280,France&output=embed&z=13" width="100%" height="100%" style={{border: 0, display: 'block'}} allowFullScreen loading="lazy" />
        </div>
        <div style={{flexGrow: 1, flexShrink: 1, flexBasis: 'auto', width: '100%', maxWidth: '480px', maxHeight: '600px', display: 'flex', flexDirection: 'column', gap: '8px', justifyContent: 'flex-start'}}>
          <div>
            <p style={{fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', color: '#8b1a1a', fontWeight: 700, marginBottom: '8px'}}>Agenda</p>
            <h2 style={{fontFamily: 'Playfair Display, serif', fontSize: 'clamp(22px, 4vw, 34px)', fontWeight: 700, color: '#1a0a02', marginBottom: '8px', lineHeight: 1.2}}>Retrouvez-nous<br />près de chez vous</h2>
          </div>
          <div className="block md:hidden" style={{width: '100%', height: '160px', borderRadius: '8px', overflow: 'hidden', border: '0.5px solid #e8d5c4', flexShrink: 0}}>
            <iframe src="https://maps.google.com/maps?q=Venette,60280,France&output=embed&z=13" width="100%" height="100%" style={{border: 0, display: 'block'}} allowFullScreen loading="lazy" />
          </div>
          <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
            {expositions.map((e) => (
              <div key={e.lieu} style={{
                display: 'flex', gap: '16px', alignItems: 'center',
                padding: '14px 16px', background: '#fff',
                borderLeft: '3px solid #8b1a1a', border: '0.5px solid #e8d5c4', borderLeftWidth: '3px',
                borderRadius: '4px', transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                boxShadow: '0 1px 4px rgba(26,10,2,0.04)',
              }}
              onMouseEnter={e2 => { e2.currentTarget.style.transform = 'translateX(4px)'; e2.currentTarget.style.boxShadow = '0 4px 20px rgba(139,26,26,0.1)' }}
              onMouseLeave={e2 => { e2.currentTarget.style.transform = 'translateX(0)'; e2.currentTarget.style.boxShadow = '0 1px 4px rgba(26,10,2,0.04)' }}
              >
                <div style={{textAlign: 'center', minWidth: '44px', flexShrink: 0, borderRight: '1px solid #e8d5c4', paddingRight: '12px'}}>
                  <p style={{fontFamily: 'Playfair Display, serif', fontSize: e.jour.length > 2 ? '16px' : '22px', fontWeight: 700, color: '#8b1a1a', lineHeight: 1}}>{e.jour}</p>
                  <p style={{fontSize: '9px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#a08060', marginTop: '2px'}}>{e.mois}</p>
                </div>
                <div style={{flex: 1, minWidth: 0}}>
                  <p style={{fontSize: '14px', fontWeight: 700, color: '#1a0a02', marginBottom: '2px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>{e.lieu}</p>
                  <p style={{fontSize: '12px', color: '#5a3a2a', lineHeight: 1.4}}>{e.detail}</p>
                </div>
                <span style={{
                  fontSize: '9px', letterSpacing: '1px', textTransform: 'uppercase',
                  padding: '3px 8px', borderRadius: '2px', fontWeight: 700, flexShrink: 0,
                  background: e.recurrent ? '#fef3ef' : '#f5f0eb',
                  color: e.recurrent ? '#8b1a1a' : '#a08060',
                  border: e.recurrent ? '0.5px solid rgba(139,26,26,0.2)' : '0.5px solid rgba(160,128,96,0.2)',
                }}>{e.tag}</span>
              </div>
            ))}
          </div>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', background: '#1a0a02', borderRadius: '6px', flexShrink: 0}}>
            <p style={{fontFamily: 'Playfair Display, serif', fontSize: 'clamp(12px, 2vw, 15px)', fontWeight: 700, color: '#f5ebe0'}}>Vous souhaitez nous accueillir ?</p>
            <a href="#contact" style={{flexShrink: 0, background: '#8b1a1a', color: '#fff', padding: '8px 14px', borderRadius: '3px', fontSize: '11px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', textDecoration: 'none', marginLeft: '12px'}}
            onMouseEnter={e => (e.currentTarget.style.background = '#6b1212')}
            onMouseLeave={e => (e.currentTarget.style.background = '#8b1a1a')}
            >Nous contacter</a>
          </div>
        </div>
      </section>

      {/* SECTION 5 — CONTACT */}
      <section id="contact" style={{
        background: 'var(--brun)',
        height: 'calc(100vh - 80px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 'clamp(60px, 8vw, 80px) clamp(16px, 6vw, 80px)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{position: 'absolute', inset: 0, backgroundImage: `url(${BASE}contact-bg.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 0, opacity: 0.35}} />
        <div style={{position: 'relative', zIndex: 1, maxWidth: '900px', width: '100%', display: 'flex', flexDirection: 'column', gap: '16px', overflowY: 'auto', maxHeight: '90vh'}}>
          <div>
            <p style={{fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', color: '#f5ebe0', fontWeight: 700, marginBottom: '8px'}}>Contact</p>
            <h2 style={{fontFamily: 'Playfair Display, serif', fontSize: 'clamp(24px, 5vw, 36px)', fontWeight: 700, color: '#f5ebe0', marginBottom: '8px'}}>Une question ?<br />Une commande ?</h2>
            <p style={{fontSize: '15px', color: 'rgba(245,235,224,0.7)', lineHeight: 1.7, maxWidth: '480px'}}>
              Plateau cadeau, commande spéciale, présence sur un événement... Contactez-nous directement.
            </p>
          </div>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px', alignItems: 'start'}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '16px', padding: '14px 16px', background: 'rgba(255,255,255,0.08)', borderRadius: '6px', border: '0.5px solid rgba(255,255,255,0.15)'}}>
                <div style={{width: '56px', height: '56px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: '2px solid rgba(255,255,255,0.2)'}}>
                  <img src={BASE + 'photo_rodolphe.JPEG'} alt="Rodolphe Defouloy" style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top'}} />
                </div>
                <div>
                  <p style={{fontFamily: 'Playfair Display, serif', fontSize: '16px', fontWeight: 700, color: '#f5ebe0', marginBottom: '3px'}}>Rodolphe Defouloy</p>
                  <p style={{fontSize: '11px', color: 'rgba(245,235,224,0.55)', letterSpacing: '2px', textTransform: 'uppercase'}}>Fondateur · Saveurs Corses</p>
                </div>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: '16px', padding: '14px 16px', background: 'rgba(255,255,255,0.08)', borderRadius: '6px', border: '0.5px solid rgba(255,255,255,0.15)'}}>
                <div style={{width: '56px', height: '56px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: '2px solid rgba(255,255,255,0.2)'}}>
                  <img src={BASE + 'photo_sylvie.png'} alt="Sylvie Defouloy" style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top'}} />
                </div>
                <div>
                  <p style={{fontFamily: 'Playfair Display, serif', fontSize: '16px', fontWeight: 700, color: '#f5ebe0', marginBottom: '3px'}}>Sylvie Defouloy</p>
                  <p style={{fontSize: '11px', color: 'rgba(245,235,224,0.55)', letterSpacing: '2px', textTransform: 'uppercase'}}>Fondatrice · Saveurs Corses</p>
                </div>
              </div>
              <div style={{display: 'flex', flexDirection: 'column', gap: '10px', padding: '14px 18px', background: 'rgba(255,255,255,0.08)', borderRadius: '6px', border: '0.5px solid rgba(255,255,255,0.15)'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', color: '#f5ebe0'}}>
                  <span style={{fontSize: '11px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: '#e8c090', minWidth: '28px'}}>Tél.</span>
                  <strong style={{color: '#f5ebe0'}}>06 58 58 95 80</strong>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', color: 'rgba(245,235,224,0.7)'}}>
                  <span style={{fontSize: '11px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: '#e8c090', minWidth: '28px'}}>Lieu</span>
                  <span>Venette, 60280</span>
                </div>
              </div>
            </div>
            <form style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
              <input type="text" placeholder="Votre nom" style={{width: '100%', padding: '13px 14px', fontSize: '14px', background: 'rgba(255,255,255,0.08)', border: '0.5px solid rgba(255,255,255,0.2)', color: '#f5ebe0', borderRadius: '4px', outline: 'none', boxSizing: 'border-box'}} />
              <input type="email" placeholder="Votre e-mail" style={{width: '100%', padding: '13px 14px', fontSize: '14px', background: 'rgba(255,255,255,0.08)', border: '0.5px solid rgba(255,255,255,0.2)', color: '#f5ebe0', borderRadius: '4px', outline: 'none', boxSizing: 'border-box'}} />
              <input type="text" placeholder="Sujet" style={{width: '100%', padding: '13px 14px', fontSize: '14px', background: 'rgba(255,255,255,0.08)', border: '0.5px solid rgba(255,255,255,0.2)', color: '#f5ebe0', borderRadius: '4px', outline: 'none', boxSizing: 'border-box'}} />
              <textarea placeholder="Votre message..." rows={3} style={{width: '100%', padding: '13px 14px', fontSize: '14px', background: 'rgba(255,255,255,0.08)', border: '0.5px solid rgba(255,255,255,0.2)', color: '#f5ebe0', borderRadius: '4px', outline: 'none', resize: 'none', boxSizing: 'border-box'}} />
              <button type="submit" style={{alignSelf: 'flex-start', padding: '12px 28px', fontSize: '12px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#fff', background: '#8b1a1a', border: 'none', borderRadius: '4px', cursor: 'pointer'}}>
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />

    </main>
  )
}