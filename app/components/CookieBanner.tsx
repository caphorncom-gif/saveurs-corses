'use client'

import { useState, useEffect } from 'react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div style={{
      position: 'fixed', bottom: '24px', left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 9999,
      width: 'calc(100% - 48px)',
      maxWidth: '720px',
      background: 'linear-gradient(135deg, #1a0a02, #2a1208)',
      border: '1px solid rgba(139,26,26,0.4)',
      borderRadius: '8px',
      padding: '20px 24px',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '16px',
      boxShadow: '0 8px 40px rgba(0,0,0,0.5)',
    }}>
      <div style={{flex: 1, minWidth: '200px'}}>
        <p style={{fontFamily: 'Playfair Display, serif', fontSize: '15px', fontWeight: 700, color: '#f5ebe0', marginBottom: '6px'}}>
          🍪 Ce site utilise des cookies
        </p>
        <p style={{fontSize: '12px', color: 'rgba(245,235,224,0.6)', lineHeight: 1.6, margin: 0}}>
          Nous utilisons des cookies pour améliorer votre expérience de navigation. En continuant, vous acceptez notre{' '}
          <a href="#" style={{color: '#8b1a1a', textDecoration: 'underline'}}>politique de confidentialité</a>.
        </p>
      </div>
      <div style={{display: 'flex', gap: '10px', flexShrink: 0}}>
        <button onClick={decline} style={{
          padding: '10px 20px', fontSize: '11px', fontWeight: 700,
          letterSpacing: '1px', textTransform: 'uppercase',
          background: 'transparent', border: '1px solid rgba(245,235,224,0.2)',
          color: 'rgba(245,235,224,0.5)', borderRadius: '4px', cursor: 'pointer',
          transition: 'all 0.2s ease',
        }}
          onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(245,235,224,0.5)')}
          onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(245,235,224,0.2)')}>
          Refuser
        </button>
        <button onClick={accept} style={{
          padding: '10px 20px', fontSize: '11px', fontWeight: 700,
          letterSpacing: '1px', textTransform: 'uppercase',
          background: '#8b1a1a', border: 'none',
          color: '#fff', borderRadius: '4px', cursor: 'pointer',
          transition: 'background 0.2s ease',
        }}
          onMouseEnter={e => (e.currentTarget.style.background = '#6b1212')}
          onMouseLeave={e => (e.currentTarget.style.background = '#8b1a1a')}>
          Accepter
        </button>
      </div>
    </div>
  )
}