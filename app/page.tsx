export default function Home() {
  return (
    <main>

      {/* SECTION 1 — HERO */}
      <section id="accueil" style={{background: 'var(--brun)'}} className="flex flex-col items-center justify-center text-center px-8 relative">
        <p className="text-xs tracking-widest uppercase mb-4" style={{color: 'var(--miel)'}}>Charcuteries & spécialités corses · Venette, Oise</p>
        <h1 className="text-5xl font-bold mb-4 leading-tight" style={{color: 'var(--creme)'}}>
          Le goût vrai<br />de <em style={{color: 'var(--miel)'}}>l'Île de Beauté</em>
        </h1>
        <p className="text-sm leading-relaxed max-w-md mb-8" style={{color: 'var(--texte-muted)'}}>
          Une sélection rigoureuse de produits corses authentiques, issus d'un savoir-faire ancestral — présents sur les marchés et galeries de l'Oise.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <a href="#produits" className="px-6 py-3 text-xs font-bold tracking-widest uppercase text-white rounded-sm" style={{background: 'var(--rouge)'}}>Nos produits</a>
          <a href="#agenda" className="px-6 py-3 text-xs font-bold tracking-widest uppercase rounded-sm" style={{color: 'var(--creme)', border: '1px solid rgba(245,235,224,0.2)'}}>Agenda des expos</a>
        </div>
        <div className="absolute bottom-8 flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest uppercase" style={{color: 'rgba(160,128,96,0.5)'}}>Défiler</span>
          <div className="w-4 h-4 border-r-2 border-b-2 rotate-45 animate-bounce" style={{borderColor: 'var(--rouge)'}}></div>
        </div>
      </section>

      {/* SECTION 2 — À PROPOS */}
      <section id="apropos" className="grid grid-cols-2 gap-8 px-12 items-center" style={{background: '#fffaf6'}}>
        <div>
          <p className="text-xs tracking-widest uppercase mb-2" style={{color: 'var(--rouge)'}}>Qui sommes-nous</p>
          <h2 className="text-3xl font-bold mb-4" style={{color: '#1a0a02'}}>Une passion pour les traditions culinaires de l'Île de Beauté</h2>
          <p className="text-sm leading-relaxed mb-3" style={{color: '#5a3a2a'}}>
            Saveurs Corses est une petite entreprise passionnée, dédiée à la mise en valeur des traditions culinaires corses. Présente sur les marchés et dans les galeries marchandes, elle propose une sélection rigoureuse de produits authentiques issus d'un savoir-faire ancestral.
          </p>
          <p className="text-sm leading-relaxed" style={{color: '#5a3a2a'}}>
            À travers chaque produit, l'ambition est de faire découvrir le goût vrai, la générosité et l'authenticité de la Corse — dans un esprit de proximité et de convivialité.
          </p>
          <div className="flex items-center gap-2 mt-4 pt-4 text-sm" style={{borderTop: '1px solid #e8d5c4', color: '#5a3a2a'}}>
            <span>📍 Venette, 60280 —</span>
            <strong style={{color: 'var(--rouge)'}}>06 58 58 95 80</strong>
          </div>
        </div>
        <div className="flex flex-col gap-6 pl-8" style={{borderLeft: '1px solid #e8d5c4'}}>
          <div>
            <p className="text-3xl font-bold" style={{fontFamily: 'Playfair Display, serif', color: 'var(--rouge)'}}>100%</p>
            <p className="text-xs mt-1" style={{color: '#5a3a2a'}}>Produits corses authentiques</p>
          </div>
          <div>
            <p className="text-3xl font-bold" style={{fontFamily: 'Playfair Display, serif', color: 'var(--rouge)'}}>Artisan</p>
            <p className="text-xs mt-1" style={{color: '#5a3a2a'}}>Producteurs soigneusement sélectionnés</p>
          </div>
          <div>
            <p className="text-3xl font-bold" style={{fontFamily: 'Playfair Display, serif', color: 'var(--rouge)'}}>Local</p>
            <p className="text-xs mt-1" style={{color: '#5a3a2a'}}>Présent dans l'Oise & Compiègne</p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — PRODUITS */}
      <section id="produits" className="px-12 py-16 flex flex-col justify-center" style={{background: '#2a1208'}}>
        <p className="text-xs tracking-widest uppercase mb-2" style={{color: 'var(--rouge)'}}>Nos spécialités</p>
        <h2 className="text-3xl font-bold mb-8" style={{color: 'var(--creme)'}}>Charcuteries & produits du terroir</h2>
        <div className="grid grid-cols-3 gap-4">
          {[
            { ico: '🥩', nom: 'Saucisson de porc', desc: 'Nature ou aux myrtes, recettes traditionnelles corses' },
            { ico: '🍖', nom: 'Coppa', desc: 'Échine marinée et séchée, texture fondante' },
            { ico: '🥓', nom: 'Lonzo', desc: 'Filet mignon séché aux herbes du maquis' },
            { ico: '🐗', nom: 'Saucisson de sanglier', desc: 'Spécialité marquée, recette ancestrale' },
            { ico: '🍯', nom: 'Miels corses', desc: 'Arômes subtils du maquis et des châtaigneraies' },
            { ico: '🫙', nom: 'Moutardes & gourmandises', desc: 'Moutardes de caractère et spécialités artisanales' },
          ].map((p) => (
            <div key={p.nom} className="p-4 rounded-sm" style={{background: 'rgba(255,255,255,0.05)', borderLeft: '3px solid var(--rouge)'}}>
              <div className="text-2xl mb-2">{p.ico}</div>
              <p className="text-sm font-bold mb-1" style={{color: 'var(--creme)'}}>{p.nom}</p>
              <p className="text-xs leading-relaxed" style={{color: 'var(--texte-muted)'}}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4 — AGENDA */}
      <section id="agenda" className="px-12 flex flex-col justify-center" style={{background: '#fffaf6'}}>
        <p className="text-xs tracking-widest uppercase mb-2" style={{color: 'var(--rouge)'}}>Agenda</p>
        <h2 className="text-3xl font-bold mb-8" style={{color: '#1a0a02'}}>Retrouvez-nous près de chez vous</h2>
        <div className="flex flex-col gap-4">
          {[
            { jour: '1er', mois: 'lundi', lieu: 'Leroy Merlin de Jaux', detail: 'ZAC Jaux-Venette — Chaque premier lundi du mois', tag: 'Mensuel récurrent', recur: true },
            { jour: '→', mois: '', lieu: 'Galerie marchande Carrefour Venette', detail: 'Centre commercial Carrefour, Venette — Dates variables', tag: 'Exposition', recur: false },
            { jour: '+', mois: '', lieu: 'Marchés & événements de l\'Oise', detail: 'Participation régulière à des marchés et foires locales', tag: 'Ponctuels', recur: false },
          ].map((e) => (
            <div key={e.lieu} className="flex gap-4 items-start p-4 rounded-sm" style={{background: '#fff', borderLeft: '3px solid var(--rouge)', border: '0.5px solid #e8d5c4', borderLeftWidth: '3px'}}>
              <div className="text-center min-w-12">
                <p className="text-2xl font-bold" style={{fontFamily: 'Playfair Display, serif', color: 'var(--rouge)'}}>{e.jour}</p>
                <p className="text-xs tracking-widest uppercase" style={{color: '#a08060'}}>{e.mois}</p>
              </div>
              <div>
                <p className="text-sm font-bold mb-1" style={{color: '#1a0a02'}}>{e.lieu}</p>
                <p className="text-xs leading-relaxed" style={{color: '#5a3a2a'}}>{e.detail}</p>
                <span className="inline-block mt-2 text-xs px-2 py-0.5 rounded-sm font-bold tracking-wide"
                  style={e.recur ? {background: '#fef3ef', color: 'var(--rouge)'} : {background: '#f5f0eb', color: '#a08060'}}>
                  {e.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5 — CONTACT */}
      <section id="contact" className="grid grid-cols-2 gap-8 px-12 items-center" style={{background: 'var(--brun)'}}>
        <div>
          <p className="text-xs tracking-widest uppercase mb-2" style={{color: 'var(--miel)'}}>Contact</p>
          <h2 className="text-3xl font-bold mb-4" style={{color: 'var(--creme)'}}>Une question ?<br />Une commande ?</h2>
          <p className="text-sm leading-relaxed mb-6" style={{color: 'var(--texte-muted)'}}>Plateau cadeau, commande spéciale, présence sur un événement... Contactez-nous directement.</p>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 text-sm" style={{color: 'var(--texte-muted)'}}>
              <span>📞</span><strong style={{color: 'var(--miel)'}}>06 58 58 95 80</strong>
            </div>
            <div className="flex items-center gap-3 text-sm" style={{color: 'var(--texte-muted)'}}>
              <span>📍</span><span>Venette, 60280</span>
            </div>
            <div className="flex items-center gap-3 text-sm" style={{color: 'var(--texte-muted)'}}>
              <span>🌐</span><span>saveurs-corses.fr</span>
            </div>
          </div>
        </div>
        <form className="flex flex-col gap-3">
          <input type="text" placeholder="Votre nom" className="w-full px-4 py-3 text-sm rounded-sm outline-none" style={{background: 'rgba(255,255,255,0.05)', border: '0.5px solid rgba(255,255,255,0.1)', color: 'var(--creme)'}} />
          <input type="email" placeholder="Votre e-mail" className="w-full px-4 py-3 text-sm rounded-sm outline-none" style={{background: 'rgba(255,255,255,0.05)', border: '0.5px solid rgba(255,255,255,0.1)', color: 'var(--creme)'}} />
          <input type="text" placeholder="Sujet" className="w-full px-4 py-3 text-sm rounded-sm outline-none" style={{background: 'rgba(255,255,255,0.05)', border: '0.5px solid rgba(255,255,255,0.1)', color: 'var(--creme)'}} />
          <textarea placeholder="Votre message..." rows={4} className="w-full px-4 py-3 text-sm rounded-sm outline-none resize-none" style={{background: 'rgba(255,255,255,0.05)', border: '0.5px solid rgba(255,255,255,0.1)', color: 'var(--creme)'}} />
          <button type="submit" className="self-start px-6 py-3 text-xs font-bold tracking-widest uppercase text-white rounded-sm" style={{background: 'var(--rouge)'}}>
            Envoyer le message
          </button>
        </form>
      </section>

    </main>
  )
}