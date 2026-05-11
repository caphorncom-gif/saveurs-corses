export default function Footer() {
    return (
      <footer style={{
        background: '#0d0602',
        borderTop: '0.5px solid rgba(255,255,255,0.08)',
        padding: '20px 40px',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '12px',
        scrollSnapAlign: 'none',
        minHeight: '80px',
        flexShrink: 0,
      }}>
        <p style={{fontSize: '12px', color: 'rgba(245,235,224,0.35)', margin: 0}}>
          © {new Date().getFullYear()} Saveurs Corses — Tous droits réservés
        </p>
        <div style={{display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap'}}>
          <a href="#" style={{fontSize: '11px', color: 'rgba(245,235,224,0.35)', textDecoration: 'none'}}>Mentions légales</a>
          <a href="#" style={{fontSize: '11px', color: 'rgba(245,235,224,0.35)', textDecoration: 'none'}}>Politique de confidentialité</a>
          <span style={{fontSize: '11px', color: 'rgba(245,235,224,0.15)'}}>|</span>
          <a href="https://caphorncom.fr" target="_blank" rel="noopener noreferrer" style={{fontSize: '11px', color: 'rgba(245,235,224,0.35)', textDecoration: 'none'}}>
            Site réalisé par <strong style={{color: 'rgba(245,235,224,0.6)'}}>Cap Horn Communications</strong>
          </a>
        </div>
      </footer>
    )
  }