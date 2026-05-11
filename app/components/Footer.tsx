export default function Footer() {
    return (
      <footer style={{
        background: '#0d0602',
        borderTop: '0.5px solid rgba(255,255,255,0.08)',
        padding: '24px 40px',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '12px',
      }}>
        <p style={{ fontSize: '12px', color: 'rgba(245,235,224,0.35)', margin: 0 }}>
          © {new Date().getFullYear()} Saveurs Corses — Tous droits réservés
        </p>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <a href="/mentions-legales" style={{ fontSize: '11px', color: 'rgba(245,235,224,0.35)', textDecoration: 'none', letterSpacing: '0.5px' }}>Mentions légales</a>
          <a href="/politique-confidentialite" style={{ fontSize: '11px', color: 'rgba(245,235,224,0.35)', textDecoration: 'none', letterSpacing: '0.5px' }}>Politique de confidentialité</a>
          <span style={{ fontSize: '11px', color: 'rgba(245,235,224,0.2)' }}>|</span>
          <a href="https://caphorncom.fr" target="_blank" rel="noopener noreferrer" style={{ fontSize: '11px', color: 'rgba(245,235,224,0.35)', textDecoration: 'none', letterSpacing: '0.5px' }}>
            Site réalisé par <strong style={{ color: 'rgba(245,235,224,0.55)' }}>Cap Horn Communications</strong>
          </a>
        </div>
      </footer>
    )
  }