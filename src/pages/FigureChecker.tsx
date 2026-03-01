import { useState, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { journals, categories } from '../data/journals';
import type { JournalRequirement } from '../data/journals';
import { loadImage, checkImage, convertImage, formatSize } from '../lib/image-utils';
import type { ImageInfo, CheckResult } from '../lib/image-utils';

export default function FigureChecker() {
  const { t: _t } = useTranslation();
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
    return journals.filter(j =>
      j.name.toLowerCase().includes(q) ||
      j.category.toLowerCase().includes(q) ||
      j.notes.toLowerCase().includes(q)
    ).slice(0, 12);
  }, [searchQuery]);

  const journalsByCategory = useMemo(() => {
    const map: Record<string, JournalRequirement[]> = {};
    for (const j of journals) {
      if (!map[j.category]) map[j.category] = [];
      map[j.category].push(j);
    }
    return map;
  }, []);

  const handleFile = useCallback(async (file: File) => {
    if (!file.type.startsWith('image/')) { alert('请上传图片文件'); return; }
    try {
      const info = await loadImage(file);
      setImageInfo(info);
      if (selectedJournal) setCheckResults(checkImage(info, selectedJournal));
    } catch { alert('图片加载失败'); }
  }, [selectedJournal]);

  const handleJournalSelect = (j: JournalRequirement) => {
    setSelectedJournal(j);
    setSearchQuery('');
    if (imageInfo) setCheckResults(checkImage(imageInfo, j));
  };

  const handleConvert = async () => {
    if (!imageInfo || !selectedJournal) return;
    setConverting(true);
    try {
      const blob = await convertImage(imageInfo, selectedJournal, { targetWidth, outputFormat, quality: 0.95 });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `figure_${selectedJournal.name.replace(/[^a-zA-Z0-9]/g, '_')}_${targetWidth}.${outputFormat === 'jpeg' ? 'jpg' : 'png'}`;
      a.click();
      URL.revokeObjectURL(url);
    } catch { alert('转换失败'); }
    setConverting(false);
  };

  const passCount = checkResults.filter(r => r.pass).length;

  const catMeta: Record<string, { icon: string; desc: string }> = {
    '综合顶刊': { icon: '🏆', desc: 'Nature, Science, Cell...' },
    '医学': { icon: '🏥', desc: 'Lancet, NEJM, JAMA...' },
    '生物': { icon: '🧬', desc: 'Molecular Cell, eLife...' },
    '化学': { icon: '⚗️', desc: 'ACS, RSC, Angewandte...' },
    '材料/物理': { icon: '🔬', desc: 'Adv. Mater., PRL...' },
    '工程/计算机': { icon: '💻', desc: 'IEEE, ACM' },
    '出版商通用': { icon: '📚', desc: 'Elsevier, Springer...' },
    '开放获取': { icon: '🔓', desc: 'PLoS, Frontiers, MDPI...' },
    '国内期刊': { icon: '🇨🇳', desc: 'Cell Research, 中华医学...' },
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 space-y-6">

        {/* Step 1: 选择期刊 */}
        <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
          <h2 className="text-lg font-semibold text-gray-800 mb-1">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold mr-2">1</span>
            你要投哪个期刊？
          </h2>
          <p className="text-sm text-gray-400 mb-4 ml-8">选择期刊后，我们会告诉你图片需要满足什么要求</p>

          {/* 搜索框 */}
          <div className="relative mb-4">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input type="text" placeholder="快速搜索：输入期刊名称，如 Nature、Lancet、中华医学..."
              value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-lg">×</button>
            )}
          </div>

          {/* 搜索结果 */}
          {searchQuery.trim() && (
            <div className="mb-4">
              {searchResults.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                  {searchResults.map(j => (
                    <button key={j.name} onClick={() => handleJournalSelect(j)}
                      className={`px-3 py-2.5 text-sm rounded-lg border transition-all text-left ${
                        selectedJournal?.name === j.name
                          ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                          : 'bg-white text-gray-700 border-gray-200 hover:border-blue-400 hover:bg-blue-50'
                      }`}>
                      <div className="font-medium">{j.name}</div>
                      <div className={`text-xs mt-0.5 ${selectedJournal?.name === j.name ? 'text-blue-100' : 'text-gray-400'}`}>{j.category}</div>
                    </button>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-400 text-center py-4">未找到匹配的期刊，试试其他关键词？</p>
              )}
            </div>
          )}

          {/* 分类网格 - 一排3个 */}
          {!searchQuery.trim() && !expandedCat && (
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {categories.map(cat => {
                const meta = catMeta[cat] || { icon: '📄', desc: '' };
                const count = journalsByCategory[cat]?.length || 0;
                const hasSelected = selectedJournal && journalsByCategory[cat]?.some(j => j.name === selectedJournal.name);
                return (
                  <button key={cat} onClick={() => setExpandedCat(cat)}
                    className={`flex flex-col items-center gap-2 p-3 sm:p-4 rounded-lg border transition-all text-center hover:shadow-sm ${
                      hasSelected ? 'border-blue-300 bg-blue-50' : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}>
                    <span className="text-xl sm:text-2xl">{meta.icon}</span>
                    <div className="min-w-0 w-full">
                      <div className="font-medium text-gray-800 text-xs sm:text-sm truncate">
                        {cat}
                      </div>
                      <div className="text-xs text-gray-400 mt-0.5">{count}个</div>
                      {hasSelected && (
                        <div className="text-xs text-blue-600 mt-1 truncate">✓</div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {/* 展开的分类 */}
          {!searchQuery.trim() && expandedCat && (
            <div>
              <button onClick={() => setExpandedCat(null)}
                className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 mb-3 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                返回全部分类
              </button>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">{catMeta[expandedCat]?.icon}</span>
                <h3 className="font-semibold text-gray-800">{expandedCat}</h3>
                <span className="text-xs text-gray-400">({journalsByCategory[expandedCat]?.length || 0}个期刊)</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                {journalsByCategory[expandedCat]?.map(j => (
                  <button key={j.name} onClick={() => handleJournalSelect(j)}
                    className={`px-3 py-2.5 text-sm rounded-lg border transition-all text-left ${
                      selectedJournal?.name === j.name
                        ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                        : 'bg-white text-gray-700 border-gray-200 hover:border-blue-400 hover:bg-blue-50'
                    }`}>
                    {j.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 已选期刊标签 */}
          {selectedJournal && (
            <div className="mt-4 flex items-center gap-2 text-sm">
              <span className="text-gray-500">已选期刊：</span>
              <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full font-medium">
                {selectedJournal.name}
                <button onClick={() => { setSelectedJournal(null); setCheckResults([]); setExpandedCat(null); }}
                  className="ml-1 text-blue-400 hover:text-blue-600 text-base leading-none">×</button>
              </span>
            </div>
          )}
        </section>

        {/* 期刊要求详情 */}
        {selectedJournal && (
          <section className="bg-blue-50 rounded-lg border border-blue-200 p-5">
            <h3 className="font-semibold text-blue-900 mb-2">📋 {selectedJournal.name} 图片要求</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
              <div><span className="text-blue-600 font-medium">格式：</span>{selectedJournal.format.join(' / ')}</div>
              <div><span className="text-blue-600 font-medium">DPI：</span>{selectedJournal.minDPI}-{selectedJournal.maxDPI}</div>
              <div><span className="text-blue-600 font-medium">色彩：</span>{selectedJournal.colorMode}</div>
              <div><span className="text-blue-600 font-medium">大小：</span>≤ {selectedJournal.maxFileSize}</div>
              <div><span className="text-blue-600 font-medium">单栏宽：</span>{selectedJournal.singleColumnWidth}mm</div>
              <div><span className="text-blue-600 font-medium">双栏宽：</span>{selectedJournal.doubleColumnWidth}mm</div>
              <div><span className="text-blue-600 font-medium">字体：</span>{selectedJournal.fontFamily}</div>
              <div><span className="text-blue-600 font-medium">最小字号：</span>{selectedJournal.minFontSize}pt</div>
            </div>
            {selectedJournal.notes && <p className="mt-2 text-sm text-blue-700">💡 {selectedJournal.notes}</p>}
          </section>
        )}

        {/* Step 2: 上传图片 */}
        <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
          <h2 className="text-lg font-semibold text-gray-800 mb-1">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold mr-2">2</span>
            上传你的论文图片
          </h2>
          <p className="text-sm text-gray-400 mb-3 ml-8">
            {selectedJournal
              ? `上传后自动检查是否符合 ${selectedJournal.name} 的图片要求，不合规的项目会标红提示`
              : '请先选择目标期刊，再上传图片进行格式检查'}
          </p>
          <div onDrop={(e) => { e.preventDefault(); setDragOver(false); const f = e.dataTransfer.files[0]; if (f) handleFile(f); }}
            onDragOver={e => { e.preventDefault(); setDragOver(true); }} onDragLeave={() => setDragOver(false)}
            onClick={() => document.getElementById('fileInput')?.click()}
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors cursor-pointer ${
              !selectedJournal ? 'border-gray-200 bg-gray-50 opacity-60' :
              dragOver ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-400 hover:bg-blue-50'
            }`}>
            <input id="fileInput" type="file" accept="image/*" className="hidden"
              disabled={!selectedJournal}
              onChange={e => { const f = e.target.files?.[0]; if (f) handleFile(f); }} />
            {imageInfo ? (
              <div className="space-y-2">
                <img src={imageInfo.dataUrl} alt="preview" className="max-h-48 mx-auto rounded" />
                <p className="text-sm text-gray-600">{imageInfo.width} × {imageInfo.height} px · {imageInfo.format} · {formatSize(imageInfo.sizeBytes)}</p>
                <p className="text-xs text-gray-400">点击或拖拽更换图片</p>
              </div>
            ) : (
              <div>
                <div className="text-4xl mb-3">🖼️</div>
                <p className="text-gray-500 text-base mb-1">
                  {selectedJournal ? '拖拽图片到这里，或点击选择文件' : '请先在上方选择目标期刊'}
                </p>
                <p className="text-gray-400 text-sm">支持 PNG / JPEG / TIFF / SVG · 图片不会上传到服务器</p>
              </div>
            )}
          </div>
        </section>

        {/* Step 3: 检查结果 */}
        {checkResults.length > 0 && (
          <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold mr-2">3</span>
              检查结果
              <span className={`ml-2 text-sm font-normal ${passCount === checkResults.length ? 'text-green-600' : 'text-orange-600'}`}>
                {passCount === checkResults.length ? '🎉 全部通过！' : `${passCount}/${checkResults.length} 项通过`}
              </span>
            </h2>
            <div className="space-y-2">
              {checkResults.map((r, i) => (
                <div key={i} className={`flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-md text-sm gap-1 ${r.severity === 'ok' ? 'bg-green-50' : r.severity === 'warn' ? 'bg-yellow-50' : 'bg-red-50'}`}>
                  <div className="flex items-center gap-2">
                    <span>{r.severity === 'ok' ? '✅' : r.severity === 'warn' ? '⚠️' : '❌'}</span>
                    <span className="font-medium">{r.label}</span>
                  </div>
                  <div className="text-right text-gray-600 text-xs sm:text-sm">
                    {r.current} <span className="text-gray-400 mx-1">→</span> {r.required}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Step 4: 转换下载 */}
        {imageInfo && selectedJournal && (
          <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
            <h2 className="text-lg font-semibold text-gray-800 mb-1">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold mr-2">4</span>
              一键转换为合规格式
            </h2>
            <p className="text-sm text-gray-400 mb-4 ml-8">自动调整尺寸和DPI，下载后可直接用于投稿</p>
            <div className="flex flex-wrap gap-4 items-end">
              <div>
                <label className="block text-sm text-gray-600 mb-1">目标宽度</label>
                <select value={targetWidth} onChange={e => setTargetWidth(e.target.value as 'single' | 'double')}
                  className="px-3 py-2 border border-gray-300 rounded-md text-sm">
                  <option value="single">单栏 ({selectedJournal.singleColumnWidth}mm)</option>
                  <option value="double">双栏 ({selectedJournal.doubleColumnWidth}mm)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">输出格式</label>
                <select value={outputFormat} onChange={e => setOutputFormat(e.target.value as 'png' | 'jpeg')}
                  className="px-3 py-2 border border-gray-300 rounded-md text-sm">
                  <option value="png">PNG (无损)</option>
                  <option value="jpeg">JPEG (有损，体积小)</option>
                </select>
              </div>
              <button onClick={handleConvert} disabled={converting}
                className="px-6 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 disabled:bg-gray-400 transition-colors">
                {converting ? '转换中...' : `转换并下载 (${selectedJournal.minDPI} DPI)`}
              </button>
            </div>
            <p className="mt-3 text-xs text-gray-400">🔒 所有处理在浏览器本地完成，图片不会上传到任何服务器</p>
          </section>
        )}

    </div>
  );
}
