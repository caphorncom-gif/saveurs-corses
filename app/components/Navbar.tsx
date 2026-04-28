'use client'

import { useEffect, useState } from 'react'

const sections = ['accueil', 'apropos', 'galerie', 'produits', 'agenda', 'contact']
const labels = ['Accueil', 'À propos', 'Galerie', 'Produits', 'Agenda', 'Contact']

export default function Navbar() {
  const [active, setActive] = useState('accueil')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { threshold: 0.5 }
    )
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* NAVBAR EN HAUT */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-3"
        style={{background: 'rgba(28,13,4,0.9)', backdropFilter: 'blur(8px)', borderBottom: '0.5px solid rgba(255,255,255,0.07)'}}>
        <div className="text-lg font-bold" style={{fontFamily: 'Playfair Display, serif', color: '#f5ebe0'}}>
          Saveurs <span style={{color: '#e07040'}}>Corses</span>
        </div>
        <div className="flex gap-1">
          {sections.map((id, i) => (
            <button key={id} onClick={() => scrollTo(id)}
              className="px-3 py-2 text-xs font-bold tracking-widest uppercase transition-colors"
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: 'Lato, sans-serif',
                color: active === id ? '#e07040' : 'rgba(245,235,224,0.4)'
              }}>
              {labels[i]}
            </button>
          ))}
        </div>
      </nav>

      {/* POINTS DE NAVIGATION À DROITE */}
      <div className="fixed right-5 top-1/2 z-50 flex flex-col gap-2" style={{transform: 'translateY(-50%)'}}>
        {sections.map((id) => (
          <button key={id} onClick={() => scrollTo(id)}
            className="rounded-full transition-all"
            style={{
              width: active === id ? '8px' : '6px',
              height: active === id ? '8px' : '6px',
              background: active === id ? '#e07040' : 'rgba(245,235,224,0.2)',
              border: 'none', cursor: 'pointer', padding: 0,
              transform: active === id ? 'scale(1.3)' : 'scale(1)'
            }} />
        ))}
      </div>
    </>
  )
}