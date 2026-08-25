'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({ nom: '', email: '', telephone: '', sujet: '', message: '', societe: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setStatus('success')
        setFormData({ nom: '', email: '', telephone: '', sujet: '', message: '', societe: '' })
      } else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <input type="text" placeholder="Votre nom" required className="champ" value={formData.nom}
        onChange={e => setFormData({ ...formData, nom: e.target.value })} />
      <input type="email" placeholder="Votre e-mail" required className="champ" value={formData.email}
        onChange={e => setFormData({ ...formData, email: e.target.value })} />
      <input type="tel" placeholder="Votre téléphone" required className="champ" value={formData.telephone}
        autoComplete="tel" pattern="[0-9+ .\-]{6,20}"
        onChange={e => setFormData({ ...formData, telephone: e.target.value })} />
      {/* Piège anti-spam : champ invisible pour les humains, rempli par les robots */}
      <input type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" value={formData.societe}
        onChange={e => setFormData({ ...formData, societe: e.target.value })}
        style={{ position: 'absolute', left: '-9999px', height: 0, width: 0, opacity: 0, pointerEvents: 'none' }}
        name="societe" placeholder="Société" />
      <input type="text" placeholder="Sujet" required className="champ" value={formData.sujet}
        onChange={e => setFormData({ ...formData, sujet: e.target.value })} />
      <textarea placeholder="Votre message..." rows={5} required className="champ" style={{ resize: 'vertical' }}
        value={formData.message}
        onChange={e => setFormData({ ...formData, message: e.target.value })} />
      {status === 'success' && (
        <p style={{ fontSize: '13.5px', color: '#8fd6a8', padding: '12px 16px', background: 'rgba(111,207,151,.12)', borderRadius: '8px', border: '1px solid rgba(111,207,151,.35)' }}>
          Message envoyé ! Nous vous répondrons rapidement.
        </p>
      )}
      {status === 'error' && (
        <p style={{ fontSize: '13.5px', color: '#f0958b', padding: '12px 16px', background: 'rgba(235,87,87,.12)', borderRadius: '8px', border: '1px solid rgba(235,87,87,.35)' }}>
          Erreur lors de l&apos;envoi. Réessayez ou appelez le 06 58 58 95 80.
        </p>
      )}
      <button type="submit" disabled={status === 'sending'} className="btn btn-rouge" style={{ alignSelf: 'flex-start', opacity: status === 'sending' ? .6 : 1 }}>
        {status === 'sending' ? 'Envoi…' : 'Envoyer le message'}
      </button>
    </form>
  )
}
