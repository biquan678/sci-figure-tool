import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { posts } from '../data/blog';

export default function Home() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const filteredPosts = posts.filter(p => p.lang === lang || (lang !== 'zh' && lang !== 'ja' && p.lang === 'en')).slice(0, 6);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero */}
      <section className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{t('home.hero')}</h1>
        <p className="text-gray-500 max-w-2xl mx-auto">{t('home.hero_sub')}</p>
      </section>

      {/* Tools */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
        <Link to="/figure-checker" className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all">
          <div className="text-3xl mb-3">🔍</div>
          <h2 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{t('home.checker_title')}</h2>
          <p className="text-sm text-gray-500 mt-2">{t('home.checker_desc')}</p>
        </Link>
        <Link to="/image-converter" className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all">
          <div className="text-3xl mb-3">🔄</div>
          <h2 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{t('home.converter_title')}</h2>
          <p className="text-sm text-gray-500 mt-2">{t('home.converter_desc')}</p>
        </Link>
      </div>

      <p className="text-center text-sm text-gray-400 mb-12">🔒 {t('home.privacy')}</p>

      {/* Blog */}
      {filteredPosts.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">{t('nav.blog')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map(post => (
              <Link to={`/blog/${post.slug}`} key={post.slug} className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-md transition-shadow">
                <div className="flex flex-wrap gap-1 mb-2">
                  {post.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-xs px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full">{tag}</span>
                  ))}
                </div>
                <h3 className="font-semibold text-gray-900 text-sm leading-snug mb-2">{post.title}</h3>
                <p className="text-xs text-gray-500 line-clamp-3">{post.excerpt}</p>
                <time className="block text-xs text-gray-400 mt-3">{post.date}</time>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
