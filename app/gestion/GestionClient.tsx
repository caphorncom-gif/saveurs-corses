'use client'

import { useCallback, useEffect, useState } from 'react'

type Expo = {
  id: string
  nom: string
  detail: string
  debut: string
  fin: string | null
  type: string
  visible: boolean
}

const MOIS = ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.']

function formatDate(iso: string) {
  if (!iso) return ''
  const j = parseInt(iso.slice(8, 10), 10)
  return `${j} ${MOIS[parseInt(iso.slice(5, 7), 10) - 1]}`
}

function plage(e: Expo) {
  if (!e.fin || e.fin === e.debut) return formatDate(e.debut)
  return `${formatDate(e.debut)} → ${formatDate(e.fin)}`
}

const vide = { nom: '', detail: '', debut: '', fin: '', type: 'Marché' }

export default function GestionClient() {
  const [code, setCode] = useState('')
  const [codeValide, setCodeValide] = useState<string | null>(null)
  const [erreurCode, setErreurCode] = useState(false)
  const [expos, setExpos] = useState<Expo[] | null>(null)
  const [form, setForm] = useState(vide)
  const [statut, setStatut] = useState<'repos' | 'envoi' | 'erreur'>('repos')
  const [suppressionEnCours, setSuppressionEnCours] = useState<string | null>(null)

  const charger = useCallback(async (c: string) => {
    const res = await fetch('/api/admin/expos', { headers: { 'x-admin-code': c } })
    if (res.status === 401) {
      localStorage.removeItem('sc-code')
      setCodeValide(null)
      setErreurCode(true)
      return
    }
    if (!res.ok) { setStatut('erreur'); return }
    const data = await res.json()
    setExpos(data.expos)
    setCodeValide(c)
    localStorage.setItem('sc-code', c)
  }, [])

  useEffect(() => {
    const c = localStorage.getItem('sc-code')
    if (c) charger(c)
  }, [charger])

  const ajouter = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!codeValide) return
    setStatut('envoi')
    const res = await fetch('/api/admin/expos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-admin-code': codeValide },
      body: JSON.stringify({ ...form, fin: form.fin || null }),
    })
    if (res.ok) {
      setForm(vide)
      setStatut('repos')
      charger(codeValide)
    } else setStatut('erreur')
  }

  const supprimer = async (expo: Expo) => {
    if (!codeValide) return
    if (!window.confirm(`Supprimer « ${expo.nom} » (${plage(expo)}) ?`)) return
    setSuppressionEnCours(expo.id)
    const res = await fetch(`/api/admin/expos/${expo.id}`, {
      method: 'DELETE',
      headers: { 'x-admin-code': codeValide },
    })
    setSuppressionEnCours(null)
    if (res.ok) charger(codeValide)
    else setStatut('erreur')
  }

  const aujourdhui = new Date().toISOString().slice(0, 10)

  // ------- Écran code d'accès -------
  if (!codeValide) {
    return (
      <section style={{ background: 'var(--ardoise)', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
        <form
          onSubmit={e => { e.preventDefault(); setErreurCode(false); charger(code.trim()) }}
          style={{ width: '100%', maxWidth: '360px', textAlign: 'center', color: 'var(--creme)' }}
        >
          <img src="/images/logo.png" alt="" width={72} height={72} style={{ margin: '0 auto 16px', objectFit: 'contain' }} />
          <h1 className="serif" style={{ fontSize: '26px', fontWeight: 600, marginBottom: '6px' }}>Gestion de l’agenda</h1>
          <p style={{ fontSize: '14px', color: 'rgba(246,238,222,.6)', marginBottom: '24px' }}>Espace réservé — Saveurs Corses</p>
          <input
            type="password"
            inputMode="numeric"
            placeholder="Code d’accès"
            value={code}
            onChange={e => setCode(e.target.value)}
            className="champ"
            style={{ textAlign: 'center', fontSize: '18px', letterSpacing: '.3em', marginBottom: '12px' }}
            autoFocus
          />
          {erreurCode && <p style={{ fontSize: '13px', color: '#f0958b', marginBottom: '12px' }}>Code incorrect, réessayez.</p>}
          <button type="submit" className="btn btn-rouge" style={{ width: '100%' }}>Entrer</button>
        </form>
      </section>
    )
  }

  // ------- Écran gestion -------
  const aVenir = (expos ?? []).filter(e => (e.fin ?? e.debut) >= aujourdhui)
  const passees = (expos ?? []).filter(e => (e.fin ?? e.debut) < aujourdhui)

  return (
    <section style={{ background: 'var(--creme)', minHeight: '80vh', paddingBottom: '64px' }}>
      <div style={{ maxWidth: '560px', margin: '0 auto', padding: '28px 18px 0' }}>
        <h1 className="serif" style={{ fontSize: '26px', fontWeight: 640, marginBottom: '4px' }}>Agenda des expositions</h1>
        <p style={{ fontSize: '14px', color: 'var(--brun-doux)', marginBottom: '28px' }}>
          Les dates ajoutées ici apparaissent immédiatement sur le site.
        </p>

        {/* Formulaire d'ajout */}
        <form onSubmit={ajouter} style={{
          background: '#fdf8ee', border: '1px solid rgba(43,28,14,.12)', borderRadius: '14px',
          padding: '20px 18px', marginBottom: '32px',
          display: 'flex', flexDirection: 'column', gap: '10px',
        }}>
          <h2 className="serif" style={{ fontSize: '18px', fontWeight: 640 }}>Ajouter une date</h2>
          <input type="text" placeholder="Nom (ex. Marché de Compiègne)" required value={form.nom}
            onChange={e => setForm({ ...form, nom: e.target.value })}
            className="champ champ-clair" />
          <input type="text" placeholder="Lieu / précision (ex. Centre-ville)" value={form.detail}
            onChange={e => setForm({ ...form, detail: e.target.value })}
            className="champ champ-clair" />
          <div style={{ display: 'flex', gap: '10px' }}>
            <label style={{ flex: 1, minWidth: 0, fontSize: '12px', color: 'var(--brun-doux)', fontWeight: 700 }}>
              Du
              <input type="date" required value={form.debut}
                onChange={e => setForm({ ...form, debut: e.target.value })}
                className="champ champ-clair" style={{ marginTop: '4px', minWidth: 0 }} />
            </label>
            <label style={{ flex: 1, minWidth: 0, fontSize: '12px', color: 'var(--brun-doux)', fontWeight: 700 }}>
              Au (facultatif)
              <input type="date" value={form.fin} min={form.debut}
                onChange={e => setForm({ ...form, fin: e.target.value })}
                className="champ champ-clair" style={{ marginTop: '4px', minWidth: 0 }} />
            </label>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            {['Marché', 'Exposition', 'Salon'].map(t => (
              <button key={t} type="button" onClick={() => setForm({ ...form, type: t })} style={{
                flex: 1, padding: '10px 0', borderRadius: '999px', cursor: 'pointer',
                fontSize: '12px', fontWeight: 800, letterSpacing: '.08em', textTransform: 'uppercase',
                border: form.type === t ? '2px solid var(--rouge)' : '1px solid rgba(43,28,14,.25)',
                background: form.type === t ? 'rgba(156,33,33,.08)' : 'transparent',
                color: form.type === t ? 'var(--rouge)' : 'var(--brun-doux)',
              }}>{t}</button>
            ))}
          </div>
          {statut === 'erreur' && (
            <p style={{ fontSize: '13px', color: '#b3392f' }}>Erreur — réessayez ou appelez Kévin.</p>
          )}
          <button type="submit" disabled={statut === 'envoi'} className="btn btn-rouge" style={{ opacity: statut === 'envoi' ? .6 : 1 }}>
            {statut === 'envoi' ? 'Ajout…' : 'Ajouter au site'}
          </button>
        </form>

        {/* Dates à venir */}
        <h2 className="serif" style={{ fontSize: '18px', fontWeight: 640, marginBottom: '12px' }}>
          À venir ({aVenir.length})
        </h2>
        {expos === null && <p style={{ color: 'var(--brun-doux)' }}>Chargement…</p>}
        {expos !== null && aVenir.length === 0 && <p style={{ color: 'var(--brun-doux)' }}>Aucune date à venir.</p>}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '32px' }}>
          {aVenir.map(e => (
            <div key={e.id} style={{
              display: 'flex', alignItems: 'center', gap: '12px',
              background: '#fff', border: '1px solid rgba(43,28,14,.12)', borderRadius: '10px',
              padding: '12px 14px',
            }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontWeight: 700, fontSize: '15px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{e.nom}</p>
                <p style={{ fontSize: '13px', color: 'var(--brun-doux)' }}>
                  {plage(e)}{e.detail ? ` · ${e.detail}` : ''} · {e.type}
                </p>
              </div>
              <button onClick={() => supprimer(e)} disabled={suppressionEnCours === e.id} aria-label={`Supprimer ${e.nom}`} style={{
                flexShrink: 0, width: '40px', height: '40px', borderRadius: '10px', cursor: 'pointer',
                border: '1px solid rgba(179,57,47,.35)', background: 'rgba(179,57,47,.07)',
                color: '#b3392f', fontSize: '17px', opacity: suppressionEnCours === e.id ? .4 : 1,
              }}>✕</button>
            </div>
          ))}
        </div>

        {/* Dates passées */}
        {passees.length > 0 && (
          <>
            <h2 className="serif" style={{ fontSize: '16px', fontWeight: 640, marginBottom: '10px', color: 'var(--brun-doux)' }}>
              Passées ({passees.length}) — plus affichées sur le site
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', opacity: .6 }}>
              {passees.map(e => (
                <div key={e.id} style={{
                  display: 'flex', alignItems: 'center', gap: '12px',
                  background: 'transparent', border: '1px dashed rgba(43,28,14,.2)', borderRadius: '10px',
                  padding: '10px 14px',
                }}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontWeight: 700, fontSize: '14px' }}>{e.nom}</p>
                    <p style={{ fontSize: '12.5px', color: 'var(--brun-doux)' }}>{plage(e)}</p>
                  </div>
                  <button onClick={() => supprimer(e)} aria-label={`Supprimer ${e.nom}`} style={{
                    flexShrink: 0, width: '34px', height: '34px', borderRadius: '8px', cursor: 'pointer',
                    border: '1px solid rgba(43,28,14,.2)', background: 'transparent',
                    color: 'var(--brun-doux)', fontSize: '14px',
                  }}>✕</button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
