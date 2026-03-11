import type { JournalRequirement } from '../data/journals';

export interface ImageInfo {
  file: File;
  width: number;
  height: number;
  format: string;
  sizeBytes: number;
  dataUrl: string;
}

export interface CheckResult {
  pass: boolean;
  labelKey: 'dpi' | 'file_size' | 'image_width' | 'file_format';
  current: string;
  required: string;
  severity: 'ok' | 'warn' | 'error';
}

export function loadImage(file: File): Promise<ImageInfo> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      const img = new Image();
      img.onload = () => {
        resolve({
          file,
          width: img.naturalWidth,
          height: img.naturalHeight,
          format: file.type.split('/')[1]?.toUpperCase() || 'UNKNOWN',
          sizeBytes: file.size,
          dataUrl,
        });
      };
      img.onerror = () => reject(new Error('IMAGE_LOAD_FAILED'));
      img.src = dataUrl;
    };
    reader.onerror = () => reject(new Error('FILE_READ_FAILED'));
    reader.readAsDataURL(file);
  });
}

export function checkImage(info: ImageInfo, journal: JournalRequirement): CheckResult[] {
  const results: CheckResult[] = [];

  const widthInch = journal.doubleColumnWidth / 25.4;
  const estimatedDPI = Math.round(info.width / widthInch);
  results.push({
    pass: estimatedDPI >= journal.minDPI,
    labelKey: 'dpi',
    current: `~ ${estimatedDPI} DPI`,
    required: `≥ ${journal.minDPI} DPI`,
    severity: estimatedDPI >= journal.minDPI ? 'ok' : estimatedDPI >= 200 ? 'warn' : 'error',
  });

  const maxBytes = parseMaxSize(journal.maxFileSize);
  results.push({
    pass: info.sizeBytes <= maxBytes,
    labelKey: 'file_size',
    current: formatSize(info.sizeBytes),
    required: `≤ ${journal.maxFileSize}`,
    severity: info.sizeBytes <= maxBytes ? 'ok' : 'error',
  });

  const minPixelWidth = Math.round((journal.singleColumnWidth / 25.4) * journal.minDPI);
  results.push({
    pass: info.width >= minPixelWidth,
    labelKey: 'image_width',
    current: `${info.width} px`,
    required: `≥ ${minPixelWidth} px`,
    severity: info.width >= minPixelWidth ? 'ok' : 'warn',
  });

  const formatMap: Record<string, string[]> = {
    PNG: ['PNG'], JPEG: ['JPEG', 'JPG'], TIFF: ['TIFF', 'TIF'], 'SVG+XML': ['SVG'], PDF: ['PDF'],
  };
  const currentFormats = formatMap[info.format] || [info.format];
  const formatOk = journal.format.some(f => currentFormats.includes(f));
  results.push({
    pass: formatOk,
    labelKey: 'file_format',
    current: info.format,
    required: journal.format.join(' / '),
    severity: formatOk ? 'ok' : 'warn',
  });

  return results;
}

export function convertImage(
  info: ImageInfo,
  journal: JournalRequirement,
  options: { targetWidth: 'single' | 'double'; outputFormat: 'png' | 'jpeg'; quality: number }
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const targetWidthMM = options.targetWidth === 'single' ? journal.singleColumnWidth : journal.doubleColumnWidth;
    const targetDPI = journal.minDPI;
    const targetWidthPx = Math.round((targetWidthMM / 25.4) * targetDPI);
    const scale = targetWidthPx / info.width;
    const targetHeightPx = Math.round(info.height * scale);

    const canvas = document.createElement('canvas');
    canvas.width = targetWidthPx;
    canvas.height = targetHeightPx;
    const ctx = canvas.getContext('2d');
    if (!ctx) return reject(new Error('CANVAS_UNAVAILABLE'));

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, 0, 0, targetWidthPx, targetHeightPx);
      const mimeType = options.outputFormat === 'jpeg' ? 'image/jpeg' : 'image/png';
      canvas.toBlob(
        (blob) => { if (blob) resolve(blob); else reject(new Error('CONVERT_FAILED')); },
        mimeType,
        options.quality
      );
    };
    img.onerror = () => reject(new Error('IMAGE_LOAD_FAILED'));
    img.src = info.dataUrl;
  });
}

function parseMaxSize(s: string): number {
  const match = s.match(/(\d+)\s*(MB|KB|GB)/i);
  if (!match) return 10 * 1024 * 1024;
  const num = parseInt(match[1]);
  const unit = match[2].toUpperCase();
  if (unit === 'GB') return num * 1024 * 1024 * 1024;
  if (unit === 'MB') return num * 1024 * 1024;
  return num * 1024;
}

export function formatSize(bytes: number): string {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}
