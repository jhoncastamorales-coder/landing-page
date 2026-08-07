import type { APIRoute } from 'astro';
import { SITE_URL, BRAND, CONTENT_LAST_MODIFIED } from '../consts';
import { PLANS, CURRENCY, TRIAL_DAYS, formatPrice } from '../data/plans';
import { useTranslations } from '../i18n';

/**
 * /llms.txt — the llmstxt.org convention: a curated markdown brief an LLM can
 * read instead of scraping and guessing. Generated from the same dictionaries
 * the page renders, so it can never describe a product the site does not show.
 */
export const GET: APIRoute = () => {
  const es = useTranslations('es');
  const en = useTranslations('en');

  const plans = es.pricing.plans.map((plan, index) => {
    const { priceEUR } = PLANS[index]!;
    const price = priceEUR === null ? es.pricing.priceCustom : `${formatPrice(priceEUR, 'es')}/mes`;
    return `- **${plan.name}** — ${price}. ${plan.description} Incluye: ${plan.features.join('; ')}.`;
  });

  const body = `# ${BRAND.name}

> ${es.seo.definition}

${es.seo.definitionSecondary}

Sitio disponible en español (${SITE_URL}/) e inglés (${SITE_URL}/en/).
Última actualización del contenido: ${CONTENT_LAST_MODIFIED}.

## Ficha técnica

${es.seo.specs.map((spec) => `- **${spec.term}:** ${spec.value}`).join('\n')}

## Capacidades principales

${[es.features.inventory, es.features.operations, es.features.reports, es.features.connectivity]
  .map((feature) => `- **${feature.title}:** ${feature.body}`)
  .join('\n')}

## Inventario híbrido (hoteles y hostales)

${es.hybrid.body}

${es.hybrid.points.map((point) => `- ${point}`).join('\n')}

## Integraciones

${es.integrations.items.map((item) => `- **${item.title}:** ${item.body}`).join('\n')}

## Planes y precios

Moneda: ${CURRENCY}. Facturación mensual, sin permanencia. Prueba gratuita de ${TRIAL_DAYS} días sin tarjeta de crédito.

${plans.join('\n')}

## Preguntas frecuentes

${es.faq.items.map((item) => `### ${item.q}\n\n${item.a}`).join('\n\n')}

## Contacto

- Web: ${SITE_URL}/
- Email: ${BRAND.email}
- Teléfono: ${BRAND.telephone}
- Perfiles: ${BRAND.sameAs.join(', ')}

## English summary

> ${en.seo.definition}

${en.seo.definitionSecondary}

${en.seo.specs.map((spec) => `- **${spec.term}:** ${spec.value}`).join('\n')}

Full English page: ${SITE_URL}/en/
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
