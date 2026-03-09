import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { journals } from '../../data/journals';
import { downloadTemplate, renderTemplate } from '../../utils/journalTemplate';

export default function JournalPage(){
  const { t } = useTranslation();
  const j = journals.find(x => x.name === 'Cell');
  const dpi = j?.minDPI || 300;
  const single = j?.singleColumnWidth || 85;
  const double = j?.doubleColumnWidth || 178;
  const height = j?.maxHeight || 230;

  const [mode, setMode] = useState<'single' | 'double'>('single');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const widthMm = mode === 'single' ? single : double;
    renderTemplate({ name: 'Cell', widthMm, heightMm: height, dpi, label: mode, target: canvasRef.current });
  }, [mode, single, double, height, dpi]);

  const handleDownload = (label: string, widthMm: number) => {
    downloadTemplate({ name: 'Cell', widthMm, heightMm: height, dpi, label, canvas: canvasRef.current || undefined });
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold">{t('journal.title', { name: 'Cell' })}</h1>
      <div className="mt-4 text-gray-700">
        <div><b>{t('journal.dpi')}:</b> {dpi}</div>
        <div><b>{t('journal.width')}:</b> {single} mm / {double} mm</div>
        <div className="mt-3"><b>{t('journal.notes')}:</b> {t('journal.cell_notes')}</div>
      </div>

      <div className="mt-6 p-4 rounded-xl border">
        <div className="font-semibold">{t('journal.template_title')}</div>
        <div className="text-sm text-gray-600">{t('journal.template_desc')}</div>

        <div className="mt-3 flex flex-wrap gap-2">
          <button className={`px-3 py-2 rounded-lg text-sm ${mode === 'single' ? 'bg-blue-700 text-white' : 'bg-gray-100'}`} onClick={() => setMode('single')}>
            {t('journal.single_col')}
          </button>
          <button className={`px-3 py-2 rounded-lg text-sm ${mode === 'double' ? 'bg-blue-700 text-white' : 'bg-gray-100'}`} onClick={() => setMode('double')}>
            {t('journal.double_col')}
          </button>
        </div>

        <div className="mt-4 bg-white border rounded-lg p-3">
          <div className="text-xs text-gray-500 mb-2">Preview (fit)</div>
          <div className="overflow-hidden rounded-lg bg-gray-50" style={{ maxWidth: '520px', height: '320px' }}>
            <canvas ref={canvasRef} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          <button className="px-4 py-2 rounded-lg bg-black text-white" onClick={() => handleDownload('single', single)}>{t('journal.open_template')} • {t('journal.single_col')}</button>
          <button className="px-4 py-2 rounded-lg bg-gray-800 text-white" onClick={() => handleDownload('double', double)}>{t('journal.open_template')} • {t('journal.double_col')}</button>
        </div>
      </div>
    </div>
  );
}
