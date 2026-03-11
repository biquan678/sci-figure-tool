import { useEffect } from 'react';
import { buildCanonical, getAlternateLinks, normalizeLocale } from '../lib/locale';

interface SEOProps {
  title: string;
  description?: string;
  canonical?: string;
  schema?: object;
  locale?: string;
  path?: string;
}

function ensureMeta(selector: string, attrs: Record<string, string>) {
  let el = document.head.querySelector(selector) as HTMLMetaElement | HTMLLinkElement | null;
  if (!el) {
    el = document.createElement(attrs.rel ? 'link' : 'meta') as HTMLMetaElement | HTMLLinkElement;
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([key, value]) => {
    el!.setAttribute(key, value);
  });
}

function ensureLink(selector: string, attrs: Record<string, string>) {
  ensureMeta(selector, attrs);
}

export default function SEO({ title, description, canonical, schema, locale, path }: SEOProps) {
  useEffect(() => {
    const normalizedLocale = normalizeLocale(locale);
    const resolvedCanonical = canonical || buildCanonical(path || '/', normalizedLocale);

    document.title = title;
    document.documentElement.lang = normalizedLocale;

    if (description) {
      ensureMeta('meta[name="description"]', { name: 'description', content: description });
      ensureMeta('meta[property="og:description"]', { property: 'og:description', content: description });
    }

    ensureMeta('meta[property="og:title"]', { property: 'og:title', content: title });
    ensureMeta('meta[property="og:url"]', { property: 'og:url', content: resolvedCanonical });
    ensureMeta('meta[property="og:locale"]', { property: 'og:locale', content: normalizedLocale });
    ensureMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title });
    if (description) {
      ensureMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description });
    }

    ensureLink('link[rel="canonical"]', { rel: 'canonical', href: resolvedCanonical });

    const alternatePath = path || new URL(resolvedCanonical).pathname;
    for (const alt of getAlternateLinks(alternatePath)) {
      ensureLink(`link[rel="alternate"][hreflang="${alt.locale}"]`, {
        rel: 'alternate',
        hreflang: alt.locale,
        href: alt.href,
      });
    }
    ensureLink('link[rel="alternate"][hreflang="x-default"]', {
      rel: 'alternate',
      hreflang: 'x-default',
      href: getAlternateLinks(alternatePath).find((item) => item.locale === 'en')!.href,
    });

    if (schema) {
      const id = 'ld-json';
      let script = document.getElementById(id) as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement('script');
        script.id = id;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schema);
    }

    return () => {
      document.title = 'SciPubTools — Journal Figure Checker & Converter';
    };
  }, [title, description, canonical, schema, locale, path]);

  return null;
}
