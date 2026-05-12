'use client'

export default function HeroCaroussel() {
  return (
    <section id="accueil" className="hero-bg flex flex-col items-center justify-center text-center px-6 md:px-8" style={{
      height: '100dvh', minHeight: '600px', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(https://kpfjwpfjbemlchlksqzr.supabase.co/storage/v1/object/public/Photos/hero-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        zIndex: 0,
      }} />
      <div style={{position: 'absolute', inset: 0, background: 'rgba(10,5,2,0.60)', zIndex: 1}} />
      <div style={{position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 16px'}}>
        <div style={{
          width: 'clamp(160px, 40vw, 260px)',
          height: 'clamp(160px, 40vw, 260px)',
          borderRadius: '50%',
          background: '#ffffff', display: 'flex', alignItems: 'center',
          justifyContent: 'center', marginBottom: '20px', flexShrink: 0,
          boxShadow: '0 0 40px rgba(255,255,255,0.15), 0 8px 32px rgba(0,0,0,0.4)',
        }}>
          <img src="https://kpfjwpfjbemlchlksqzr.supabase.co/storage/v1/object/public/Photos/logo.png" alt="Saveurs Corses" style={{width: '77%', height: '77%', objectFit: 'contain', display: 'block'}} />
        </div>
        <p style={{fontSize: 'clamp(9px, 2vw, 11px)', letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '12px'}}>
          Charcuteries & spécialités corses · Venette, Oise
        </p>
        <h1 style={{fontSize: 'clamp(28px, 8vw, 52px)', fontWeight: 700, color: '#ffffff', lineHeight: 1.2, marginBottom: '12px'}}>
          Le goût vrai<br />de <em style={{color: '#ffffff', fontStyle: 'italic'}}>l'Île de Beauté</em>
        </h1>
        <p style={{fontSize: 'clamp(13px, 3vw, 15px)', lineHeight: 1.7, maxWidth: '480px', marginBottom: '24px', color: 'rgba(255,255,255,0.75)'}}>
          Une sélection rigoureuse de produits corses authentiques, issus d'un savoir-faire ancestral — présents sur les marchés et galeries de l'Oise.
        </p>
        <div style={{display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center'}}>
          <a href="#produits" className="btn-hero-primary" style={{padding: '12px 24px', fontSize: 'clamp(10px, 2vw, 12px)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#fff', background: 'var(--rouge)', borderRadius: '2px', textDecoration: 'none'}}>
            Nos produits
          </a>
          <a href="#agenda" className="btn-hero-outline" style={{padding: '12px 24px', fontSize: 'clamp(10px, 2vw, 12px)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#ffffff', border: '1px solid rgba(255,255,255,0.35)', borderRadius: '2px', textDecoration: 'none'}}>
            Agenda des expos
          </a>
        </div>
      </div>
      <div style={{position: 'absolute', bottom: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', zIndex: 2}}>
        <span style={{fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)'}}>Défiler</span>
        <div className="w-4 h-4 border-r-2 border-b-2 rotate-45 animate-bounce" style={{borderColor: 'rgba(255,255,255,0.5)'}}></div>
      </div>
    </section>
  )
}