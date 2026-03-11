import { useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import UTIF from 'utif';
import { jsPDF } from 'jspdf';
import { formatSize } from '../lib/image-utils';
import SEO from '../components/SEO';
import { normalizeLocale } from '../lib/locale';

interface FileInfo {
  file: File;
  width: number;
  height: number;
  format: string;
  sizeBytes: number;
  dataUrl: string;
  imageData?: ImageData;
}

export default function Converter() {
  const { t } = useTranslation();
  const { lang } = useParams();
  const locale = normalizeLocale(lang);
  const [fileInfo, setFileInfo] = useState<FileInfo | null>(null);
  const [outputFormat, setOutputFormat] = useState<'tiff' | 'png' | 'jpeg' | 'pdf'>('tiff');
  const [quality, setQuality] = useState(95);
  const [dpi, setDpi] = useState(300);
  const [converting, setConverting] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  const loadFile = useCallback(async (file: File) => {
    const arrayBuffer = await file.arrayBuffer();
    const isTiff = file.name.toLowerCase().endsWith('.tiff') || file.name.toLowerCase().endsWith('.tif') || file.type === 'image/tiff';

    if (isTiff) {
      const ifds = UTIF.decode(arrayBuffer);
      UTIF.decodeImage(arrayBuffer, ifds[0]);
      const ifd = ifds[0];
      const rgba = UTIF.toRGBA8(ifd);
      const w = ifd.width;
      const h = ifd.height;
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext('2d')!;
      const imgData = ctx.createImageData(w, h);
      imgData.data.set(new Uint8Array(rgba));
      ctx.putImageData(imgData, 0, 0);
      setFileInfo({ file, width: w, height: h, format: 'TIFF', sizeBytes: file.size, dataUrl: canvas.toDataURL(), imageData: imgData });
    } else {
      const img = new Image();
      const url = URL.createObjectURL(file);
      await new Promise<void>((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = () => reject();
        img.src = url;
      });
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d')!;
      ctx.drawImage(img, 0, 0);
      const imgData = ctx.getImageData(0, 0, img.width, img.height);
      const ext = file.name.split('.').pop()?.toUpperCase() || 'UNKNOWN';
      setFileInfo({ file, width: img.width, height: img.height, format: ext, sizeBytes: file.size, dataUrl: url, imageData: imgData });
    }
  }, []);

  const handleConvert = async () => {
    if (!fileInfo || !fileInfo.imageData) return;
    setConverting(true);
    try {
      const { width, height, imageData } = fileInfo;

      if (outputFormat === 'tiff') {
        // Real TIFF encoding with UTIF
        const rgba = new Uint8Array(imageData.data.buffer);
        const tiffData = UTIF.encodeImage(rgba, width, height);
        const blob = new Blob([tiffData], { type: 'image/tiff' });
        downloadBlob(blob, 'tiff');
      } else if (outputFormat === 'pdf') {
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d')!;
        ctx.putImageData(imageData, 0, 0);
        // Convert px to mm at target DPI
        const wMM = (width / dpi) * 25.4;
        const hMM = (height / dpi) * 25.4;
        const pdf = new jsPDF({ orientation: wMM > hMM ? 'landscape' : 'portrait', unit: 'mm', format: [wMM, hMM] });
        const imgDataUrl = canvas.toDataURL('image/png');
        pdf.addImage(imgDataUrl, 'PNG', 0, 0, wMM, hMM);
        pdf.save(`converted_${dpi}dpi.pdf`);
        setConverting(false);
        return;
      } else {
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d')!;
        ctx.putImageData(imageData, 0, 0);
        const mimeType = outputFormat === 'jpeg' ? 'image/jpeg' : 'image/png';
        const q = outputFormat === 'jpeg' ? quality / 100 : undefined;
        canvas.toBlob(blob => {
          if (blob) downloadBlob(blob, outputFormat === 'jpeg' ? 'jpg' : 'png');
          setConverting(false);
        }, mimeType, q);
        return;
      }
    } catch (e) {
      alert('Conversion failed');
    }
    setConverting(false);
  };

  const downloadBlob = (blob: Blob, ext: string) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `converted_${dpi}dpi.${ext}`;
    a.click();
    URL.revokeObjectURL(url);
    setConverting(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      <SEO title="Image Converter — TIFF, PNG, JPG and PDF | SciPubTools" description="Free online image converter for scientific publication. Convert between JPG, PNG, TIFF and PDF with privacy-friendly local processing in the browser." path="/image-converter" locale={locale} />
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">{t('converter.title')}</h1>
        <p className="text-sm text-gray-500 mt-1">{t('converter.subtitle')}</p>
      </div>

      {/* Upload */}
      <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
        <h2 className="text-lg font-semibold text-gray-800 mb-3">📤 {t('converter.upload')}</h2>
        <div onDrop={e => { e.preventDefault(); setDragOver(false); const f = e.dataTransfer.files[0]; if (f) loadFile(f); }}
          onDragOver={e => { e.preventDefault(); setDragOver(true); }} onDragLeave={() => setDragOver(false)}
          onClick={() => document.getElementById('convInput')?.click()}
          className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${dragOver ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-400 hover:bg-blue-50'}`}>
          <input id="convInput" type="file" accept="image/*,.tiff,.tif" className="hidden" onChange={e => { const f = e.target.files?.[0]; if (f) loadFile(f); }} />
          {fileInfo ? (
            <div className="space-y-2">
              <img src={fileInfo.dataUrl} alt="preview" className="max-h-48 mx-auto rounded" />
              <p className="text-sm text-gray-600">{fileInfo.width} × {fileInfo.height} px · {fileInfo.format} · {formatSize(fileInfo.sizeBytes)}</p>
            </div>
          ) : (
            <div>
              <div className="text-4xl mb-3">🖼️</div>
              <p className="text-gray-500">{t('converter.upload_hint')}</p>
            </div>
          )}
        </div>
      </section>

      {/* Convert options */}
      {fileInfo && (
        <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">⚙️ {t('converter.output_format')}</h2>
          <div className="flex flex-wrap gap-4 items-end">
            <div>
              <label className="block text-sm text-gray-600 mb-1">{t('converter.output_format')}</label>
              <select value={outputFormat} onChange={e => setOutputFormat(e.target.value as typeof outputFormat)}
                className="px-3 py-2 border border-gray-300 rounded-md text-sm">
                <option value="tiff">TIFF (LZW)</option>
                <option value="png">PNG</option>
                <option value="jpeg">JPEG</option>
                <option value="pdf">PDF</option>
              </select>
            </div>
            {outputFormat === 'jpeg' && (
              <div>
                <label className="block text-sm text-gray-600 mb-1">{t('converter.quality')}: {quality}%</label>
                <input type="range" min="50" max="100" value={quality} onChange={e => setQuality(Number(e.target.value))} className="w-32" />
              </div>
            )}
            <div>
              <label className="block text-sm text-gray-600 mb-1">{t('converter.dpi')}</label>
              <select value={dpi} onChange={e => setDpi(Number(e.target.value))}
                className="px-3 py-2 border border-gray-300 rounded-md text-sm">
                <option value={150}>150 DPI</option>
                <option value={300}>300 DPI</option>
                <option value={600}>600 DPI</option>
              </select>
            </div>
            <button onClick={handleConvert} disabled={converting}
              className="px-6 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 disabled:bg-gray-400 transition-colors">
              {converting ? t('converter.converting') : t('converter.convert')}
            </button>
          </div>
          {outputFormat === 'tiff' && <p className="mt-3 text-xs text-gray-500">💡 {t('converter.tiff_note')}</p>}
          <p className="mt-2 text-xs text-gray-400">{t('converter.privacy')}</p>
        </section>
      )}
    </div>
  );
}
