import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const distDir = path.join(root, 'dist');
const templatePath = path.join(distDir, 'index.html');
const blogPath = path.join(root, 'src', 'data', 'blog.ts');
const journalsPath = path.join(root, 'src', 'data', 'journals.ts');

const siteUrl = 'https://scipubtools.com';
const locales = ['en', 'zh', 'ja'];
const defaultLocale = 'en';

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/\(.*?\)/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/--+/g, '-')
    .trim();
}

function ensureDir(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function readTemplate() {
  return fs.readFileSync(templatePath, 'utf8');
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function localizePath(route, locale) {
  return route === '/' ? `/${locale}` : `/${locale}${route}`;
}

function alternates(route) {
  return locales.map((locale) => ({ locale, href: `${siteUrl}${localizePath(route, locale)}` }));
}

function writeRouteHtml(route, locale, html) {
  const localizedRoute = localizePath(route, locale);
  const rel = localizedRoute.replace(/^\//, '');
  const outPath = path.join(distDir, rel, 'index.html');
  ensureDir(outPath);
  fs.writeFileSync(outPath, html, 'utf8');
}

function buildHtml({ locale, route, title, description, noscriptHtml, schema }) {
  let html = readTemplate();
  const canonical = `${siteUrl}${localizePath(route, locale)}`;
  const alternateTags = alternates(route)
    .map(({ locale: altLocale, href }) => `<link rel="alternate" hreflang="${altLocale}" href="${href}" />`)
    .join('\n    ');
  const xDefault = `${siteUrl}${localizePath(route, defaultLocale)}`;

  html = html.replace(/<html lang="[^"]+">/i, `<html lang="${locale}">`);
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(title)}</title>`);
  html = html.replace(/<meta name="description" content="[\s\S]*?" \/>/i, `<meta name="description" content="${escapeHtml(description)}" />`);
  html = html.replace(/<link rel="canonical" href="[\s\S]*?" \/>/i, `<link rel="canonical" href="${canonical}" />\n    ${alternateTags}\n    <link rel="alternate" hreflang="x-default" href="${xDefault}" />`);
  html = html.replace(/<meta property="og:title" content="[\s\S]*?" \/>/i, `<meta property="og:title" content="${escapeHtml(title)}" />`);
  html = html.replace(/<meta property="og:description" content="[\s\S]*?" \/>/i, `<meta property="og:description" content="${escapeHtml(description)}" />`);
  html = html.replace(/<meta property="og:url" content="[\s\S]*?" \/>/i, `<meta property="og:url" content="${canonical}" />`);
  html = html.replace(/<meta property="og:locale" content="[\s\S]*?" \/>/i, `<meta property="og:locale" content="${locale}" />`);
  html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/i, `<script type="application/ld+json">${JSON.stringify(schema)}</script>`);
  html = html.replace(/<noscript>[\s\S]*?<\/noscript>/i, `<noscript>${noscriptHtml}</noscript>`);
  return html;
}

function parseBlogPosts() {
  const source = fs.readFileSync(blogPath, 'utf8');
  const posts = [];
  const re = /slug:\s*'([^']+)'[\s\S]*?title:\s*'([^']+)'[\s\S]*?excerpt:\s*'([^']+)'[\s\S]*?date:\s*'([^']+)'[\s\S]*?lang:\s*'([^']+)'/g;
  let m;
  while ((m = re.exec(source))) {
    posts.push({ slug: m[1], title: m[2], excerpt: m[3], date: m[4], lang: m[5] });
  }
  return posts;
}

function parseJournals() {
  const source = fs.readFileSync(journalsPath, 'utf8');
  const journals = [];
  const re = /name:\s*"([^"]+)"[\s\S]*?category:\s*"([^"]+)"[\s\S]*?notes:\s*"([^"]*)"/g;
  let m;
  while ((m = re.exec(source))) {
    journals.push({ name: m[1], category: m[2], notes: m[3], slug: slugify(m[1]) });
  }
  return journals;
}

const pageMeta = {
  en: {
    home: ['SciPubTools — Journal Figure Checker & Converter', 'Free browser-based tools for scientific publication. Check figures against 90+ journal requirements, validate DPI and size, and convert TIFF, PNG, JPG and PDF locally.'],
    journals: ['Journal Figure Requirements by Publisher and Journal | SciPubTools', 'Browse journal figure requirements for Nature, Science, Cell, Lancet, Elsevier, ACS, IEEE and many more. Check figure size, DPI, format and color mode.'],
    checker: ['Figure Checker — Check Journal Figure Requirements | SciPubTools', 'Free online figure checker for journal submission. Validate DPI, figure size, file format and color mode for Nature, Science, Cell, Lancet and more.'],
    converter: ['Image Converter — TIFF, PNG, JPG and PDF for Scientific Figures | SciPubTools', 'Convert TIFF, PNG, JPG and PDF for scientific publication in your browser. Privacy-friendly figure conversion for journal submission.'],
    blog: ['Scientific Figure Blog — Guides, DPI Tips and Journal Requirements | SciPubTools', 'Read practical guides about figure DPI, file formats, graphical abstracts, journal requirements and scientific image preparation.'],
  },
  zh: {
    home: ['SciPubTools — SCI论文图片检查与格式转换工具', '免费科研图片工具：检查90+期刊图片要求，验证DPI与尺寸，并在浏览器本地转换 TIFF、PNG、JPG、PDF。'],
    journals: ['SCI期刊图片要求大全 | SciPubTools', '查看 Nature、Science、Cell、Lancet、Elsevier、ACS、IEEE 等期刊的图片尺寸、DPI、格式和色彩模式要求。'],
    checker: ['论文图片检查工具 | SciPubTools', '免费在线检查论文图片是否符合期刊投稿要求，支持 DPI、尺寸、格式、色彩模式校验。'],
    converter: ['科研图片格式转换工具 | SciPubTools', '在浏览器本地转换 TIFF、PNG、JPG、PDF，适用于 SCI 论文图片投稿处理。'],
    blog: ['科研图片博客与投稿指南 | SciPubTools', '获取科研图片处理、DPI、图形摘要、投稿规范与格式转换的实用指南。'],
  },
  ja: {
    home: ['SciPubTools — 学術誌投稿用 図チェック＆変換ツール', '90以上のジャーナル図要件を確認し、DPI・サイズを検証し、TIFF・PNG・JPG・PDFをブラウザで変換できます。'],
    journals: ['学術誌の図要件一覧 | SciPubTools', 'Nature、Science、Cell、Lancet、Elsevier、ACS、IEEEなどの図サイズ、DPI、形式、カラーモード要件を確認。'],
    checker: ['論文図チェックツール | SciPubTools', '学術誌投稿前に図のDPI、サイズ、形式、カラーモードを無料でチェック。'],
    converter: ['学術図フォーマット変換 | SciPubTools', 'TIFF、PNG、JPG、PDFをブラウザ上でローカル変換。学術誌投稿向け。'],
    blog: ['学術図ブログ・投稿ガイド | SciPubTools', '図のDPI、形式、グラフィカルアブストラクト、投稿規定に関する実用ガイド。'],
  }
};

const blogPosts = parseBlogPosts();
const journals = parseJournals();
const routes = [];

function addRoute(route, locale, title, description, noscriptHtml, schema, priority = '0.8', changefreq = 'weekly') {
  routes.push({ route: localizePath(route, locale), priority, changefreq });
  writeRouteHtml(route, locale, buildHtml({ locale, route, title, description, noscriptHtml, schema }));
}

for (const locale of locales) {
  addRoute('/', locale, ...pageMeta[locale].home, `<main><h1>${escapeHtml(pageMeta[locale].home[0])}</h1><p>${escapeHtml(pageMeta[locale].home[1])}</p></main>`, { '@context': 'https://schema.org', '@type': 'WebSite', name: 'SciPubTools', url: `${siteUrl}${localizePath('/', locale)}`, inLanguage: locale }, '1.0', 'weekly');
  addRoute('/journals', locale, ...pageMeta[locale].journals, `<main><h1>${escapeHtml(pageMeta[locale].journals[0])}</h1><p>${escapeHtml(pageMeta[locale].journals[1])}</p></main>`, { '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Journal Figure Requirements', inLanguage: locale, url: `${siteUrl}${localizePath('/journals', locale)}` }, '0.95', 'weekly');
  addRoute('/figure-checker', locale, ...pageMeta[locale].checker, `<main><h1>${escapeHtml(pageMeta[locale].checker[0])}</h1><p>${escapeHtml(pageMeta[locale].checker[1])}</p></main>`, { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: 'SciPubTools Figure Checker', applicationCategory: 'UtilitiesApplication', operatingSystem: 'Web', inLanguage: locale }, '0.95', 'weekly');
  addRoute('/image-converter', locale, ...pageMeta[locale].converter, `<main><h1>${escapeHtml(pageMeta[locale].converter[0])}</h1><p>${escapeHtml(pageMeta[locale].converter[1])}</p></main>`, { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: 'SciPubTools Image Converter', applicationCategory: 'UtilitiesApplication', operatingSystem: 'Web', inLanguage: locale }, '0.9', 'weekly');
  addRoute('/blog', locale, ...pageMeta[locale].blog, `<main><h1>${escapeHtml(pageMeta[locale].blog[0])}</h1><p>${escapeHtml(pageMeta[locale].blog[1])}</p></main>`, { '@context': 'https://schema.org', '@type': 'Blog', name: 'SciPubTools Blog', inLanguage: locale, url: `${siteUrl}${localizePath('/blog', locale)}` }, '0.85', 'weekly');
  addRoute('/privacy', locale, `Privacy Policy | SciPubTools`, 'Read the privacy policy for SciPubTools.', `<main><h1>Privacy Policy</h1></main>`, { '@context': 'https://schema.org', '@type': 'WebPage', name: 'Privacy Policy', inLanguage: locale }, '0.3', 'yearly');
  addRoute('/terms', locale, `Terms of Service | SciPubTools`, 'Read the terms of service for SciPubTools.', `<main><h1>Terms of Service</h1></main>`, { '@context': 'https://schema.org', '@type': 'WebPage', name: 'Terms of Service', inLanguage: locale }, '0.3', 'yearly');
}

for (const post of blogPosts) {
  addRoute(`/blog/${post.slug}`, post.lang, `${post.title} | SciPubTools`, post.excerpt, `<main><article><h1>${escapeHtml(post.title)}</h1><p>${escapeHtml(post.excerpt)}</p><p>Published: ${post.date}</p></article></main>`, { '@context': 'https://schema.org', '@type': 'Article', headline: post.title, description: post.excerpt, datePublished: post.date, inLanguage: post.lang, author: { '@type': 'Organization', name: 'SciPubTools' }, publisher: { '@type': 'Organization', name: 'SciPubTools' }, mainEntityOfPage: `${siteUrl}${localizePath(`/blog/${post.slug}`, post.lang)}` }, '0.8', 'monthly');
}

for (const locale of locales) {
  for (const journal of journals) {
    const description = `${journal.name} figure requirements: accepted formats, DPI, size guidance, color mode and journal notes. Use SciPubTools to prepare journal-ready figures.`;
    addRoute(`/journals/${journal.slug}`, locale, `${journal.name} Figure Requirements | SciPubTools`, description, `<main><article><h1>${escapeHtml(journal.name)} Figure Requirements</h1><p>${escapeHtml(description)}</p><p>Category: ${escapeHtml(journal.category)}</p><p>${escapeHtml(journal.notes)}</p></article></main>`, { '@context': 'https://schema.org', '@type': 'TechArticle', headline: `${journal.name} Figure Requirements`, description, inLanguage: locale, about: journal.name, publisher: { '@type': 'Organization', name: 'SciPubTools' }, mainEntityOfPage: `${siteUrl}${localizePath(`/journals/${journal.slug}`, locale)}` }, '0.75', 'monthly');
  }
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${routes.map(({ route, priority, changefreq }) => {
  const loc = `${siteUrl}${route}`;
  const baseRoute = route.replace(/^\/(en|zh|ja)/, '') || '/';
  const links = alternates(baseRoute).map(({ locale, href }) => `    <xhtml:link rel="alternate" hreflang="${locale}" href="${href}" />`).join('\n');
  return `  <url><loc>${loc}</loc>\n${links}\n    <changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`;
}).join('\n')}\n</urlset>\n`;

fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap, 'utf8');
console.log(`SEO build complete: ${routes.length} localized routes prerendered.`);
