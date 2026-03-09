import { useTranslation } from 'react-i18next';
import { journals } from '../../data/journals';
import { downloadTemplate } from '../../utils/journalTemplate';

export default function JournalPage(){
  const { t } = useTranslation();
  const j = journals.find(x => x.name === 'Elsevier');
  const dpi = j?.minDPI || 300;
  const single = j?.singleColumnWidth || 90;
  const double = j?.doubleColumnWidth || 180;
  const height = j?.maxHeight || 240;

  const handle = (label: string, widthMm: number) => {
    downloadTemplate({ name: 'Elsevier', widthMm, heightMm: height, dpi, label });
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold">{t('journal.title', { name: 'Elsevier' })}</h1>
      <div className="mt-4 text-gray-700">
        <div><b>{t('journal.dpi')}:</b> {dpi}</div>
        <div><b>{t('journal.width')}:</b> {single} mm / {double} mm</div>
        <div className="mt-3"><b>{t('journal.notes')}:</b> {t('journal.elsevier_notes')}</div>
      </div>
      <div className="mt-6 p-4 rounded-xl border">
        <div className="font-semibold">{t('journal.template_title')}</div>
        <div className="text-sm text-gray-600">{t('journal.template_desc')}</div>
        <div className="mt-3 flex flex-wrap gap-2">
          <button className="px-4 py-2 rounded-lg bg-black text-white" onClick={() => handle('single', single)}>{t('journal.open_template')} • {t('journal.single_col')}</button>
          <button className="px-4 py-2 rounded-lg bg-gray-800 text-white" onClick={() => handle('double', double)}>{t('journal.open_template')} • {t('journal.double_col')}</button>
        </div>
      </div>
    </div>
  );
}
