export const mmToPx = (mm: number, dpi: number) => Math.round((mm / 25.4) * dpi);

export function downloadTemplate(opts: {
  name: string;
  widthMm: number;
  heightMm: number;
  dpi: number;
  label: string;
}) {
  const { name, widthMm, heightMm, dpi, label } = opts;
  const widthPx = mmToPx(widthMm, dpi);
  const heightPx = mmToPx(heightMm, dpi);

  const canvas = document.createElement('canvas');
  canvas.width = widthPx;
  canvas.height = heightPx;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // white background
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, widthPx, heightPx);

  // light border
  ctx.strokeStyle = '#e5e7eb';
  ctx.lineWidth = 2;
  ctx.strokeRect(1, 1, widthPx - 2, heightPx - 2);

  // watermark (optional)
  ctx.fillStyle = '#9ca3af';
  ctx.font = '16px Arial';
  ctx.fillText(`${name} • ${label} • ${dpi} DPI`, 20, 30);

  const dataUrl = canvas.toDataURL('image/png');
  const a = document.createElement('a');
  a.href = dataUrl;
  a.download = `${name.replace(/\s+/g, '_')}_${label}_${dpi}dpi.png`;
  a.click();
}
