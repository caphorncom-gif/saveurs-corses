import { pastille, plageEnLettres, type Expo } from '../lib/agenda'

const tagClass: Record<Expo['type'], string> = {
  'Marché': 'tag marche',
  'Exposition': 'tag',
  'Salon': 'tag salon',
}

export default function DateCard({ expo }: { expo: Expo }) {
  const p = pastille(expo)
  return (
    <div className="date-carte">
      <div className="date-bloc">
        <div className="jour">{p.jour}</div>
        <div className="mois">{p.mois}</div>
      </div>
      <div>
        <h3 className="serif">{expo.nom}</h3>
        <p className="detail">{expo.detail} — {plageEnLettres(expo)}</p>
        <span className={tagClass[expo.type]}>{expo.type}</span>
      </div>
    </div>
  )
}
