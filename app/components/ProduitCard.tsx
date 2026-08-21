import type { Produit } from '../lib/produits'

export default function ProduitCard({ produit }: { produit: Produit }) {
  return (
    <article className={`carte${produit.bientot ? ' bientot' : ''}`}>
      <div className="visuel">
        <img src={produit.img} alt={produit.nom} loading="lazy" />
      </div>
      {produit.bientot && <span className="etiquette">Bientôt</span>}
      <h3>{produit.nom}</h3>
      <p>{produit.desc}</p>
    </article>
  )
}
