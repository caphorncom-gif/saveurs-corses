export const AIRTABLE_BASE = 'appSX8pdfPJp2Wp6o'
export const AIRTABLE_TABLE = 'tbl9SOUNbPx3jLSFL'
// AIRTABLE_API_URL ne sert qu'aux tests locaux (mock) ; en production l'API Airtable est utilisée.
export const AIRTABLE_API = process.env.AIRTABLE_API_URL ?? `https://api.airtable.com/v0/${AIRTABLE_BASE}/${AIRTABLE_TABLE}`

/** Vrai si la requête porte le bon code d'accès (env ADMIN_CODE). Sans ADMIN_CODE configuré, tout est refusé. */
export function autorise(req: Request): boolean {
  const code = process.env.ADMIN_CODE
  return Boolean(code) && req.headers.get('x-admin-code') === code
}
