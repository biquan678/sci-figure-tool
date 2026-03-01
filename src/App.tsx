import { useState, useCallback } from 'react';
import { journals, categories } from './data/journals';
import type { JournalRequirement } from './data/journals';
import { loadImage, checkImage, convertImage, formatSize } from './lib/image-utils';
import type { ImageInfo, CheckResult } from './lib/image-utils';

function App() {
  const [selectedJournal, setSelectedJournal] = useState<JournalRequirement | null>(null);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [imageInfo, setImageInfo] = useState<ImageInfo | null>(null);
  const [checkResults, setCheckResults] = useState<CheckResult[]>([]);
  const [converting, setConverting] = useState(false);
  const [targetWidth, setTargetWidth] = useState<'single' | 'double'>('double');
  const [outputFormat, setOutputFormat] = useState<'png' | 'jpeg'>('png');
  const [dragOver, setDragOver] = useState(false);

  const filteredJournals = journals.filter(j => {
    const matchCat = !categoryFilter || j.category === categoryFilter;
    const matchSearch = !searchQuery || j.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

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

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900">SCI Figure Tool</h1>
          <p className="text-sm text-gray-500 mt-1">论文图片格式检查 &amp; 一键转换 · 支持 {journals.length} 个期刊</p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-6 space-y-6">

        {/* Step 1: 选择期刊 */}
        <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold mr-2">1</span>
            选择目标期刊
          </h2>
          <div className="flex gap-3 mb-3 flex-col sm:flex-row">
            <input type="text" placeholder="搜索期刊名称..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <select value={categoryFilter} onChange={e => setCategoryFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">全部分类</option>
              {categories.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
            {filteredJournals.map(j => (
              <button key={j.name} onClick={() => handleJournalSelect(j)}
                className={`px-3 py-2 text-sm rounded-md border transition-colors text-left ${selectedJournal?.name === j.name ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-200 hover:border-blue-400 hover:bg-blue-50'}`}>
                {j.name}
              </button>
            ))}
          </div>
        </section>

        {/* 期刊要求详情 */}
        {selectedJournal && (
          <section className="bg-blue-50 rounded-lg border border-blue-200 p-5">
            <h3 className="font-semibold text-blue-900 mb-2">{selectedJournal.name} 图片要求</h3>
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
          <h2 className="text-lg font-semibold text-gray-800 mb-3">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold mr-2">2</span>
            上传图片
          </h2>
          <div onDrop={(e) => { e.preventDefault(); setDragOver(false); const f = e.dataTransfer.files[0]; if (f) handleFile(f); }}
            onDragOver={e => { e.preventDefault(); setDragOver(true); }} onDragLeave={() => setDragOver(false)}
            onClick={() => document.getElementById('fileInput')?.click()}
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors cursor-pointer ${dragOver ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400'}`}>
            <input id="fileInput" type="file" accept="image/*" className="hidden" onChange={e => { const f = e.target.files?.[0]; if (f) handleFile(f); }} />
            {imageInfo ? (
              <div className="space-y-2">
                <img src={imageInfo.dataUrl} alt="preview" className="max-h-48 mx-auto rounded" />
                <p className="text-sm text-gray-600">{imageInfo.width} × {imageInfo.height} px · {imageInfo.format} · {formatSize(imageInfo.sizeBytes)}</p>
                <p className="text-xs text-gray-400">点击或拖拽更换图片</p>
              </div>
            ) : (
              <div>
                <p className="text-gray-500 text-lg mb-1">拖拽图片到这里，或点击上传</p>
                <p className="text-gray-400 text-sm">支持 PNG / JPEG / TIFF / SVG</p>
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
                {passCount}/{checkResults.length} 项通过
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
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold mr-2">4</span>
              转换 &amp; 下载
            </h2>
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

        <footer className="text-center text-sm text-gray-400 py-6">
          <p>SCI Figure Tool — 论文图片格式检查与转换</p>
          <p className="mt-1">图片在浏览器本地处理，不上传服务器，保护您的数据隐私</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
