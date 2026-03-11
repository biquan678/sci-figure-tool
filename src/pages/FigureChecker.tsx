import { useState, useCallback, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { journals, categories } from '../data/journals';
import type { JournalRequirement } from '../data/journals';
import { loadImage, checkImage, convertImage, formatSize } from '../lib/image-utils';
import type { ImageInfo, CheckResult } from '../lib/image-utils';
import SEO from '../components/SEO';
import { downloadTemplate } from '../utils/journalTemplate';
import { normalizeLocale } from '../lib/locale';

export default function FigureChecker() {
  const { t } = useTranslation();
  const { lang } = useParams();
  const locale = normalizeLocale(lang);
  const [selectedJournal, setSelectedJournal] = useState<JournalRequirement | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCat, setExpandedCat] = useState<string | null>(null);
  const [imageInfo, setImageInfo] = useState<ImageInfo | null>(null);
  const [checkResults, setCheckResults] = useState<CheckResult[]>([]);
  const [converting, setConverting] = useState(false);
  const [targetWidth, setTargetWidth] = useState<'single' | 'double'>('double');
  const [outputFormat, setOutputFormat] = useState<'png' | 'jpeg'>('png');
  const [dragOver, setDragOver] = useState(false);

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    return journals.filter(j => j.name.toLowerCase().includes(q) || j.category.toLowerCase().includes(q) || j.notes.toLowerCase().includes(q)).slice(0, 12);
  }, [searchQuery]);

  const journalsByCategory = useMemo(() => {
    const map: Record<string, JournalRequirement[]> = {};
    for (const j of journals) { if (!map[j.category]) map[j.category] = []; map[j.category].push(j); }
    return map;
  }, []);

  const handleFile = useCallback(async (file: File) => {
    if (!file.type.startsWith('image/')) return;
    try { const info = await loadImage(file); setImageInfo(info); if (selectedJournal) setCheckResults(checkImage(info, selectedJournal)); } catch { /* ignore */ }
  }, [selectedJournal]);

  const handleJournalSelect = (j: JournalRequirement) => { setSelectedJournal(j); setSearchQuery(''); if (imageInfo) setCheckResults(checkImage(imageInfo, j)); };

  const handleConvert = async () => {
    if (!imageInfo || !selectedJournal) return;
    setConverting(true);
    try {
      const blob = await convertImage(imageInfo, selectedJournal, { targetWidth, outputFormat, quality: 0.95 });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a'); a.href = url;
      a.download = `figure_${selectedJournal.name.replace(/[^a-zA-Z0-9]/g, '_')}_${targetWidth}.${outputFormat === 'jpeg' ? 'jpg' : 'png'}`;
      a.click(); URL.revokeObjectURL(url);
    } catch { /* ignore */ }
    setConverting(false);
  };

  const passCount = checkResults.filter(r => r.pass).length;
  const catIcons: Record<string, string> = { '综合顶刊': '🏆', '医学': '🏥', '生物': '🧬', '化学': '⚗️', '材料/物理': '🔬', '工程/计算机': '💻', '出版商通用': '📚', '开放获取': '🔓', '国内期刊': '🇨🇳', '环境/地球': '🌍', '社会科学': '📊', '农业/食品': '🌾', '药学/临床': '💊' };

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 space-y-6">
      <SEO title="Figure Checker — Check Journal Figure Requirements | SciPubTools" description="Free online tool to check if your figures meet journal requirements for DPI, size, format and color mode. Supports major journals including Nature, Science, Cell, Lancet, Elsevier and ACS." path="/figure-checker" locale={locale} />
      {/* Step 1 */}
      <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
        <h2 className="text-lg font-semibold text-gray-800 mb-1">
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold mr-2">1</span>
          {t('checker.step1')}
        </h2>
        <p className="text-sm text-gray-400 mb-4 ml-8">{t('checker.step1_hint')}</p>

        <div className="relative mb-4">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input type="text" placeholder={t('checker.search_placeholder')} value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
          {searchQuery && <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-lg">×</button>}
        </div>

        {searchQuery.trim() && (
          <div className="mb-4">
            {searchResults.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {searchResults.map(j => (
                  <button key={j.name} onClick={() => handleJournalSelect(j)}
                    className={`px-3 py-2.5 text-sm rounded-lg border transition-all text-left ${selectedJournal?.name === j.name ? 'bg-blue-600 text-white border-blue-600 shadow-sm' : 'bg-white text-gray-700 border-gray-200 hover:border-blue-400 hover:bg-blue-50'}`}>
                    <div className="font-medium">{j.name}</div>
                    <div className={`text-xs mt-0.5 ${selectedJournal?.name === j.name ? 'text-blue-100' : 'text-gray-400'}`}>{t(`categories.${j.category}`)}</div>
                  </button>
                ))}
              </div>
            ) : <p className="text-sm text-gray-400 text-center py-4">{t('checker.no_results')}</p>}
          </div>
        )}

        {!searchQuery.trim() && !expandedCat && (
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {categories.map(cat => {
              const count = journalsByCategory[cat]?.length || 0;
              const hasSelected = selectedJournal && journalsByCategory[cat]?.some(j => j.name === selectedJournal.name);
              return (
                <button key={cat} onClick={() => setExpandedCat(cat)}
                  className={`flex flex-col items-center gap-2 p-3 sm:p-4 rounded-lg border transition-all text-center hover:shadow-sm ${hasSelected ? 'border-blue-300 bg-blue-50' : 'border-gray-200 bg-white hover:border-gray-300'}`}>
                  <span className="text-xl sm:text-2xl">{catIcons[cat] || '📄'}</span>
                  <div className="min-w-0 w-full">
                    <div className="font-medium text-gray-800 text-xs sm:text-sm truncate">{t(`categories.${cat}`)}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{count}</div>
                    {hasSelected && <div className="text-xs text-blue-600 mt-1">✓</div>}
                  </div>
                </button>
              );
            })}
          </div>
        )}

        {!searchQuery.trim() && expandedCat && (
          <div>
            <button onClick={() => setExpandedCat(null)} className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 mb-3">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              {t('checker.back')}
            </button>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">{catIcons[expandedCat]}</span>
              <h3 className="font-semibold text-gray-800">{t(`categories.${expandedCat}`)}</h3>
              <span className="text-xs text-gray-400">({journalsByCategory[expandedCat]?.length || 0})</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {journalsByCategory[expandedCat]?.map(j => (
                <button key={j.name} onClick={() => handleJournalSelect(j)}
                  className={`px-3 py-2.5 text-sm rounded-lg border transition-all text-left ${selectedJournal?.name === j.name ? 'bg-blue-600 text-white border-blue-600 shadow-sm' : 'bg-white text-gray-700 border-gray-200 hover:border-blue-400 hover:bg-blue-50'}`}>
                  {j.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {selectedJournal && (
          <div className="mt-4 flex items-center gap-2 text-sm">
            <span className="text-gray-500">{t('checker.selected')}:</span>
            <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full font-medium">
              {selectedJournal.name}
              <button onClick={() => { setSelectedJournal(null); setCheckResults([]); setExpandedCat(null); }} className="ml-1 text-blue-400 hover:text-blue-600 text-base leading-none">×</button>
            </span>
          </div>
        )}
      </section>

      {/* Journal requirements */}
      {selectedJournal && (
        <section className="bg-blue-50 rounded-lg border border-blue-200 p-5">
          <h3 className="font-semibold text-blue-900 mb-2">📋 {selectedJournal.name}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
            <div><span className="text-blue-600 font-medium">{t('checker.format')}:</span> {selectedJournal.format.join(' / ')}</div>
            <div><span className="text-blue-600 font-medium">{t('checker.dpi')}:</span> {selectedJournal.minDPI}-{selectedJournal.maxDPI}</div>
            <div><span className="text-blue-600 font-medium">{t('checker.color')}:</span> {selectedJournal.colorMode}</div>
            <div><span className="text-blue-600 font-medium">{t('checker.size')}:</span> ≤ {selectedJournal.maxFileSize}</div>
            <div><span className="text-blue-600 font-medium">{t('checker.single_w')}:</span> {selectedJournal.singleColumnWidth}mm</div>
            <div><span className="text-blue-600 font-medium">{t('checker.double_w')}:</span> {selectedJournal.doubleColumnWidth}mm</div>
            <div><span className="text-blue-600 font-medium">{t('checker.font')}:</span> {selectedJournal.fontFamily}</div>
            <div><span className="text-blue-600 font-medium">{t('checker.min_font')}:</span> {selectedJournal.minFontSize}pt</div>
          </div>
          {selectedJournal.notes && <p className="mt-2 text-sm text-blue-700">💡 {selectedJournal.notes}</p>}
          <div className="mt-3 flex flex-wrap gap-2">
            <button className="px-3 py-2 rounded-lg bg-blue-700 text-white text-sm" onClick={() => downloadTemplate({
              name: selectedJournal.name,
              widthMm: selectedJournal.singleColumnWidth,
              heightMm: selectedJournal.maxHeight,
              dpi: selectedJournal.minDPI,
              label: 'single'
            })}>
              {t('journal.open_template')} • {t('journal.single_col')}
            </button>
            <button className="px-3 py-2 rounded-lg bg-blue-600 text-white text-sm" onClick={() => downloadTemplate({
              name: selectedJournal.name,
              widthMm: selectedJournal.doubleColumnWidth,
              heightMm: selectedJournal.maxHeight,
              dpi: selectedJournal.minDPI,
              label: 'double'
            })}>
              {t('journal.open_template')} • {t('journal.double_col')}
            </button>
          </div>
        </section>
      )}

      {/* Step 2 */}
      <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
        <h2 className="text-lg font-semibold text-gray-800 mb-1">
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold mr-2">2</span>
          {t('checker.step2')}
        </h2>
        <p className="text-sm text-gray-400 mb-3 ml-8">
          {selectedJournal ? t('checker.step2_hint_ready', { name: selectedJournal.name }) : t('checker.step2_hint_wait')}
        </p>
        <div onDrop={e => { e.preventDefault(); setDragOver(false); const f = e.dataTransfer.files[0]; if (f) handleFile(f); }}
          onDragOver={e => { e.preventDefault(); setDragOver(true); }} onDragLeave={() => setDragOver(false)}
          onClick={() => document.getElementById('fileInput')?.click()}
          className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors cursor-pointer ${!selectedJournal ? 'border-gray-200 bg-gray-50 opacity-60' : dragOver ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-400 hover:bg-blue-50'}`}>
          <input id="fileInput" type="file" accept="image/*" className="hidden" disabled={!selectedJournal} onChange={e => { const f = e.target.files?.[0]; if (f) handleFile(f); }} />
          {imageInfo ? (
            <div className="space-y-2">
              <img src={imageInfo.dataUrl} alt="preview" className="max-h-48 mx-auto rounded" />
              <p className="text-sm text-gray-600">{imageInfo.width} × {imageInfo.height} px · {imageInfo.format} · {formatSize(imageInfo.sizeBytes)}</p>
            </div>
          ) : (
            <div>
              <div className="text-4xl mb-3">🖼️</div>
              <p className="text-gray-500 text-base mb-1">{selectedJournal ? t('checker.upload_text') : t('checker.select_first')}</p>
              <p className="text-gray-400 text-sm">{t('checker.upload_formats')}</p>
            </div>
          )}
        </div>
      </section>

      {/* Step 3 */}
      {checkResults.length > 0 && (
        <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold mr-2">3</span>
            {t('checker.step3')}
            <span className={`ml-2 text-sm font-normal ${passCount === checkResults.length ? 'text-green-600' : 'text-orange-600'}`}>
              {passCount === checkResults.length ? t('checker.all_pass') : t('checker.pass_count', { pass: passCount, total: checkResults.length })}
            </span>
          </h2>
          <div className="space-y-2">
            {checkResults.map((r, i) => (
              <div key={i} className={`flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-md text-sm gap-1 ${r.severity === 'ok' ? 'bg-green-50' : r.severity === 'warn' ? 'bg-yellow-50' : 'bg-red-50'}`}>
                <div className="flex items-center gap-2">
                  <span>{r.severity === 'ok' ? '✅' : r.severity === 'warn' ? '⚠️' : '❌'}</span>
                  <span className="font-medium">{r.label}</span>
                </div>
                <div className="text-right text-gray-600 text-xs sm:text-sm">{r.current} <span className="text-gray-400 mx-1">→</span> {r.required}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Step 4 */}
      {imageInfo && selectedJournal && (
        <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
          <h2 className="text-lg font-semibold text-gray-800 mb-1">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold mr-2">4</span>
            {t('checker.step4')}
          </h2>
          <p className="text-sm text-gray-400 mb-4 ml-8">{t('checker.step4_hint')}</p>
          <div className="flex flex-wrap gap-4 items-end">
            <div>
              <label className="block text-sm text-gray-600 mb-1">{t('checker.single_w')}</label>
              <select value={targetWidth} onChange={e => setTargetWidth(e.target.value as 'single' | 'double')} className="px-3 py-2 border border-gray-300 rounded-md text-sm">
                <option value="single">{t('checker.single_col')} ({selectedJournal.singleColumnWidth}mm)</option>
                <option value="double">{t('checker.double_col')} ({selectedJournal.doubleColumnWidth}mm)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">{t('checker.format')}</label>
              <select value={outputFormat} onChange={e => setOutputFormat(e.target.value as 'png' | 'jpeg')} className="px-3 py-2 border border-gray-300 rounded-md text-sm">
                <option value="png">PNG</option>
                <option value="jpeg">JPEG</option>
              </select>
            </div>
            <button onClick={handleConvert} disabled={converting}
              className="px-6 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 disabled:bg-gray-400 transition-colors">
              {converting ? t('checker.converting') : `${t('checker.convert_download')} (${selectedJournal.minDPI} DPI)`}
            </button>
          </div>
          <p className="mt-3 text-xs text-gray-400">{t('checker.privacy')}</p>
        </section>
      )}
    </div>
  );
}
