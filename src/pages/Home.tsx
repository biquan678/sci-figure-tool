import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { posts } from '../data/blog';
import SEO from '../components/SEO';

export default function Home() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const filteredPosts = posts.filter(p => p.lang === lang || (lang !== 'zh' && lang !== 'ja' && p.lang === 'en')).slice(0, 6);

  const faqs = [
    { q: t('faq.q1'), a: t('faq.a1') },
    { q: t('faq.q2'), a: t('faq.a2') },
    { q: t('faq.q3'), a: t('faq.a3') },
    { q: t('faq.q4'), a: t('faq.a4') },
    { q: t('faq.q5'), a: t('faq.a5') },
    { q: t('faq.q6'), a: t('faq.a6') },
  ];

  // JSON-LD for Google FAQ rich snippets
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <SEO
        title="SciPubTools — Journal Figure Checker & Converter"
        description="Free browser-based tools for scientific publication. Check figures against 90+ journal requirements, validate DPI and size, and convert TIFF, PNG, JPG, and PDF locally without upload."
        canonical="https://scipubtools.com/"
        schema={faqSchema}
      />

      {/* Hero */}
      <section className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{t('home.hero')}</h1>
        <p className="text-gray-500 max-w-2xl mx-auto">{t('home.hero_sub')}</p>
      </section>

      {/* Tools */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
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

      <p className="text-center text-sm text-gray-400 mb-8">🔒 {t('home.privacy')}</p>

      <section className="max-w-4xl mx-auto mb-16 bg-white rounded-xl border border-gray-200 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Journal figure requirements, checker and converter in one place</h2>
        <div className="space-y-3 text-sm leading-7 text-gray-600">
          <p>SciPubTools is built for researchers who need to prepare publication-ready figures without bouncing between multiple websites, manual checklists and desktop tools.</p>
          <p>You can validate figure dimensions, DPI, file formats and panel readiness for major journals such as Nature, Science, Cell, Lancet, Elsevier, ACS and IEEE, then convert common formats like TIFF, PNG, JPG and PDF locally in the browser.</p>
          <p>The goal is simple: save time, reduce journal submission errors and keep figure preparation private by processing files locally whenever possible.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">{t('faq.title')}</h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <details key={i} className="bg-white rounded-lg border border-gray-200 group">
              <summary className="px-5 py-4 cursor-pointer text-sm font-medium text-gray-900 flex items-center justify-between hover:bg-gray-50 transition-colors">
                {faq.q}
                <svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">{faq.a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* Blog */}
      {filteredPosts.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">{t('home.latest_articles')}</h2>
            <Link to="/blog" className="text-sm text-blue-600 hover:underline">{t('nav.blog')} →</Link>
          </div>
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
