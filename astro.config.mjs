// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

const site = (process.env.SITE_URL ?? 'https://atriopms.com').replace(/\/$/, '');

// https://astro.build/config
export default defineConfig({
  site,
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      // Emits <xhtml:link rel="alternate" hreflang> for every page, so search
      // engines treat / and /en/ as one page in two languages.
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es-ES', en: 'en-US' },
      },
      changefreq: 'monthly',
      priority: 0.9,
      lastmod: new Date(),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
