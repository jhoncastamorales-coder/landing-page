# ATRIO/PMS — Landing page

Landing page for ATRIO/PMS built with **Astro 7 + TypeScript (strict) + Tailwind CSS v4**, managed with **pnpm**.

- 🌗 Light and dark mode (system preference by default, manual toggle persisted in `localStorage`, no flash on load)
- 🌍 Spanish (default, `/`) and English (`/en/`), with `hreflang` alternates
- 📱 Responsive from 360 px upwards — no horizontal scroll at any breakpoint
- 🔎 SEO + GEO: JSON-LD entity graph, sitemap, `robots.txt`, `llms.txt`, raster OG card
- 🚫 Zero external runtime requests: fonts self-hosted, icons and mockups inline SVG

## ⚠️ Before you launch

The page is production-ready; **the data in it is not**. Replace these first:

| Where | What | Why it matters |
| --- | --- | --- |
| `astro.config.mjs` → `site` (or `SITE_URL` env) | Real production domain | Every canonical, `hreflang`, sitemap entry and JSON-LD `@id` is an absolute URL built from it. A placeholder domain tells Google the wrong home for the whole site. |
| `src/consts.ts` → `BRAND.sameAs` | Real LinkedIn / X / GitHub profiles — **delete the ones that do not exist** | `sameAs` is how engines reconcile "ATRIO PMS" with a real organisation. Pointing at dead URLs weakens the entity instead of strengthening it. |
| `src/consts.ts` → `email`, `telephone`, `address` | Real contact details | Feeds `Organization` and `ContactPoint`. |
| `src/i18n/*.ts` → `stats.items`, `testimonial` | Real figures and a real, permissioned quote | **These are invented placeholders.** "+24% occupancy", "99.9% uptime" and Marina Solís are illustrative. Publishing invented performance claims is a legal and trust problem, and an invented testimonial is worse. |
| `src/data/plans.ts` → `priceEUR` | Real prices | One number drives the page, the JSON-LD `Offer` and `llms.txt`. |
| `src/consts.ts` → `CONTENT_LAST_MODIFIED` | Update when copy changes materially | Feeds `dateModified`. |

Deliberately **not** in the markup: `AggregateRating` and `Review`. Fabricated ratings violate Google's structured-data policies and risk a manual action. Add them only when backed by genuine, verifiable reviews.

## Commands

| Command             | Action                                              |
| ------------------- | --------------------------------------------------- |
| `pnpm install`      | Install dependencies                                |
| `pnpm dev`          | Dev server at `localhost:4321`                      |
| `pnpm build`        | Static build into `./dist/`                         |
| `pnpm preview`      | Serve the production build locally                  |
| `pnpm check`        | Type-check `.astro` and `.ts` files                 |
| `pnpm brand:build`  | Regenerate logo paths, OG card and app icons        |

> `typescript` is pinned to `6.x` because `astro check` still relies on the programmatic API that TypeScript 7 does not expose yet.

## SEO

**Emitted per page**

- `<title>` ≤ 65 chars and `<meta name="description">` ≤ 155 chars, so neither is truncated in results. The check is worth re-running after any copy edit.
- Canonical URL, plus `hreflang` for `es-ES`, `en-US` and `x-default`.
- `robots` with `max-snippet:-1, max-image-preview:large` — engines may quote the page in full.
- Open Graph and Twitter cards pointing at a **1200×630 PNG**. This matters: Facebook, X, LinkedIn, WhatsApp and Slack all ignore SVG `og:image`, so an SVG card silently shows no preview.
- One `<h1>` per page; section headings are `<h2>`; card and FAQ headings are `<h3>`. Footer column labels are `<h3>` on purpose so they do not dilute the `<h2>` signal.

**Site-wide**

| Route | Source |
| --- | --- |
| `/sitemap-index.xml` | `@astrojs/sitemap`, with `xhtml:link` alternates per locale |
| `/robots.txt` | `src/pages/robots.txt.ts` |
| `/llms.txt` | `src/pages/llms.txt.ts` |
| `/site.webmanifest`, icons | `scripts/make-og.mjs` |

**Performance** (all of it feeds Core Web Vitals): fully static HTML, no runtime framework, self-hosted variable font with the latin subset preloaded, no external requests, no layout-shifting images — the product visuals are markup, not photos.

## GEO (generative engine optimisation)

Answer engines quote what they can fetch, parse and trust. Concretely:

