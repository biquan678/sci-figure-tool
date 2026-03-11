import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { posts } from '../data/blog';
import SEO from '../components/SEO';
import { localizePath, normalizeLocale } from '../lib/locale';

export default function BlogList() {
  const { t, i18n } = useTranslation();
  const { lang } = useParams();
  const locale = normalizeLocale(lang || i18n.language);
  const filteredPosts = posts.filter(p => p.lang === locale || (locale !== 'zh' && locale !== 'ja' && p.lang === 'en'));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <SEO title="Blog — Scientific Figure Tips & Guides | SciPubTools" description="Guides, tips and best practices for scientific figure preparation, journal submission, DPI requirements, and image format conversion." path="/blog" locale={locale} />
      <h1 className="text-2xl font-bold text-gray-900 mb-2">{t('nav.blog')}</h1>
      <p className="text-sm text-gray-500 mb-8">{t('blog.subtitle')}</p>
      <div className="space-y-4">
        {filteredPosts.map(post => (
          <Link to={localizePath(`/blog/${post.slug}`, locale)} key={post.slug}
            className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-md hover:border-blue-300 transition-all">
            <div className="flex flex-wrap gap-1 mb-2">
              {post.tags.map(tag => (
                <span key={tag} className="text-xs px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full">{tag}</span>
              ))}
            </div>
            <h2 className="font-semibold text-gray-900 mb-1">{post.title}</h2>
            <p className="text-sm text-gray-500 line-clamp-2">{post.excerpt}</p>
            <time className="block text-xs text-gray-400 mt-2">{post.date}</time>
          </Link>
        ))}
      </div>
    </div>
  );
}
