/**
 * Commercial facts about the plans, kept out of the translation files so the
 * price exists exactly once. The UI formats it per locale with Intl, and the
 * JSON-LD `Offer` uses the same number — they can never drift apart.
 */
export const PLANS = [
  { slug: 'essential', priceEUR: 79 },
  { slug: 'professional', priceEUR: 169 },
  { slug: 'enterprise', priceEUR: null },
] as const;

export const CURRENCY = 'EUR';

/** Free trial length in days, quoted in the hero and in the JSON-LD offers. */
export const TRIAL_DAYS = 30;

export function formatPrice(priceEUR: number, lang: string): string {
  return new Intl.NumberFormat(lang === 'es' ? 'es-ES' : 'en-US', {
    style: 'currency',
    currency: CURRENCY,
    maximumFractionDigits: 0,
  }).format(priceEUR);
}
