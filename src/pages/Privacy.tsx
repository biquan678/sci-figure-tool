import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import SEO from '../components/SEO';
import { normalizeLocale } from '../lib/locale';

export default function Privacy() {
  const { t } = useTranslation();
  const { lang } = useParams();
  const locale = normalizeLocale(lang);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <SEO title={t('privacy.seo_title')} description={t('privacy.seo_desc')} path="/privacy" locale={locale} />
      <h1 className="text-2xl font-bold text-gray-900 mb-6">{t('legal.privacy_title')}</h1>
      <p className="text-sm text-gray-400 mb-8">{t('legal.last_updated')}</p>

      <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">{t('privacy.s1t')}</h2>
          <p>{t('privacy.s1p')}</p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">{t('privacy.s2t')}</h2>
          <p>{t('privacy.s2p')}</p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">{t('privacy.s3t')}</h2>
          <p>{t('privacy.s3p')}</p>
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>{t('privacy.browser')}</li>
            <li>{t('privacy.os')}</li>
            <li>{t('privacy.pages')}</li>
            <li>{t('privacy.referrer')}</li>
            <li>{t('privacy.lang')}</li>
            <li>{t('privacy.geo')}</li>
          </ul>
          <p className="mt-2">{t('privacy.pii')}</p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">{t('privacy.s4t')}</h2>
          <p>{t('privacy.s4p1')}</p>
          <p className="mt-2">{t('privacy.s4p2')}</p>
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>{t('privacy.ga')}</li>
            <li>{t('privacy.adsense')}</li>
          </ul>
          <p className="mt-2">{t('privacy.s4p3')}</p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">{t('privacy.s5t')}</h2>
          <p>{t('privacy.s5p1')}</p>
          <p className="mt-2">{t('privacy.s5p2')} <a href="https://www.google.com/settings/ads" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>.</p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">{t('privacy.s6t')}</h2>
          <p>{t('privacy.s6p')}</p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">{t('privacy.s7t')}</h2>
          <p>{t('privacy.s7p')}</p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">{t('privacy.s8t')}</h2>
          <p>{t('privacy.s8p')}</p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">{t('privacy.s9t')}</h2>
          <p>{t('privacy.s9p')}</p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">{t('privacy.s10t')}</h2>
          <p>{t('privacy.s10p')} <span className="text-blue-600">privacy@scipubtools.com</span></p>
        </section>
      </div>
    </div>
  );
}
