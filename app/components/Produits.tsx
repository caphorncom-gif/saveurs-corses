'use client'

import { useState } from 'react'

const produits = [
  { img: '/produits/saucisson_porc.png', nom: 'Saucisson de porc', desc: 'Nature ou aux myrtes, recettes traditionnelles corses. Un saucisson affiné avec soin, aux saveurs intenses du terroir corse.' },
  { img: '/produits/saucisson_sanglier.png', nom: 'Saucisson de sanglier', desc: 'Saucisson de sanglier sauvage aux arômes puissants du maquis corse. Une spécialité rare et authentique.' },
  { img: '/produits/coppa.png', nom: 'Coppa', desc: 'Échine marinée et séchée selon les méthodes ancestrales. Sa texture fondante et ses arômes délicats en font une spécialité incontournable.' },
  { img: '/produits/lonzu_fermier.png', nom: 'Lonzo', desc: 'Filet mignon séché aux herbes du maquis corse. Une pièce d\'exception, au goût subtil et raffiné.' },
  { img: '/produits/jambon_sec.png', nom: 'Jambon sec', desc: 'Affiné selon les méthodes ancestrales corses pendant de longs mois. Arrivée prochaine.' },
  { img: '/produits/moutardes.png', nom: 'Moutardes', desc: 'Moutardes de caractère et spécialités artisanales corses.' },
  { img: '/produits/miels.png', nom: 'Miels', desc: 'Maquis d\'automne et miellats du maquis — arômes de noisettes, châtaignes et myrtes du terroir corse.' },
  { img: '/produits/terrines.png', nom: 'Terrines', desc: 'Figatellu, sanglier et à lustincat — des terrines généreuses aux saveurs authentiques du terroir.' },
]

if (typeof window !== 'undefined') {
  produits.forEach(p => { const img = new window.Image(); img.src = p.img })
}

export default function Produits() {
  const [index, setIndex] = useState(0)
  const p = produits[index]
  const isUnavailable = p.nom === 'Jambon sec'

  return (
    <section id="produits" style={{
      height: '100vh',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
    }}>
      <div style={{position: 'absolute', inset: 0, backgroundImage: 'url(/texture.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 0}} />
      <div style={{position: 'absolute', inset: 0, background: 'rgba(15,10,5,0.82)', zIndex: 1}} />

      <div style={{position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', padding: '80px 80px 32px'}}>

        {/* TITRE */}
        <div style={{textAlign: 'center', marginBottom: '4px', flexShrink: 0}}>
          <p style={{fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#8b1a1a', fontWeight: 700, marginBottom: '4px'}}>Nos spécialités</p>
          <h2 style={{fontFamily: 'Playfair Display, serif', fontSize: '24px', fontWeight: 700, color: '#f5ebe0'}}>Charcuteries {'&'} produits du terroir</h2>
        </div>

        {/* VIGNETTES */}
        <div style={{display: 'flex', gap: '8px', overflowX: 'auto', maxWidth: '600px', padding: '8px 0', scrollbarWidth: 'none', flexShrink: 0}}>
          {produits.map((prod, i) => (
            <div key={i} onClick={() => setIndex(i)} style={{
              flexShrink: 0, width: '52px', height: '52px',
              borderRadius: '4px', overflow: 'hidden', cursor: 'pointer',
              border: i === index ? '2px solid #8b1a1a' : '2px solid rgba(255,255,255,0.1)',
              opacity: i === index ? 1 : 0.5,
              transition: 'all 0.2s ease',
              background: 'rgba(0,0,0,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <img src={prod.img} alt={prod.nom} style={{width: '100%', height: '100%', objectFit: 'contain'}} />
            </div>
          ))}
        </div>

        {/* PHOTO GRANDE */}
        <div style={{flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', position: 'relative', width: '100%'}}>
          <img
            key={index}
            src={p.img}
            alt={p.nom}
            style={{
              maxHeight: '100%',
              maxWidth: '100%',
              objectFit: 'contain',
              display: 'block',
              animation: 'fadeIn 0.4s ease',
              filter: isUnavailable ? 'grayscale(100%)' : 'none',
              opacity: isUnavailable ? 0.5 : 1,
              transition: 'filter 0.3s ease, opacity 0.3s ease',
            }}
          />
          {isUnavailable && (
            <div style={{
              position: 'absolute', top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              background: 'rgba(0,0,0,0.6)', padding: '10px 20px',
              borderRadius: '4px', border: '1px solid rgba(255,255,255,0.2)',
            }}>
              <p style={{fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)'}}>Bientôt disponible</p>
            </div>
          )}
        </div>

        {/* NOM + DESC + FLÈCHES */}
        <div key={`text-${index}`} style={{textAlign: 'center', flexShrink: 0, marginTop: '12px', animation: 'fadeIn 0.4s ease'}}>
          <div style={{width: '32px', height: '2px', background: '#8b1a1a', margin: '0 auto 10px'}} />
          <p style={{fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#f5ebe0', marginBottom: '6px'}}>{p.nom}</p>
          <p style={{fontSize: '12px', color: 'rgba(245,235,224,0.6)', lineHeight: 1.6, maxWidth: '480px', margin: '0 auto 16px'}}>{p.desc}</p>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px'}}>
            <button onClick={() => setIndex(i => Math.max(0, i - 1))} disabled={index === 0}
              style={{width: '48px', height: '48px', borderRadius: '50%', background: index === 0 ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', color: index === 0 ? 'rgba(255,255,255,0.2)' : '#f5ebe0', fontSize: '18px', cursor: index === 0 ? 'default' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s ease'}}>←</button>
            <button onClick={() => setIndex(i => Math.min(produits.length - 1, i + 1))} disabled={index === produits.length - 1}
              style={{width: '48px', height: '48px', borderRadius: '50%', background: index === produits.length - 1 ? 'rgba(255,255,255,0.05)' : '#8b1a1a', border: '1px solid rgba(255,255,255,0.15)', color: index === produits.length - 1 ? 'rgba(255,255,255,0.2)' : '#fff', fontSize: '18px', cursor: index === produits.length - 1 ? 'default' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s ease'}}>→</button>
          </div>
        </div>

      </div>

      <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }`}</style>
    </section>
  )
}