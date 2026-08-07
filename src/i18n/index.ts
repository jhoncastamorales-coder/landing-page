import { es, type Translation } from './es';
import { en } from './en';

export const defaultLang = 'es' as const;

export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

const dictionaries: Record<Lang, Translation> = { es, en };

export function isLang(value: string | undefined): value is Lang {
  return value === 'es' || value === 'en';
}

/** Reads the locale out of a URL pathname (`/en/...` → `en`, everything else → `es`). */
export function getLangFromUrl(url: URL): Lang {
  const [, maybeLang] = url.pathname.split('/');
  return isLang(maybeLang) ? maybeLang : defaultLang;
}

export function useTranslations(lang: Lang): Translation {
  return dictionaries[lang];
}

/**
 * Builds a path for the given locale. The default locale is unprefixed
 * (`prefixDefaultLocale: false` in astro.config.mjs), so `/` is Spanish and
 * `/en/` is English.
 */
export function localizePath(path: string, lang: Lang): string {
  const clean = `/${path.replace(/^\/+/, '')}`;
  if (lang === defaultLang) return clean;
  return clean === '/' ? '/en/' : `/en${clean}`;
}

/** Same path as the current URL, but in the other locale — used by the language switcher. */
export function switchLocalePath(url: URL, target: Lang): string {
  const current = getLangFromUrl(url);
  const stripped = current === defaultLang ? url.pathname : url.pathname.replace(/^\/en/, '') || '/';
  return localizePath(stripped, target);
}

export type { Translation };
