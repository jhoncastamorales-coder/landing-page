/**
 * Single source of truth for the identity data that SEO and structured data
 * depend on. Everything here ends up in canonical URLs, the sitemap, JSON-LD
 * and llms.txt — so a wrong value here is wrong in a dozen places.
 *
 * ⚠️ Set SITE_URL (env var, or the fallback below) to the real production
 * domain before deploying. Canonicals and the sitemap are absolute URLs; a
 * placeholder domain tells search engines the wrong home for every page.
 */
/** Astro derives `import.meta.env.SITE` from the `site` option in astro.config.mjs. */
export const SITE_URL: string = (import.meta.env.SITE ?? 'https://atriopms.com').replace(/\/$/, '');

export const BRAND = {
  /** Legal / display name of the product. */
  name: 'ATRIO PMS',
  /** Short form used in headings and the wordmark. */
  shortName: 'ATRIO',
  legalName: 'ATRIO Property Management Systems',
  founded: '2021',
  logo: '/atrio-pms-logo.svg',
  ogImage: '/og-image.png',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  email: 'hola@atriopms.com',
  telephone: '+34 900 000 000',
  address: {
    locality: 'Madrid',
    region: 'Madrid',
    country: 'ES',
  },
  /**
   * Profiles that corroborate the entity. Search and answer engines use these
   * to reconcile "ATRIO PMS" with a real organisation — replace the
   * placeholders with the real profiles, and delete any that do not exist.
   */
  sameAs: [
    'https://www.linkedin.com/company/atrio-pms',
    'https://x.com/atriopms',
    'https://github.com/atrio-pms',
  ],
} as const;

/** ISO date the page content last changed materially; feeds `dateModified`. */
export const CONTENT_LAST_MODIFIED = '2026-08-06';
