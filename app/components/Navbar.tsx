'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const liens = [
  { href: '/produits', label: 'Nos produits' },
  { href: '/agenda', label: 'Agenda' },
  { href: '/notre-histoire', label: 'Notre histoire' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [ouvert, setOuvert] = useState(false)

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(246,238,222,.92)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(43,28,14,.12)',
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '12px clamp(20px, 4vw, 48px)',
        maxWidth: '1320px', margin: '0 auto',
      }}>
        <Link href="/" onClick={() => setOuvert(false)} style={{ display: 'flex', alignItems: 'center', gap: '13px' }}>
          <img src="/images/logo.png" alt="" width={48} height={48} style={{ objectFit: 'contain' }} />
          <span className="serif" style={{ fontWeight: 700, fontSize: '20px', lineHeight: 1.1, color: 'var(--encre)' }}>
            Saveurs Corses
            <small style={{
              display: 'block', fontFamily: 'var(--font-karla)', fontWeight: 700,
              fontSize: '9px', letterSpacing: '.26em', textTransform: 'uppercase',
              color: 'var(--rouge)', marginTop: '3px',
            }}>Charcuteries · Venette, Oise</small>
          </span>
        </Link>

        {/* Desktop */}
        <nav className="nav-desktop" style={{ gap: 'clamp(16px, 2.5vw, 32px)', alignItems: 'center' }}>
          {liens.map(l => (
            <Link key={l.href} href={l.href} style={{
              fontSize: '13px', fontWeight: 700, letterSpacing: '.14em',
              textTransform: 'uppercase',
              color: pathname === l.href ? 'var(--rouge)' : 'var(--encre)',
              borderBottom: pathname === l.href ? '2px solid var(--rouge)' : '2px solid transparent',
              paddingBottom: '2px',
            }}>{l.label}</Link>
          ))}
          <a href="tel:0658589580" style={{
            background: 'var(--encre)', color: 'var(--creme)',
            padding: '10px 18px', borderRadius: '999px',
            fontSize: '12.5px', fontWeight: 700, letterSpacing: '.1em',
          }}>06 58 58 95 80</a>
        </nav>

        {/* Burger mobile */}
        <button
          className="nav-burger"
          onClick={() => setOuvert(o => !o)}
          aria-label={ouvert ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={ouvert}
          style={{
            background: 'none', border: 'none', cursor: 'pointer', padding: '8px',
            flexDirection: 'column', gap: '5px',
          }}
        >
          <span style={{ width: '24px', height: '2px', background: 'var(--encre)', transition: 'transform .2s', transform: ouvert ? 'translateY(7px) rotate(45deg)' : 'none' }} />
          <span style={{ width: '24px', height: '2px', background: 'var(--encre)', opacity: ouvert ? 0 : 1, transition: 'opacity .2s' }} />
          <span style={{ width: '24px', height: '2px', background: 'var(--encre)', transition: 'transform .2s', transform: ouvert ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
        </button>
      </div>

      {/* Menu mobile déroulé */}
      {ouvert && (
        <nav className="nav-burger" style={{
          display: 'flex', flexDirection: 'column',
          padding: '8px 20px 24px', gap: '4px',
          borderTop: '1px solid rgba(43,28,14,.08)',
        }}>
          {liens.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOuvert(false)} style={{
              padding: '13px 4px',
              fontSize: '15px', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase',
              color: pathname === l.href ? 'var(--rouge)' : 'var(--encre)',
              borderBottom: '1px solid rgba(43,28,14,.07)',
            }}>{l.label}</Link>
          ))}
          <a href="tel:0658589580" className="btn btn-rouge" style={{ marginTop: '16px', textAlign: 'center' }}>
            ☎ 06 58 58 95 80
          </a>
        </nav>
      )}
    </header>
  )
}
