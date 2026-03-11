import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import SEO from '../components/SEO';
import { normalizeLocale } from '../lib/locale';

export default function Terms() {
  const { t } = useTranslation();
  const { lang } = useParams();
  const locale = normalizeLocale(lang);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <SEO title={t('terms.seo_title')} description={t('terms.seo_desc')} path="/terms" locale={locale} />
      <h1 className="text-2xl font-bold text-gray-900 mb-6">{t('legal.terms_title')}</h1>
      <p className="text-sm text-gray-400 mb-8">{t('legal.last_updated')}</p>

      <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">{t('terms.s1t')}</h2>
          <p>{t('terms.s1p')}</p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">{t('terms.s2t')}</h2>
          <p>{t('terms.s2p1')}</p>
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>{t('terms.service1')}</li>
            <li>{t('terms.service2')}</li>
            <li>{t('terms.service3')}</li>
          </ul>
          <p className="mt-2">{t('terms.s2p2')}</p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">{t('terms.s3t')}</h2>
          <p>{t('terms.s3p')}</p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">{t('terms.s4t')}</h2>
          <p>{t('terms.s4p1')}</p>
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>{t('terms.warr1')}</li>
            <li>{t('terms.warr2')}</li>
            <li>{t('terms.warr3')}</li>
          </ul>
          <p className="mt-2">{t('terms.s4p2')}</p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">{t('terms.s5t')}</h2>
          <p>{t('terms.s5p')}</p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">{t('terms.s6t')}</h2>
          <p>{t('terms.s6p1')}</p>
          <p className="mt-2">{t('terms.s6p2')}</p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">{t('terms.s7t')}</h2>
          <p>{t('terms.s7p')}</p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">{t('terms.s8t')}</h2>
          <p>{t('terms.s8p')}</p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">{t('terms.s9t')}</h2>
          <p>{t('terms.s9p')}</p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">{t('terms.s10t')}</h2>
          <p>{t('terms.s10p')} <span className="text-blue-600">contact@scipubtools.com</span></p>
        </section>
      </div>
    </div>
  );
}
