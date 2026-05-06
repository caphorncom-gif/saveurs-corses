'use client'
import Produits from './components/Produits'
import APropos from './components/APropos'
import { expositions } from './data/expositions'
import HeroCarousel from './components/HeroCaroussel'

export default function Home() {
  return (
    <main className="scroll-container" id="scroll-container">

      {/* SECTION 1 — HERO */}
      <HeroCarousel />

      {/* SECTION 2 — À PROPOS */}
      <APropos />

      {/* SECTION 3 — PRODUITS */}
      <Produits />

      {/* SECTION 4 — AGENDA */}
      <section id="agenda" style={{
        background: '#fffaf6', height: '100vh',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: '80px 80px 60px',
      }}>
        <div style={{maxWidth: '900px', margin: '0 auto', width: '100%'}}>
          <div style={{marginBottom: '40px'}}>
            <p style={{fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#8b1a1a', fontWeight: 700, marginBottom: '8px'}}>Agenda</p>
            <h2 style={{fontFamily: 'Playfair Display, serif', fontSize: '32px', fontWeight: 700, color: '#1a0a02', marginBottom: '12px'}}>Retrouvez-nous<br />près de chez vous</h2>
            <p style={{fontSize: '14px', color: '#5a3a2a', lineHeight: 1.7, maxWidth: '480px'}}>
              Saveurs Corses est présent régulièrement sur les marchés et dans les galeries marchandes de l'Oise. Venez nous rencontrer et découvrir nos produits en direct.
            </p>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px'}}>
            {expositions.map((e) => (
              <div key={e.lieu} style={{
                display: 'flex', gap: '20px', alignItems: 'center',
                padding: '20px 24px', background: '#fff',
                borderLeft: '3px solid #8b1a1a', border: '0.5px solid #e8d5c4', borderLeftWidth: '3px',
                borderRadius: '4px', transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
              onMouseEnter={e2 => { e2.currentTarget.style.transform = 'translateX(4px)'; e2.currentTarget.style.boxShadow = '0 4px 20px rgba(139,26,26,0.08)' }}
              onMouseLeave={e2 => { e2.currentTarget.style.transform = 'translateX(0)'; e2.currentTarget.style.boxShadow = 'none' }}
              >
                <div style={{textAlign: 'center', minWidth: '52px', flexShrink: 0}}>
                  <p style={{fontFamily: 'Playfair Display, serif', fontSize: '24px', fontWeight: 700, color: '#8b1a1a', lineHeight: 1}}>{e.jour}</p>
                  <p style={{fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', color: '#a08060', marginTop: '2px'}}>{e.mois}</p>
                </div>
                <div style={{flex: 1}}>
                  <p style={{fontSize: '14px', fontWeight: 700, color: '#1a0a02', marginBottom: '3px'}}>{e.lieu}</p>
                  <p style={{fontSize: '12px', color: '#5a3a2a'}}>{e.detail}</p>
                </div>
                <span style={{
                  fontSize: '10px', letterSpacing: '1px', textTransform: 'uppercase',
                  padding: '4px 10px', borderRadius: '2px', fontWeight: 700, flexShrink: 0,
                  background: e.recurrent ? '#fef3ef' : '#f5f0eb',
                  color: e.recurrent ? '#8b1a1a' : '#a08060',
                }}>{e.tag}</span>
              </div>
            ))}
          </div>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 32px', background: '#1a0a02', borderRadius: '4px'}}>
            <div>
              <p style={{fontFamily: 'Playfair Display, serif', fontSize: '18px', fontWeight: 700, color: '#f5ebe0', marginBottom: '4px'}}>Vous souhaitez nous accueillir ?</p>
              <p style={{fontSize: '12px', color: '#a08060'}}>Marchés, foires, événements privés — contactez-nous.</p>
            </div>
            <a href="#contact" style={{flexShrink: 0, background: '#8b1a1a', color: '#fff', padding: '12px 24px', borderRadius: '2px', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', textDecoration: 'none', marginLeft: '32px'}}
            onMouseEnter={e => (e.currentTarget.style.background = '#6b1212')}
            onMouseLeave={e => (e.currentTarget.style.background = '#8b1a1a')}
            >Nous contacter</a>
          </div>
        </div>
      </section>

      {/* SECTION 5 — CONTACT */}
      <section id="contact" style={{
        background: 'var(--brun)', height: '100vh',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '80px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{position: 'absolute', inset: 0, backgroundImage: 'url(/contact-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 0, opacity: 0.15}} />
        <div style={{position: 'relative', zIndex: 1, maxWidth: '900px', width: '100%'}}>
          {/* HEADER */}
          <div style={{marginBottom: '32px'}}>
            <p style={{fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--miel)', fontWeight: 700, marginBottom: '8px'}}>Contact</p>
            <h2 style={{fontFamily: 'Playfair Display, serif', fontSize: '32px', fontWeight: 700, color: 'var(--creme)', marginBottom: '12px'}}>Une question ?<br />Une commande ?</h2>
            <p style={{fontSize: '14px', color: 'var(--texte-muted)', lineHeight: 1.7, maxWidth: '480px'}}>
              Plateau cadeau, commande spéciale, présence sur un événement... Contactez-nous directement.
            </p>
          </div>

          {/* RODOLPHE — ligne complète */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '20px',
            padding: '20px 24px', marginBottom: '24px',
            background: 'rgba(255,255,255,0.04)',
            borderRadius: '6px', border: '0.5px solid rgba(255,255,255,0.08)',
          }}>
            <div style={{width: '72px', height: '72px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: '2px solid rgba(255,255,255,0.15)'}}>
              <img src="/photo_rodolphe.JPEG" alt="Rodolphe Defouloy" style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top'}} />
            </div>
            <div>
              <p style={{fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: 'var(--creme)', marginBottom: '4px'}}>Rodolphe Defouloy</p>
              <p style={{fontSize: '11px', color: 'var(--texte-muted)', letterSpacing: '2px', textTransform: 'uppercase'}}>Fondateur · Saveurs Corses</p>
            </div>
          </div>

          {/* INFOS + FORMULAIRE */}
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'start'}}>

            {/* INFOS */}
            <div style={{display: 'flex', flexDirection: 'column', gap: '14px', padding: '20px 24px', background: 'rgba(255,255,255,0.04)', borderRadius: '6px', border: '0.5px solid rgba(255,255,255,0.08)'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '12px', fontSize: '13px', color: 'var(--texte-muted)'}}>
                <span>📞</span><strong style={{color: 'var(--miel)'}}>06 58 58 95 80</strong>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: '12px', fontSize: '13px', color: 'var(--texte-muted)'}}>
                <span>📍</span><span>Venette, 60280</span>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: '12px', fontSize: '13px', color: 'var(--texte-muted)'}}>
                <span>🌐</span><span>saveurs-corses.fr</span>
              </div>
            </div>

            {/* FORMULAIRE */}
            <form style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
              <input type="text" placeholder="Votre nom" style={{width: '100%', padding: '12px 14px', fontSize: '13px', background: 'rgba(255,255,255,0.05)', border: '0.5px solid rgba(255,255,255,0.1)', color: 'var(--creme)', borderRadius: '4px', outline: 'none', boxSizing: 'border-box'}} />
              <input type="email" placeholder="Votre e-mail" style={{width: '100%', padding: '12px 14px', fontSize: '13px', background: 'rgba(255,255,255,0.05)', border: '0.5px solid rgba(255,255,255,0.1)', color: 'var(--creme)', borderRadius: '4px', outline: 'none', boxSizing: 'border-box'}} />
              <input type="text" placeholder="Sujet" style={{width: '100%', padding: '12px 14px', fontSize: '13px', background: 'rgba(255,255,255,0.05)', border: '0.5px solid rgba(255,255,255,0.1)', color: 'var(--creme)', borderRadius: '4px', outline: 'none', boxSizing: 'border-box'}} />
              <textarea placeholder="Votre message..." rows={5} style={{width: '100%', padding: '12px 14px', fontSize: '13px', background: 'rgba(255,255,255,0.05)', border: '0.5px solid rgba(255,255,255,0.1)', color: 'var(--creme)', borderRadius: '4px', outline: 'none', resize: 'none', boxSizing: 'border-box'}} />
              <button type="submit" style={{alignSelf: 'flex-start', padding: '12px 28px', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#fff', background: 'var(--rouge)', border: 'none', borderRadius: '4px', cursor: 'pointer'}}>
                Envoyer le message
              </button>
            </form>

          </div>
        </div>
      </section>

    </main>
  )
}