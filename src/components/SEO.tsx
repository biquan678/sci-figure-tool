import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description?: string;
  schema?: object;
}

export default function SEO({ title, description, schema }: SEOProps) {
  useEffect(() => {
    document.title = title;
    if (description) {
      let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement;
      if (meta) meta.content = description;
    }
    // schema.org
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
      document.title = 'SciPubTools ? Journal Figure Checker & Converter';
    };
  }, [title, description, schema]);
  return null;
}
