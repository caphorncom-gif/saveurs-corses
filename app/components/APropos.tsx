'use client'

import { useEffect, useRef, useState } from 'react'

const photos = [
  'https://rectoversomagazine.fr/api/images/venue/recWWIpNxF8k3YcIq?index=0',
  'https://rectoversomagazine.fr/api/images/venue/recWWIpNxF8k3YcIq?index=1',
  'https://rectoversomagazine.fr/api/images/venue/recWWIpNxF8k3YcIq?index=2',
  'https://rectoversomagazine.fr/api/images/venue/recWWIpNxF8k3YcIq?index=3',
]

function StatItem({ valeur, label, delay }: { valeur: string, label: string, delay: number }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setVisible(true) },
        { threshold: 0.5 }
      )
      if (ref.current) observer.observe(ref.current)
    }, delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div ref={ref} style={{
      borderLeft: '3px solid #8b1a1a',
      paddingLeft: '16px',
      transition: 'opacity 0.7s ease, transform 0.7s ease',
      transitionDelay: `${delay}ms`,
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(20px)',
    }}>
      <p style={{fontFamily: 'Playfair Display, serif', fontSize: '26px', fontWeight: 700, color: '#8b1a1a', lineHeight: 1}}>{valeur}</p>
      <p style={{fontSize: '11px', color: '#5a3a2a', marginTop: '4px'}}>{label}</p>
    </div>
  )
}

export default function APropos() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % photos.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="apropos" style={{
      background: '#fffaf6',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      paddingTop: '56px',
    }}>

      {/* CAROUSEL EN HAUT */}
      <div style={{position: 'relative', width: '100%', flex: '0 0 50%', overflow: 'hidden'}}>
        {photos.map((src, i) => (
          <img key={i} src={src} alt={`Saveurs Corses ${i}`} style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center',
            display: 'block',
            opacity: i === current ? 1 : 0,
            transition: 'opacity 0.8s ease',
          }} />
        ))}
        <div style={{position: 'absolute', bottom: '16px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px', zIndex: 2}}>
          {photos.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} style={{
              width: i === current ? '20px' : '8px', height: '8px',
              borderRadius: '4px',
              background: i === current ? '#8b1a1a' : 'rgba(255,255,255,0.6)',
              border: 'none', cursor: 'pointer', padding: 0,
              transition: 'all 0.3s ease',
            }} />
          ))}
        </div>
      </div>

      {/* TEXTE + STATS — centré sur les 2 axes */}
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 64px',
      }}>
        <div style={{maxWidth: '800px', width: '100%'}}>
          <p style={{fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#8b1a1a', fontWeight: 700, marginBottom: '8px'}}>Qui sommes-nous</p>
          <h2 style={{fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#1a0a02', lineHeight: 1.25, marginBottom: '12px'}}>
            Une passion pour les traditions culinaires de l'Île de Beauté
          </h2>
          <p style={{fontSize: '13px', lineHeight: 1.75, color: '#5a3a2a', marginBottom: '8px'}}>
            Saveurs Corses est une petite entreprise passionnée, dédiée à la mise en valeur des traditions culinaires corses. Elle propose une sélection rigoureuse de produits authentiques issus d'un savoir-faire ancestral.
          </p>
          <div style={{display: 'flex', alignItems: 'center', gap: '8px', paddingTop: '12px', borderTop: '1px solid #e8d5c4', fontSize: '12px', color: '#5a3a2a', marginBottom: '16px'}}>
            <span>📍 Venette, 60280 —</span>
            <strong style={{color: '#8b1a1a'}}>06 58 58 95 80</strong>
          </div>
          {/* STATS EN LIGNE */}
          <div style={{display: 'flex', gap: '32px', paddingTop: '16px', borderTop: '1px solid #e8d5c4'}}>
            <StatItem valeur="100%" label="Produits corses authentiques" delay={0} />
            <StatItem valeur="Artisan" label="Producteurs sélectionnés" delay={200} />
            <StatItem valeur="Local" label="Présent dans l'Oise" delay={400} />
          </div>
        </div>
      </div>

    </section>
  )
}