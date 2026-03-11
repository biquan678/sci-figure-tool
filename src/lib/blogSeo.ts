import type { BlogPost } from '../data/blog';
import type { SupportedLocale } from './locale';

export function getBlogListMeta(locale: SupportedLocale) {
  switch (locale) {
    case 'zh':
      return {
        title: '科研图片博客与投稿指南 | SciPubTools',
        description: '获取科研图片处理、DPI、图形摘要、期刊图片要求与格式转换的实用指南。',
      };
    case 'ja':
      return {
        title: '学術図ブログ・投稿ガイド | SciPubTools',
        description: '学術図のDPI、形式、投稿規定、グラフィカルアブストラクトに関する実用ガイド。',
      };
    default:
      return {
        title: 'Blog — Scientific Figure Tips & Guides | SciPubTools',
        description: 'Guides, tips and best practices for scientific figure preparation, journal submission, DPI requirements, and image format conversion.',
      };
  }
}

export function getBlogPostMeta(post: BlogPost, locale: SupportedLocale) {
  const baseTitle = `${post.title} | SciPubTools`;
  if (locale === 'zh') {
    return {
      title: baseTitle,
      description: post.excerpt,
    };
  }
  if (locale === 'ja') {
    return {
      title: baseTitle,
      description: post.excerpt,
    };
  }
  return {
    title: baseTitle,
    description: post.excerpt,
  };
}
