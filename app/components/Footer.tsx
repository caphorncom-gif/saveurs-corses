import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--ardoise)',
      color: 'rgba(246,238,222,.65)',
      padding: 'clamp(48px, 6vw, 72px) 0 32px',
      fontSize: '14px',
    }}>
      <div className="wrap">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '40px', marginBottom: '48px',
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '13px', marginBottom: '16px' }}>
              <img src="/images/logo.png" alt="" width={44} height={44} style={{ objectFit: 'contain' }} />
              <span className="serif" style={{ fontWeight: 700, fontSize: '19px', lineHeight: 1.1, color: 'var(--creme)' }}>
                Saveurs Corses
                <small style={{
                  display: 'block', fontFamily: 'var(--font-karla)', fontWeight: 700,
                  fontSize: '9px', letterSpacing: '.26em', textTransform: 'uppercase',
                  color: 'var(--miel)', marginTop: '3px',
                }}>Charcuteries · Venette, Oise</small>
              </span>
            </div>
            <p style={{ maxWidth: '300px' }}>
              Charcuteries et spécialités corses authentiques, sur les marchés et galeries de l&apos;Oise.
            </p>
          </div>

          <div>
            <h4 style={{
              fontFamily: 'var(--font-karla)', fontSize: '11.5px', fontWeight: 800,
              letterSpacing: '.24em', textTransform: 'uppercase',
              color: 'var(--miel)', marginBottom: '16px',
            }}>Navigation</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><Link href="/produits" className="hover:text-[var(--creme)]">Nos produits</Link></li>
              <li><Link href="/agenda" className="hover:text-[var(--creme)]">Agenda</Link></li>
              <li><Link href="/notre-histoire" className="hover:text-[var(--creme)]">Notre histoire</Link></li>
              <li><Link href="/contact" className="hover:text-[var(--creme)]">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{
              fontFamily: 'var(--font-karla)', fontSize: '11.5px', fontWeight: 800,
              letterSpacing: '.24em', textTransform: 'uppercase',
              color: 'var(--miel)', marginBottom: '16px',
            }}>Contact</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><a href="tel:0658589580" className="hover:text-[var(--creme)]">06 58 58 95 80</a></li>
              <li>Venette, 60280</li>
              <li>
                <a href="https://www.instagram.com/saveurs.corses60/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--creme)]">Instagram</a>
                {' · '}
                <a href="https://www.facebook.com/profile.php?id=61584344613212" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--creme)]">Facebook</a>
              </li>
            </ul>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(246,238,222,.12)',
          paddingTop: '24px',
          display: 'flex', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap',
          fontSize: '12.5px', color: 'rgba(246,238,222,.4)',
        }}>
          <span>© {new Date().getFullYear()} Saveurs Corses — Tous droits réservés</span>
          <span>
            <Link href="/mentions-legales" className="hover:text-[var(--creme)]">Mentions légales</Link>
            {' · '}
            Site réalisé par{' '}
            <a href="https://caphorncom.fr" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(246,238,222,.6)', fontWeight: 700 }}>
              Cap Horn Communications
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
