import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { journals } from '../../data/journals';
import { downloadTemplate, renderTemplate, mmToPx } from '../../utils/journalTemplate';
import SEO from '../../components/SEO';

export default function JournalPage(){
  const { t } = useTranslation();
  const j = journals.find(x => x.name === 'Geology');
  const dpi = j?.minDPI || 300;
  const single = j?.singleColumnWidth || 85;
  const double = j?.doubleColumnWidth || 175;
  const height = j?.maxHeight || 230;

  const [mode, setMode] = useState<'single' | 'double'>('single');
  const [zoom, setZoom] = useState(0.6);
  const [open, setOpen] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const modalRef = useRef<HTMLCanvasElement>(null);

  const widthMm = mode === 'single' ? single : double;

  useEffect(() => {
    if (canvasRef.current) {
      renderTemplate({ name: 'Geology', widthMm, heightMm: height, dpi, label: mode, target: canvasRef.current });
    }
    if (open && modalRef.current) {
      renderTemplate({ name: 'Geology', widthMm, heightMm: height, dpi, label: mode, target: modalRef.current });
    }
  }, [mode, widthMm, height, dpi, open]);

  const handleDownload = (label: string, widthMm: number) => {
    downloadTemplate({ name: 'Geology', widthMm, heightMm: height, dpi, label, canvas: canvasRef.current || undefined });
  };

  const pxW = mmToPx(widthMm, dpi);
  const pxH = mmToPx(height, dpi);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <SEO title="Geology Figure Requirements" description="Figure size, DPI, and format requirements for Geology." />
      <h1 className="text-3xl font-bold">{t('journal.title', { name: 'Geology' })}</h1>
      <div className="mt-4 text-gray-700">
        <div><b>{t('journal.dpi')}:</b> {dpi}</div>
        <div><b>{t('journal.width')}:</b> {single} mm / {double} mm</div>
        <div className="mt-3"><b>{t('journal.notes')}:</b> {j?.notes || ''}</div>
      </div>

      <div className="mt-6 p-4 rounded-xl border">
        <div className="font-semibold">{t('journal.template_title')}</div>
        <div className="text-sm text-gray-600">{t('journal.template_desc')}</div>

        <div className="mt-3 flex flex-wrap gap-2">
          <button className={
            mode === 'single' ? 'px-3 py-2 rounded-lg text-sm bg-blue-700 text-white' : 'px-3 py-2 rounded-lg text-sm bg-gray-100'
          } onClick={() => setMode('single')}>
            {t('journal.single_col')}
          </button>
          <button className={
            mode === 'double' ? 'px-3 py-2 rounded-lg text-sm bg-blue-700 text-white' : 'px-3 py-2 rounded-lg text-sm bg-gray-100'
          } onClick={() => setMode('double')}>
            {t('journal.double_col')}
          </button>
        </div>

        <div className="mt-4 bg-white border rounded-lg p-3">
          <div className="flex items-center justify-between">
            <div className="text-xs text-gray-500">Preview</div>
            <div className="flex gap-2 text-xs">
              {[0.6, 1, 1.5, 2].map(z => (
                <button key={z} className={zoom === z ? 'px-2 py-1 rounded bg-blue-600 text-white' : 'px-2 py-1 rounded bg-gray-100'} onClick={() => setZoom(z)}>{Math.round(z*100)}%</button>
              ))}
              <button className="px-2 py-1 rounded bg-gray-900 text-white" onClick={() => setOpen(true)}>放大预览</button>
            </div>
          </div>
          <div className="mt-2 overflow-auto rounded-lg bg-gray-50 p-2">
            <div style={{ width: '100%', height: '320px' }}>
              <canvas ref={canvasRef} style={{ transform: `scale(${zoom})`, transformOrigin: 'top left' }} />
            </div>
          </div>
        </div>

        <div className="mt-3 text-sm text-gray-700 grid grid-cols-2 gap-2">
          <div><b>Width:</b> {widthMm} mm ({pxW}px)</div>
          <div><b>Height:</b> {height} mm ({pxH}px)</div>
          <div><b>DPI:</b> {dpi}</div>
          <div><b>Mode:</b> {mode}</div>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          <button className="px-4 py-2 rounded-lg bg-black text-white" onClick={() => handleDownload('single', single)}>{t('journal.open_template')} • {t('journal.single_col')}</button>
          <button className="px-4 py-2 rounded-lg bg-gray-800 text-white" onClick={() => handleDownload('double', double)}>{t('journal.open_template')} • {t('journal.double_col')}</button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-4 max-w-4xl w-[90vw]">
            <div className="flex justify-between items-center mb-2">
              <div className="font-semibold">{t('journal.template_title')} · {mode}</div>
              <button className="text-sm px-2 py-1 rounded bg-gray-100" onClick={() => setOpen(false)}>关闭</button>
            </div>
            <div className="overflow-auto max-h-[70vh] bg-gray-50 p-2 rounded">
              <canvas ref={modalRef} style={{ width: '100%', height: 'auto' }} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
