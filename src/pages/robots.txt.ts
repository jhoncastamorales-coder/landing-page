import type { APIRoute } from 'astro';
import { SITE_URL } from '../consts';

/**
 * AI answer engines only cite what they are allowed to fetch, so the assistant
 * crawlers are allowed explicitly rather than left to the wildcard. Two groups
 * matter and are often confused:
 *
 *  - Training/indexing crawlers (GPTBot, ClaudeBot, Google-Extended, CCBot…)
 *    decide whether the content can inform a model or its index.
 *  - Live retrieval agents (ChatGPT-User, Claude-User, Perplexity-User…) fetch
 *    the page while answering a user's question, in real time.
 *
 * Both are allowed here because the goal is to be quoted. To opt out of model
 * training while staying citable live, disallow the first group only.
 */
const AI_AGENTS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-User',
  'Claude-SearchBot',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Googlebot',
  'Bingbot',
  'Applebot',
  'Applebot-Extended',
  'DuckAssistBot',
  'meta-externalagent',
  'Amazonbot',
  'CCBot',
  'cohere-ai',
  'YouBot',
];

export const GET: APIRoute = () => {
  const body = [
    '# https://www.robotstxt.org/robotstxt.html',
    '',
    'User-agent: *',
    'Allow: /',
    '',
    '# Search and AI assistant crawlers — explicitly welcome.',
    ...AI_AGENTS.flatMap((agent) => [`User-agent: ${agent}`, 'Allow: /', '']),
    `Sitemap: ${SITE_URL}/sitemap-index.xml`,
    '',
    '# Structured summary for language models:',
    `# ${SITE_URL}/llms.txt`,
    '',
  ].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
