import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description?: string;
  canonical?: string;
  schema?: object;
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

export default function SEO({ title, description, canonical, schema }: SEOProps) {
  useEffect(() => {
    document.title = title;

    if (description) {
      ensureMeta('meta[name="description"]', { name: 'description', content: description });
      ensureMeta('meta[property="og:description"]', { property: 'og:description', content: description });
    }

    ensureMeta('meta[property="og:title"]', { property: 'og:title', content: title });

    if (canonical) {
      ensureMeta('link[rel="canonical"]', { rel: 'canonical', href: canonical });
      ensureMeta('meta[property="og:url"]', { property: 'og:url', content: canonical });
    }

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
  }, [title, description, canonical, schema]);

  return null;
}
