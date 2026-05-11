'use client'

import { useEffect, useRef, useState } from 'react'

const photos = [
  'https://rectoversomagazine.fr/api/images/venue/recWWIpNxF8k3YcIq?index=0',
  'https://rectoversomagazine.fr/api/images/venue/recWWIpNxF8k3YcIq?index=1',
  'https://rectoversomagazine.fr/api/images/venue/recWWIpNxF8k3YcIq?index=2',
  'https://rectoversomagazine.fr/api/images/venue/recWWIpNxF8k3YcIq?index=3',
]

function StatItem({ valeur, label }: { valeur: string, label: string, delay: number }) {
  return (
    <div style={{ borderLeft: '3px solid #8b1a1a', paddingLeft: '16px', flexShrink: 0 }}>
      <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '26px', fontWeight: 700, color: '#8b1a1a', lineHeight: 1 }}>{valeur}</p>
      <p style={{ fontSize: '13px', color: '#5a3a2a', marginTop: '4px' }}>{label}</p>
    </div>
  )
}

export default function APropos() {
  const [current, setCurrent] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => setCurrent(prev => (prev + 1) % photos.length), 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="apropos" style={{
      background: '#fffaf6', height: '100vh',
      display: 'flex', alignItems: isMobile ? 'flex-start' : 'center',
      justifyContent: 'center',
      flexDirection: isMobile ? 'column' : 'row',
      gap: isMobile ? '20px' : '56px',
      padding: isMobile ? '72px 24px 24px' : '80px 120px 60px',
      overflowY: isMobile ? 'auto' : 'hidden',
    }}>

      {/* CAROUSEL */}
      <div style={{
        position: 'relative', width: '100%',
        flexGrow: 0, flexShrink: 0,
        flexBasis: isMobile ? 'auto' : '38%',
        height: isMobile ? '200px' : '65%',
        overflow: 'hidden', borderRadius: '8px',
        border: '0.5px solid #e8d5c4',
      }}>
        {photos.map((src, i) => (
          <img key={i} src={src} alt={`Saveurs Corses ${i}`} style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center',
            opacity: i === current ? 1 : 0,
            transition: 'opacity 0.8s ease',
          }} />
        ))}
        <div style={{ position: 'absolute', bottom: '16px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px', zIndex: 2 }}>
          {photos.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} style={{
              width: i === current ? '20px' : '8px', height: '8px', borderRadius: '4px',
              background: i === current ? '#8b1a1a' : 'rgba(255,255,255,0.6)',
              border: 'none', cursor: 'pointer', padding: 0, transition: 'all 0.3s ease',
            }} />
          ))}
        </div>
      </div>

      {/* TEXTE */}
      <div style={{
        flexBasis: isMobile ? 'auto' : '38%', width: '100%',
        display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '20px',
      }}>
        <div>
          <p style={{ fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', color: '#8b1a1a', fontWeight: 700, marginBottom: '10px' }}>Qui sommes-nous</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: isMobile ? '22px' : '28px', fontWeight: 700, color: '#1a0a02', lineHeight: 1.3, marginBottom: '16px' }}>
            Une passion pour les traditions culinaires de l'Île de Beauté
          </h2>
          <p style={{ fontSize: '15px', lineHeight: 1.8, color: '#5a3a2a', marginBottom: '10px' }}>
            Saveurs Corses est une petite entreprise passionnée, dédiée à la mise en valeur des traditions culinaires corses. Présente sur les marchés et dans les galeries marchandes, elle propose une sélection rigoureuse de produits authentiques issus d'un savoir-faire ancestral.
          </p>
          {!isMobile && (
            <p style={{ fontSize: '15px', lineHeight: 1.8, color: '#5a3a2a' }}>
              À travers chaque produit, l'ambition est de faire découvrir le goût vrai, la générosité et l'authenticité de la Corse dans un esprit de proximité et de convivialité.
            </p>
          )}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingTop: '14px', borderTop: '1px solid #e8d5c4', fontSize: '14px', color: '#5a3a2a' }}>
          <span>📍 Venette, 60280 —</span>
          <strong style={{ color: '#8b1a1a' }}>06 58 58 95 80</strong>
        </div>
        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '20px', paddingTop: '14px', borderTop: '1px solid #e8d5c4' }}>
          <StatItem valeur="100%" label="Produits corses authentiques" delay={0} />
          <StatItem valeur="Artisan" label="Producteurs sélectionnés" delay={200} />
          <StatItem valeur="Local" label="Présent dans l'Oise" delay={400} />
        </div>
      </div>

    </section>
  )
}