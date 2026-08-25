export const AIRTABLE_BASE = 'appSX8pdfPJp2Wp6o'
export const AIRTABLE_TABLE = 'tbl9SOUNbPx3jLSFL'
// AIRTABLE_API_URL ne sert qu'aux tests locaux (mock) ; en production l'API Airtable est utilisée.
export const AIRTABLE_API = process.env.AIRTABLE_API_URL ?? `https://api.airtable.com/v0/${AIRTABLE_BASE}/${AIRTABLE_TABLE}`

/**
 * Vrai si la requête porte le bon code d'accès (env ADMIN_CODE). Sans ADMIN_CODE configuré, tout est refusé.
 * L'en-tête arrive encodé en URI (les en-têtes HTTP n'acceptent pas les accents) ; la valeur env est
 * comparée après trim pour tolérer un espace ou retour à la ligne collé lors du copier-coller dans Vercel.
 */
export function autorise(req: Request): boolean {
  const code = (process.env.ADMIN_CODE ?? '').trim()
  if (!code) return false
  try {
    return decodeURIComponent(req.headers.get('x-admin-code') ?? '') === code
  } catch {
    return false
  }
}

/** Vrai si le code d'accès est configuré côté serveur. */
export function codeConfigure(): boolean {
  return Boolean((process.env.ADMIN_CODE ?? '').trim())
}
