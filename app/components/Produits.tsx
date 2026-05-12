'use client'

import { useState, useEffect } from 'react'

const BASE = 'https://kpfjwpfjbemlchlksqzr.supabase.co/storage/v1/object/public/Photos/'

const produits = [
  { img: BASE + 'saucisson_porc.png', nom: 'Saucisson nature', desc: 'Recette traditionnelle corse, affiné avec soin. Saveurs intenses et authentiques du terroir corse.' },
  { img: BASE + 'saucisson_porc.png', nom: 'Saucisson aux myrtes', desc: 'Saucisson de porc parfumé aux baies de myrte du maquis corse. Une recette emblématique aux arômes uniques.' },
  { img: BASE + 'saucisson_sanglier.png', nom: 'Saucisson de sanglier', desc: 'Saucisson de sanglier sauvage aux arômes puissants du maquis corse. Une spécialité rare et authentique.' },
  { img: BASE + 'coppa.png', nom: 'Coppa', desc: 'Échine marinée et séchée selon les méthodes ancestrales. Sa texture fondante et ses arômes délicats en font une spécialité incontournable.' },
  { img: BASE + 'lonzu_fermier.png', nom: 'Lonzo', desc: 'Filet mignon séché aux herbes du maquis corse. Une pièce d\'exception, au goût subtil et raffiné.' },
  { img: BASE + 'jambon_sec.png', nom: 'Jambon sec', desc: 'Affiné selon les méthodes ancestrales corses pendant de longs mois. Arrivée prochaine.' },
  { img: BASE + 'Moutardes.webp', nom: 'Moutardes', desc: 'Moutardes de caractère et spécialités artisanales corses.' },
  { img: BASE + 'miels.webp', nom: 'Miels', desc: 'Maquis d\'automne et miellats du maquis — arômes de noisettes, châtaignes et myrtes du terroir corse.' },
  { img: BASE + 'terrines.webp', nom: 'Terrines', desc: 'Figatellu, sanglier et à lustincat — des terrines généreuses aux saveurs authentiques du terroir.' },
]

export default function Produits() {
  const [index, setIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const p = produits[index]
  const isUnavailable = p.nom === 'Jambon sec'

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <section id="produits" style={{ height: '100vh', position: 'relative', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${BASE}texture.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 0 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(15,10,5,0.55)', zIndex: 1, transform: 'translateZ(0)', willChange: 'transform' }} />

      <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', padding: isMobile ? '72px 16px 24px' : '56px 80px 30px', gap: isMobile ? '10px' : '14px' }}>

        <div style={{ textAlign: 'center', flexShrink: 0 }}>
          <p style={{ fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', color: '#8b1a1a', fontWeight: 700, marginBottom: '6px' }}>Nos spécialités</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: isMobile ? '22px' : '30px', fontWeight: 700, color: '#f5ebe0' }}>Charcuteries et produits du terroir</h2>
        </div>

        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', maxWidth: '100%', padding: '4px 0', scrollbarWidth: 'none', flexShrink: 0 }}>
          {produits.map((prod, i) => (
            <div key={i} onClick={() => setIndex(i)} style={{
              flexShrink: 0, width: isMobile ? '44px' : '58px', height: isMobile ? '44px' : '58px',
              borderRadius: '4px', overflow: 'hidden', cursor: 'pointer',
              border: i === index ? '2px solid #8b1a1a' : '2px solid rgba(255,255,255,0.1)',
              opacity: i === index ? 1 : 0.5, transition: 'all 0.2s ease',
              background: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <img src={prod.img} alt={prod.nom} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', width: '100%', height: isMobile ? '35vh' : '40vh', flexShrink: 0 }}>
          <img key={index} src={p.img} alt={p.nom} style={{
            maxHeight: isMobile ? '35vh' : '40vh', maxWidth: '100%', objectFit: 'contain',
            animation: 'fadeIn 0.4s ease',
            filter: isUnavailable ? 'grayscale(100%)' : 'none',
            opacity: isUnavailable ? 0.5 : 1,
          }} />
          {isUnavailable && (
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'rgba(0,0,0,0.6)', padding: '10px 20px', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.2)' }}>
              <p style={{ fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' }}>Bientôt disponible</p>
            </div>
          )}
        </div>

        <div key={`text-${index}`} style={{ textAlign: 'center', flexShrink: 0, animation: 'fadeIn 0.4s ease', padding: isMobile ? '0 8px' : '0' }}>
          <div style={{ width: '32px', height: '2px', background: '#8b1a1a', margin: '0 auto 10px' }} />
          <p style={{ fontFamily: 'Playfair Display, serif', fontSize: isMobile ? '20px' : '24px', fontWeight: 700, color: '#f5ebe0', marginBottom: '6px' }}>{p.nom}</p>
          <p style={{ fontSize: '14px', color: 'rgba(245,235,224,0.7)', lineHeight: 1.7, maxWidth: '480px', margin: '0 auto 14px' }}>{p.desc}</p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
            <button onClick={() => setIndex(i => Math.max(0, i - 1))} disabled={index === 0}
              style={{ width: '44px', height: '44px', borderRadius: '50%', background: index === 0 ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', color: index === 0 ? 'rgba(255,255,255,0.2)' : '#f5ebe0', fontSize: '18px', cursor: index === 0 ? 'default' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s ease' }}>←</button>
            <button onClick={() => setIndex(i => Math.min(produits.length - 1, i + 1))} disabled={index === produits.length - 1}
              style={{ width: '44px', height: '44px', borderRadius: '50%', background: index === produits.length - 1 ? 'rgba(255,255,255,0.05)' : '#8b1a1a', border: '1px solid rgba(255,255,255,0.15)', color: index === produits.length - 1 ? 'rgba(255,255,255,0.2)' : '#fff', fontSize: '18px', cursor: index === produits.length - 1 ? 'default' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s ease' }}>→</button>
          </div>
        </div>

      </div>
      <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }`}</style>
    </section>
  )
}