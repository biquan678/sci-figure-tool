import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <section className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{t('home.hero')}</h1>
        <p className="text-gray-500 max-w-2xl mx-auto">{t('home.hero_sub')}</p>
      </section>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
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
      <p className="text-center text-sm text-gray-400 mt-8">🔒 {t('home.privacy')}</p>
    </div>
  );
}
