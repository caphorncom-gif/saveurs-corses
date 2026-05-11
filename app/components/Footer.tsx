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
        <div style={{display: 'flex', flexDirection: 'column', gap: '4px'}}>
          <p style={{fontFamily: 'Playfair Display, serif', fontSize: '14px', color: 'rgba(245,235,224,0.7)', margin: 0, fontStyle: 'italic'}}>
            Saveurs Corses
          </p>
          <p style={{fontSize: '11px', color: 'rgba(245,235,224,0.3)', margin: 0}}>
            © {new Date().getFullYear()} — Tous droits réservés · Venette, Oise
          </p>
        </div>
  
        <div style={{display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap'}}>
          <a href="#" style={{fontSize: '11px', color: 'rgba(245,235,224,0.4)', textDecoration: 'none', letterSpacing: '0.5px', transition: 'color 0.2s'}}
            onMouseEnter={e => (e.currentTarget.style.color = 'rgba(245,235,224,0.8)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,235,224,0.4)')}>
            Mentions légales
          </a>
          <a href="#" style={{fontSize: '11px', color: 'rgba(245,235,224,0.4)', textDecoration: 'none', letterSpacing: '0.5px', transition: 'color 0.2s'}}
            onMouseEnter={e => (e.currentTarget.style.color = 'rgba(245,235,224,0.8)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,235,224,0.4)')}>
            Politique de confidentialité
          </a>
          <div style={{width: '1px', height: '16px', background: 'rgba(139,26,26,0.4)'}} />
          <a href="https://caphorncom.fr" target="_blank" rel="noopener noreferrer"
            style={{fontSize: '11px', color: 'rgba(245,235,224,0.4)', textDecoration: 'none', letterSpacing: '0.5px', transition: 'color 0.2s'}}
            onMouseEnter={e => (e.currentTarget.style.color = '#8b1a1a')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,235,224,0.4)')}>
            Site réalisé par <strong style={{color: 'rgba(245,235,224,0.6)', fontWeight: 700}}>Cap Horn Communications</strong>
          </a>
        </div>
      </footer>
    )
  }