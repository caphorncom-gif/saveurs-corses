const specialites = [
  'Saucisson nature', 'Coppa', 'Lonzo', 'Saucisson aux myrtes',
  'Miels du maquis', 'Terrines', 'Saucisson de sanglier', 'Moutardes',
]

export default function Marquee() {
  const serie = specialites.map((s, i) => (
    <span key={i} style={{ margin: '0 22px' }}>
      {s}<span style={{ fontStyle: 'normal', color: 'var(--rouge)', marginLeft: '44px' }}>✦</span>
    </span>
  ))
  return (
    <div aria-hidden="true" style={{
      background: 'var(--miel)', color: 'var(--ardoise)',
      overflow: 'hidden', padding: '13px 0',
      borderTop: '1px solid rgba(0,0,0,.15)',
      whiteSpace: 'nowrap',
    }}>
      <div className="serif" style={{
        display: 'inline-block',
        animation: 'defile 30s linear infinite',
        fontSize: '17px', fontStyle: 'italic', fontWeight: 500,
      }}>
        {serie}{serie}
      </div>
    </div>
  )
}
