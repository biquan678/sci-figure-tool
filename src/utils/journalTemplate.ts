export const mmToPx = (mm: number, dpi: number) => Math.round((mm / 25.4) * dpi);

function drawGrid(ctx: CanvasRenderingContext2D, w: number, h: number) {
  ctx.strokeStyle = '#f3f4f6';
  ctx.lineWidth = 1;
  const step = Math.max(40, Math.round(w / 10));
  for (let x = step; x < w; x += step) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
  }
  for (let y = step; y < h; y += step) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
  }
}

function drawPanels(ctx: CanvasRenderingContext2D, w: number, h: number) {
  const margin = Math.round(Math.min(w, h) * 0.06);
  const gap = Math.round(Math.min(w, h) * 0.03);
  const pw = Math.round((w - margin * 2 - gap) / 2);
  const ph = Math.round((h - margin * 2 - gap) / 2);

  const panels = [
    { x: margin, y: margin, label: 'A' },
    { x: margin + pw + gap, y: margin, label: 'B' },
    { x: margin, y: margin + ph + gap, label: 'C' },
    { x: margin + pw + gap, y: margin + ph + gap, label: 'D' },
  ];

  ctx.strokeStyle = '#d1d5db';
  ctx.lineWidth = 2;
  ctx.fillStyle = '#f9fafb';
  ctx.font = `${Math.max(18, Math.round(Math.min(w, h) * 0.04))}px Arial`;
  for (const p of panels) {
    ctx.fillRect(p.x, p.y, pw, ph);
    ctx.strokeRect(p.x, p.y, pw, ph);
    ctx.fillStyle = '#6b7280';
    ctx.fillText(p.label, p.x + 10, p.y + 28);
    ctx.fillStyle = '#f9fafb';
  }
}

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

  // background
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, widthPx, heightPx);

  // grid + panels
  drawGrid(ctx, widthPx, heightPx);
  drawPanels(ctx, widthPx, heightPx);

  // border
  ctx.strokeStyle = '#e5e7eb';
  ctx.lineWidth = 2;
  ctx.strokeRect(1, 1, widthPx - 2, heightPx - 2);

  // watermark
  ctx.fillStyle = '#9ca3af';
  ctx.font = '16px Arial';
  ctx.fillText(`${name} • ${label} • ${dpi} DPI`, 20, 30);

  const dataUrl = canvas.toDataURL('image/png');
  const a = document.createElement('a');
  a.href = dataUrl;
  a.download = `${name.replace(/\s+/g, '_')}_${label}_${dpi}dpi.png`;
  a.click();
}
