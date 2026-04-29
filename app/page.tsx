'use client'

import APropos from './components/APropos'
import { expositions } from './data/expositions'

export default function Home() {
  return (
    <main className="scroll-container" id="scroll-container">

      {/* SECTION 1 — HERO */}
      <section id="accueil" className="hero-bg flex flex-col items-center justify-center text-center px-6 md:px-8" style={{
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div className="hero-img" style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,
        }} />
        <div style={{position: 'absolute', inset: 0, background: 'rgba(10,5,2,0.45)', zIndex: 1}} />
        <div style={{position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <p className="text-xs tracking-widest uppercase mb-4" style={{color: 'rgba(255,255,255,0.7)'}}>Charcuteries & spécialités corses · Venette, Oise</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight" style={{color: '#ffffff'}}>
            Le goût vrai<br />de <em style={{color: '#ffffff', fontStyle: 'italic'}}>l'Île de Beauté</em>
          </h1>
          <p className="text-sm leading-relaxed max-w-md mb-8" style={{color: 'rgba(255,255,255,0.75)'}}>
            Une sélection rigoureuse de produits corses authentiques, issus d'un savoir-faire ancestral — présents sur les marchés et galeries de l'Oise.
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <a href="#produits" className="btn-hero-primary px-6 py-3 text-xs font-bold tracking-widest uppercase text-white rounded-sm" style={{background: 'var(--rouge)'}}>Nos produits</a>
            <a href="#agenda" className="btn-hero-outline px-6 py-3 text-xs font-bold tracking-widest uppercase rounded-sm" style={{color: '#ffffff', border: '1px solid rgba(255,255,255,0.35)'}}>Agenda des expos</a>
          </div>
        </div>
        <div className="absolute bottom-8 flex flex-col items-center gap-2" style={{zIndex: 2}}>
          <span className="text-xs tracking-widest uppercase" style={{color: 'rgba(255,255,255,0.4)'}}>Défiler</span>
          <div className="w-4 h-4 border-r-2 border-b-2 rotate-45 animate-bounce" style={{borderColor: 'rgba(255,255,255,0.5)'}}></div>
        </div>
      </section>

      {/* SECTION 2 — À PROPOS */}
      <APropos />

      {/* SECTION 3 — PRODUITS */}
      <section id="produits" style={{
        height: '100vh',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <div style={{position: 'absolute', inset: 0, backgroundImage: 'url(/texture.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 0}} />
        <div style={{position: 'absolute', inset: 0, background: 'rgba(15,10,5,0.8)', zIndex: 1}} />

        <div style={{position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', padding: '80px 64px 40px'}}>

          {/* HEADER */}
          <div style={{marginBottom: '20px'}}>
            <p style={{fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#8b1a1a', fontWeight: 700, marginBottom: '4px'}}>Nos spécialités</p>
            <h2 style={{fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#f5ebe0'}}>Charcuteries & produits du terroir</h2>
          </div>

          {/* GRILLE 2 COLONNES */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: '1fr 1fr',
            gap: '8px',
            flex: '0 0 62%',
            overflow: 'hidden',
          }}>
            {[
              { img: '/produits/saucisson_porc.png', nom: 'Saucisson de porc', desc: 'Nature ou aux myrtes' },
              { img: '/produits/coppa.png', nom: 'Coppa', desc: 'Échine marinée et séchée' },
              { img: '/produits/lonzu_fermier.png', nom: 'Lonzo', desc: 'Filet séché aux herbes du maquis' },
              { img: '/produits/jambon_sec.png', nom: 'Jambon sec', desc: 'Affiné selon les méthodes ancestrales' },
            ].map((p) => (
              <div key={p.nom} style={{position: 'relative', overflow: 'hidden', borderRadius: '4px'}}>
                <img
                  src={p.img}
                  alt={p.nom}
                  style={{
                    width: '100%', height: '100%',
                    objectFit: 'cover', display: 'block',
                    transition: 'transform 0.5s ease',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.06)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                />
                {/* TEXTE SUR FOND SOMBRE */}
                <div style={{position: 'absolute', bottom: 0, left: 0, right: 0, padding: '12px 16px', background: 'rgba(0,0,0,0.6)', pointerEvents: 'none'}}>
                  <div style={{width: '20px', height: '2px', background: '#8b1a1a', marginBottom: '5px'}} />
                  <p style={{fontFamily: 'Playfair Display, serif', fontSize: '14px', fontWeight: 700, color: '#f5ebe0', marginBottom: '2px'}}>{p.nom}</p>
                  <p style={{fontSize: '10px', color: 'rgba(245,235,224,0.65)'}}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* MIELS ET MOUTARDES */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '8px',
            marginTop: '8px',
          }}>
            {[
              { ico: '🍯', nom: 'Miels corses', desc: 'Arômes subtils du maquis et des châtaigneraies' },
              { ico: '🫙', nom: 'Moutardes & gourmandises', desc: 'Moutardes de caractère et spécialités artisanales' },
            ].map((p) => (
              <div key={p.nom} style={{
                display: 'flex', alignItems: 'center', gap: '14px',
                padding: '14px 24px',
                background: 'rgba(255,255,255,0.04)',
                borderRadius: '4px',
                border: '0.5px solid rgba(255,255,255,0.08)',
                borderLeft: '2px solid #8b1a1a',
              }}>
                <span style={{fontSize: '22px'}}>{p.ico}</span>
                <div>
                  <p style={{fontSize: '13px', fontWeight: 700, color: '#f5ebe0'}}>{p.nom}</p>
                  <p style={{fontSize: '11px', color: '#a08060', marginTop: '3px'}}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 4 — AGENDA */}
      <section id="agenda" className="px-6 md:px-12 py-24 md:py-0 flex flex-col justify-center" style={{background: '#fffaf6'}}>
        <p className="text-xs tracking-widest uppercase mb-2" style={{color: 'var(--rouge)'}}>Agenda</p>
        <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{color: '#1a0a02'}}>Retrouvez-nous près de chez vous</h2>
        <div className="flex flex-col gap-3">
          {expositions.map((e) => (
            <div key={e.lieu} className="flex gap-4 items-start p-4 rounded-sm" style={{background: '#fff', borderLeft: '3px solid var(--rouge)', border: '0.5px solid #e8d5c4', borderLeftWidth: '3px'}}>
              <div className="text-center min-w-10">
                <p className="text-xl md:text-2xl font-bold" style={{fontFamily: 'Playfair Display, serif', color: 'var(--rouge)'}}>{e.jour}</p>
                <p className="text-xs tracking-widest uppercase" style={{color: '#a08060'}}>{e.mois}</p>
              </div>
              <div>
                <p className="text-sm font-bold mb-1" style={{color: '#1a0a02'}}>{e.lieu}</p>
                <p className="text-xs leading-relaxed" style={{color: '#5a3a2a'}}>{e.detail}</p>
                <span className="inline-block mt-2 text-xs px-2 py-0.5 rounded-sm font-bold tracking-wide"
                  style={e.recurrent ? {background: '#fef3ef', color: 'var(--rouge)'} : {background: '#f5f0eb', color: '#a08060'}}>
                  {e.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5 — CONTACT */}
      <section id="contact" className="flex flex-col md:grid md:grid-cols-2 gap-8 px-6 md:px-12 py-24 md:py-0 items-center" style={{background: 'var(--brun)'}}>
        <div>
          <p className="text-xs tracking-widest uppercase mb-2" style={{color: 'var(--miel)'}}>Contact</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{color: 'var(--creme)'}}>Une question ?<br />Une commande ?</h2>
          <p className="text-sm leading-relaxed mb-6" style={{color: 'var(--texte-muted)'}}>Plateau cadeau, commande spéciale, présence sur un événement... Contactez-nous directement.</p>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 text-sm" style={{color: 'var(--texte-muted)'}}>
              <span>📞</span><strong style={{color: 'var(--miel)'}}>06 58 58 95 80</strong>
            </div>
            <div className="flex items-center gap-3 text-sm" style={{color: 'var(--texte-muted)'}}>
              <span>📍</span><span>Venette, 60280</span>
            </div>
            <div className="flex items-center gap-3 text-sm" style={{color: 'var(--texte-muted)'}}>
              <span>🌐</span><span>saveurs-corses.fr</span>
            </div>
          </div>
        </div>
        <form className="flex flex-col gap-3 w-full">
          <input type="text" placeholder="Votre nom" className="w-full px-4 py-3 text-sm rounded-sm outline-none" style={{background: 'rgba(255,255,255,0.05)', border: '0.5px solid rgba(255,255,255,0.1)', color: 'var(--creme)'}} />
          <input type="email" placeholder="Votre e-mail" className="w-full px-4 py-3 text-sm rounded-sm outline-none" style={{background: 'rgba(255,255,255,0.05)', border: '0.5px solid rgba(255,255,255,0.1)', color: 'var(--creme)'}} />
          <input type="text" placeholder="Sujet" className="w-full px-4 py-3 text-sm rounded-sm outline-none" style={{background: 'rgba(255,255,255,0.05)', border: '0.5px solid rgba(255,255,255,0.1)', color: 'var(--creme)'}} />
          <textarea placeholder="Votre message..." rows={4} className="w-full px-4 py-3 text-sm rounded-sm outline-none resize-none" style={{background: 'rgba(255,255,255,0.05)', border: '0.5px solid rgba(255,255,255,0.1)', color: 'var(--creme)'}} />
          <button type="submit" className="self-start px-6 py-3 text-xs font-bold tracking-widest uppercase text-white rounded-sm" style={{background: 'var(--rouge)'}}>
            Envoyer le message
          </button>
        </form>
      </section>

    </main>
  )
}