1. **Crawlable by assistants.** `robots.txt` allows the AI crawlers explicitly rather than leaving them to the wildcard. Two groups are distinguished in the comments: training/indexing crawlers (`GPTBot`, `ClaudeBot`, `Google-Extended`, `CCBot`…) and live retrieval agents that fetch a page while answering a question (`ChatGPT-User`, `Claude-User`, `Perplexity-User`…). Both are allowed. To opt out of model training while staying citable live, disallow the first group only.
2. **`/llms.txt`** — the [llmstxt.org](https://llmstxt.org) convention: a curated markdown brief covering definition, spec table, capabilities, integrations, prices and FAQ. Generated from the same dictionaries the page renders, so it can never describe a product the site does not show.
3. **A definitional section** (`#what-is-atrio-pms`). One self-contained paragraph that answers "what is this" without needing surrounding context — the shape a model can lift verbatim — plus a **spec table** with `<th scope="row">`, which is the most reliably extracted structure in HTML.
4. **FAQ as real Q&A.** Each question is an `<h3>` inside `<summary>`, so it lands in the document outline, and the whole set is mirrored in `FAQPage` JSON-LD. Answers are self-contained: none of them start with "it depends" or refer back to an earlier answer.
5. **An entity graph, not loose snippets.** One `@graph` with cross-referenced `@id`s — `Organization` → `WebSite` → `SoftwareApplication` (with `Offer` per plan, `featureList`, `audience`) → `WebPage` → `BreadcrumbList` → `FAQPage`. Resolvable in a single pass.
6. **Content in the HTML, not in JavaScript.** Everything is server-rendered; assistant crawlers that do not execute JS still see the full page.

The honest caveat: none of this manufactures authority. Ranking first and being recommended by assistants also needs real inbound links, real reviews on third-party sites, and a real entity footprint. The markup makes the page *eligible* and *easy to quote* — it cannot substitute for those.

## Design system

The page implements **Aura Professional** (`../stitch_atrio_pms_administrative_dashboard/aura_professional/DESIGN.md`) — high-end corporate: minimalism plus glassmorphism, Hanken Grotesk throughout, deep navy authority colour, electric blue in dark mode.

All design tokens live in `src/styles/global.css`:

- Semantic CSS custom properties are declared twice — under `:root` (light, "Crisp Gallery") and under `.dark` (dark, "Deep Slate").
- `@theme inline` maps them to Tailwind utilities, so `bg-surface`, `text-brand`, `border-outline-variant`, … repaint themselves when the theme flips. Components never hard-code a colour or a `dark:` colour variant.
- Custom utilities: `glass` (Tier 2 glass panel), `headline-section` (responsive section headline), `orb` (ambient blur).

## Internationalisation

Astro's built-in i18n routing with `prefixDefaultLocale: false`:

- `src/pages/index.astro` → `/` (Spanish)
- `src/pages/en/index.astro` → `/en/` (English)

Both render the same `src/components/LandingPage.astro`.

Copy lives in `src/i18n/es.ts` and `src/i18n/en.ts`. Spanish is the source of truth: `Translation` is inferred from it and `en.ts` is typed as `Translation`, so a missing or extra key fails `pnpm check`.

Prices are the exception — they live in `src/data/plans.ts` as numbers and are formatted per locale with `Intl.NumberFormat`, so the page, the JSON-LD offers and `llms.txt` can never quote different figures.

To add a locale: create `src/i18n/<code>.ts` typed as `Translation`, register it in `src/i18n/index.ts` and in `astro.config.mjs` (both `i18n.locales` and the sitemap integration), then add `src/pages/<code>/index.astro`.

## Logo

The header and footer use the real brand artwork (`../stitch_atrio_pms_administrative_dashboard/screen.png/screen.png`), not a redraw. `pnpm brand:build` vectorises it and writes:

| Output | Used by |
| --- | --- |
| `src/generated/logo-paths.ts` | `LogoSprite.astro` — inlines the lockup once per page |
| `public/atrio-pms-logo.svg` | `Organization.logo` in JSON-LD, external use |
| `public/favicon.svg` | Browser tab |
| `public/og-image.png` | `og:image` / `twitter:image` (1200×630) |
| `public/apple-touch-icon.png`, `icon-192.png`, `icon-512.png`, `site.webmanifest` | Home-screen install |

Filled with `currentColor`, so the lockup recolours itself: brand navy `#1a3668` in light mode, white in dark (the `--logo` token). `<Logo />` is a `<use>` reference to a single `<symbol>`, so the ~19 KB of path data appears once per page however many times the logo is shown.

Re-run only when the source artwork changes. The crop regions in `scripts/trace-logo.mjs` are keyed to the current file's ink bounds (x 173–850, y 395–628); new artwork needs those numbers updated.

## Structure

```
scripts/          trace-logo.mjs, make-og.mjs — build-time brand assets
src/
├─ components/    Header, Hero, Definition, Features, Hybrid, Integrations,
│                 Stats, Pricing, Testimonial, Faq, CtaBand, Footer,
│                 StructuredData, LogoSprite, …
├─ consts.ts      Site URL, brand entity, contact — feeds every SEO surface
├─ data/plans.ts  Plan prices (single source of truth)
├─ generated/     logo-paths.ts (generated — do not edit)
├─ i18n/          es.ts (source of truth), en.ts, index.ts
├─ layouts/       Layout.astro — head, meta, JSON-LD, theme script
├─ lib/icons.ts   Inline SVG icon paths
├─ pages/         index.astro (es), en/index.astro, robots.txt.ts, llms.txt.ts
└─ styles/        global.css — design tokens, base layer, utilities
```
