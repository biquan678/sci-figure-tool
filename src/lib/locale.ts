export const SUPPORTED_LOCALES = ['en', 'zh', 'ja'] as const;

export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: SupportedLocale = 'en';
export const SITE_URL = 'https://scipubtools.com';

export function normalizeLocale(locale?: string | null): SupportedLocale {
  if (locale && SUPPORTED_LOCALES.includes(locale as SupportedLocale)) {
    return locale as SupportedLocale;
  }
  return DEFAULT_LOCALE;
}

export function stripLocalePrefix(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  const first = segments[0];
  if (SUPPORTED_LOCALES.includes(first as SupportedLocale)) {
    const rest = segments.slice(1).join('/');
    return rest ? `/${rest}` : '/';
  }
  return pathname || '/';
}

export function localizePath(pathname: string, locale?: string | null): string {
  const normalizedLocale = normalizeLocale(locale);
  const cleanPath = stripLocalePrefix(pathname || '/');
  return cleanPath === '/' ? `/${normalizedLocale}` : `/${normalizedLocale}${cleanPath}`;
}

export function buildCanonical(pathname: string, locale?: string | null): string {
  return `${SITE_URL}${localizePath(pathname, locale)}`;
}

export function getAlternateLinks(pathname: string) {
  const cleanPath = stripLocalePrefix(pathname || '/');
  return SUPPORTED_LOCALES.map((locale) => ({
    locale,
    href: `${SITE_URL}${localizePath(cleanPath, locale)}`,
  }));
}
