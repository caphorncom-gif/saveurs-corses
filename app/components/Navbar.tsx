'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'

const sections = ['accueil', 'apropos', 'produits', 'agenda', 'contact']
const labels = ['Accueil', 'À propos', 'Produits', 'Agenda', 'Contact']

export default function Navbar() {
  const [active, setActive] = useState('accueil')
  const [current, setCurrent] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const isScrolling = useRef(false)

  useEffect(() => {
    const container = document.getElementById('scroll-container')
    if (!container) return
    const allSections = document.querySelectorAll('section')
    allSections.forEach(s => s.classList.add('visible'))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
            const idx = sections.indexOf(entry.target.id)
            if (idx !== -1) setCurrent(idx)
          }
        })
      },
      { threshold: 0.5, root: container }
    )
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      if (isScrolling.current) return
      isScrolling.current = true
      const dir = e.deltaY > 0 ? 1 : -1
      const next = Math.max(0, Math.min(sections.length - 1, current + dir))
      const el = document.getElementById(sections[next])
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        setCurrent(next)
      }
      setTimeout(() => { isScrolling.current = false }, 800)
    }
    container.addEventListener('wheel', handleWheel, { passive: false })
    return () => {
      observer.disconnect()
      container.removeEventListener('wheel', handleWheel)
    }
  }, [current])

  const scrollTo = (id: string) => {
    const idx = sections.indexOf(id)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setCurrent(idx)
      setMenuOpen(false)
    }
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-3"
        style={{background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)', borderBottom: '0.5px solid rgba(26,10,2,0.1)', position: 'absolute'}}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', gap: '32px' }}>

          {/* LOGO */}
          <div style={{ height: '50px', display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <Image src="/logo.png" alt="Saveurs Corses" width={120} height={40} style={{ objectFit: 'contain', maxHeight: '40px', width: 'auto', mixBlendMode: 'multiply' }} />
          </div>

          {/* LIENS */}
          <div className="hidden md:flex gap-1">
            {sections.map((id, i) => (
              <button key={id} onClick={() => scrollTo(id)}
                className="px-3 py-2 text-xs font-bold tracking-widest uppercase"
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Lato, sans-serif', color: active === id ? '#8b1a1a' : 'rgba(37,37,35,0.4)' }}>
                {labels[i]}
              </button>
            ))}
          </div>

          {/* BURGER */}
          <div style={{ position: 'absolute', right: '24px' }}>
            <button className="flex md:hidden flex-col gap-1.5 p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              <span className="block w-6 h-0.5 transition-all duration-300" style={{ background: '#1a0a02', transform: menuOpen ? 'rotate(45deg) translateY(8px)' : 'none' }} />
              <span className="block w-6 h-0.5 transition-all duration-300" style={{ background: '#1a0a02', opacity: menuOpen ? 0 : 1 }} />
              <span className="block w-6 h-0.5 transition-all duration-300" style={{ background: '#1a0a02', transform: menuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none' }} />
            </button>
          </div>

        </div>
      </nav>

      <div className="fixed top-0 left-0 right-0 z-40 flex flex-col pt-16 pb-6 px-6 md:hidden transition-all duration-300"
        style={{ background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(12px)', transform: menuOpen ? 'translateY(0)' : 'translateY(-100%)', opacity: menuOpen ? 1 : 0, pointerEvents: menuOpen ? 'all' : 'none' }}>
        {sections.map((id, i) => (
          <button key={id} onClick={() => scrollTo(id)}
            className="py-4 text-left text-sm font-bold tracking-widest uppercase"
            style={{ background: 'none', border: 'none', borderBottom: '0.5px solid rgba(26,10,2,0.07)', cursor: 'pointer', fontFamily: 'Lato, sans-serif', color: active === id ? '#8b1a1a' : 'rgba(26,10,2,0.5)' }}>
            {labels[i]}
          </button>
        ))}
        <div className="mt-4 text-xs" style={{ color: 'rgba(160,128,96,0.6)' }}>📞 06 58 58 95 80</div>
      </div>

      <div className="hidden md:flex fixed right-5 top-1/2 z-50 flex-col gap-2" style={{ transform: 'translateY(-50%)' }}>
        {sections.map((id) => (
          <button key={id} onClick={() => scrollTo(id)} className="rounded-full transition-all"
            style={{ width: active === id ? '8px' : '6px', height: active === id ? '8px' : '6px', background: active === id ? '#8b1a1a' : 'rgba(26,10,2,0.2)', border: 'none', cursor: 'pointer', padding: 0, transform: active === id ? 'scale(1.3)' : 'scale(1)' }} />
        ))}
      </div>
    </>
  )
}