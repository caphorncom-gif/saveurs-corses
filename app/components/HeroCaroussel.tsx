'use client'

export default function HeroCaroussel() {
  return (
    <section id="accueil" className="hero-bg flex flex-col items-center justify-center text-center px-6 md:px-8" style={{
      height: '100vh', position: 'relative', overflow: 'hidden',
      backgroundColor: '#1a0a02',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(/visuel-bg-3.png)',
        backgroundSize: '100%',
backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        zIndex: 0,
        animation: 'dezoom 12s ease-out forwards',
      }} />
      <div style={{position: 'absolute', inset: 0, background: 'rgba(10,5,2,0.55)', zIndex: 1}} />
      <div style={{position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <div style={{
          width: '260px', height: '260px', borderRadius: '50%',
          background: '#ffffff', display: 'flex', alignItems: 'center',
          justifyContent: 'center', marginBottom: '24px', flexShrink: 0,
        }}>
          <img src="/logo.png" alt="Saveurs Corses" style={{width: '200px', height: '200px', objectFit: 'contain', display: 'block'}} />
        </div>
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
      <style>{`
        @keyframes dezoom {
          from { transform: scale(1.05); }
          to { transform: scale(1); }
        }
      `}</style>
    </section>
  )
}