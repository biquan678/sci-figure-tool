import { useTranslation } from 'react-i18next';

export default function JournalPage(){
  const { t } = useTranslation();
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold">{t('journal.title', { name: 'Nature' })}</h1>
      <div className="mt-4 text-gray-700">
        <div><b>{t('journal.dpi')}:</b> 300</div>
        <div><b>{t('journal.width')}:</b> 85 mm / 180 mm</div>
        <div className="mt-3"><b>{t('journal.notes')}:</b> {t('journal.nature_notes')}</div>
      </div>
      <div className="mt-6 p-4 rounded-xl border">
        <div className="font-semibold">{t('journal.template_title')}</div>
        <div className="text-sm text-gray-600">{t('journal.template_desc')}</div>
        <button className="mt-3 px-4 py-2 rounded-lg bg-black text-white">{t('journal.open_template')}</button>
      </div>
    </div>
  );
}
