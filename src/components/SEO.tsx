import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description?: string;
}

export default function SEO({ title, description }: SEOProps) {
  useEffect(() => {
    document.title = title;
    if (description) {
      let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement;
      if (meta) meta.content = description;
    }
    return () => {
      document.title = 'SCI Pub Tools — Free Figure Checker & Image Converter for Journal Submission';
    };
  }, [title, description]);
  return null;
}
