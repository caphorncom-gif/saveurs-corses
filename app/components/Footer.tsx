export default function Footer() {
    return (
      <footer style={{
        background: 'linear-gradient(to right, #1a0a02, #0d0602)',
        borderTop: '1px solid rgba(139,26,26,0.3)',
        padding: '28px 48px',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px',
        scrollSnapAlign: 'none',
        flexShrink: 0,
      }}>
        {/* GAUCHE */}
        <div style={{display: 'flex', flexDirection: 'column', gap: '6px', justifyContent: 'center'}}>
          <p style={{fontFamily: 'Playfair Display, serif', fontSize: '14px', color: 'rgba(245,235,224,0.7)', margin: 0, fontStyle: 'italic'}}>
            Saveurs Corses
          </p>
          <p style={{fontSize: '11px', color: 'rgba(245,235,224,0.3)', margin: 0}}>
            © {new Date().getFullYear()} — Tous droits réservés · Venette, Oise
          </p>
          {/* RÉSEAUX SOCIAUX */}
          <div style={{display: 'flex', gap: '12px', marginTop: '6px'}}>
            <a href="https://www.instagram.com/saveurs.corses60/" target="_blank" rel="noopener noreferrer"
              style={{display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'rgba(245,235,224,0.5)', textDecoration: 'none', transition: 'color 0.2s'}}
              onMouseEnter={e => (e.currentTarget.style.color = '#E1306C')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,235,224,0.5)')}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Instagram
            </a>
            {/* Facebook — à activer quand la page sera créée */}
            <span style={{display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'rgba(245,235,224,0.2)', cursor: 'not-allowed'}}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </span>
          </div>
        </div>
  
        {/* DROITE */}
        <div style={{display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap'}}>
          <a href="#" style={{fontSize: '11px', color: 'rgba(245,235,224,0.4)', textDecoration: 'none', letterSpacing: '0.5px'}}
            onMouseEnter={e => (e.currentTarget.style.color = 'rgba(245,235,224,0.8)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,235,224,0.4)')}>
            Mentions légales
          </a>
          <a href="#" style={{fontSize: '11px', color: 'rgba(245,235,224,0.4)', textDecoration: 'none', letterSpacing: '0.5px'}}
            onMouseEnter={e => (e.currentTarget.style.color = 'rgba(245,235,224,0.8)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,235,224,0.4)')}>
            Politique de confidentialité
          </a>
          <div style={{width: '1px', height: '16px', background: 'rgba(139,26,26,0.4)'}} />
          <a href="https://caphorncom.fr" target="_blank" rel="noopener noreferrer"
            style={{fontSize: '11px', color: 'rgba(245,235,224,0.4)', textDecoration: 'none', letterSpacing: '0.5px'}}
            onMouseEnter={e => (e.currentTarget.style.color = '#8b1a1a')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,235,224,0.4)')}>
            Site réalisé par <strong style={{color: 'rgba(245,235,224,0.6)', fontWeight: 700}}>Cap Horn Communications</strong>
          </a>
        </div>
      </footer>
    )
  }