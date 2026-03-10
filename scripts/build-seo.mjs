import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const distDir = path.join(root, 'dist');
const templatePath = path.join(distDir, 'index.html');
const blogPath = path.join(root, 'src', 'data', 'blog.ts');
const journalsPath = path.join(root, 'src', 'data', 'journals.ts');

const siteUrl = 'https://scipubtools.com';

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

function writeRouteHtml(route, html) {
  const rel = route === '/' ? 'index.html' : path.join(route.replace(/^\//, ''), 'index.html');
  const outPath = path.join(distDir, rel);
  ensureDir(outPath);
  fs.writeFileSync(outPath, html, 'utf8');
}

function readTemplate() {
  return fs.readFileSync(templatePath, 'utf8');
}

function buildHtml({ title, description, canonical, noscriptHtml, schema }) {
  let html = readTemplate();
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`);
  html = html.replace(/<meta name="description" content="[\s\S]*?" \/>/i, `<meta name="description" content="${description}" />`);
  html = html.replace(/<link rel="canonical" href="[\s\S]*?" \/>/i, `<link rel="canonical" href="${canonical}" />`);
  html = html.replace(/<meta property="og:title" content="[\s\S]*?" \/>/i, `<meta property="og:title" content="${title}" />`);
  html = html.replace(/<meta property="og:description" content="[\s\S]*?" \/>/i, `<meta property="og:description" content="${description}" />`);
  html = html.replace(/<meta property="og:url" content="[\s\S]*?" \/>/i, `<meta property="og:url" content="${canonical}" />`);
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

const blogPosts = parseBlogPosts();
const journals = parseJournals();
const routes = [];

function addRoute(route, title, description, noscriptHtml, schema, priority = '0.8', changefreq = 'weekly') {
  const canonical = route === '/' ? `${siteUrl}/` : `${siteUrl}${route}`;
  routes.push({ route, priority, changefreq });
  writeRouteHtml(route, buildHtml({ title, description, canonical, noscriptHtml, schema }));
}

addRoute(
  '/',
  'SciPubTools — Journal Figure Checker & Converter',
  'Free browser-based tools for scientific publication. Check figures against 90+ journal requirements, validate DPI and size, and convert TIFF, PNG, JPG and PDF locally.',
  `<main><h1>SciPubTools — Journal Figure Checker & Converter</h1><p>SciPubTools helps researchers check figure requirements for major journals and convert scientific images locally in the browser.</p><p>Use the figure checker, image converter, journal requirements pages and blog guides to prepare publication-ready figures faster.</p></main>`,
  { '@context': 'https://schema.org', '@type': 'WebSite', name: 'SciPubTools', url: `${siteUrl}/`, description: 'Journal figure checker and scientific image converter for publication.' },
  '1.0',
  'weekly'
);

addRoute(
  '/journals',
  'Journal Figure Requirements by Publisher and Journal | SciPubTools',
  'Browse journal figure requirements for Nature, Science, Cell, Lancet, Elsevier, ACS, IEEE and many more. Check figure size, DPI, format and color mode.',
  `<main><h1>Journal Figure Requirements</h1><p>Browse journal-specific figure requirements including size, DPI, accepted formats, color mode and submission notes.</p></main>`,
  { '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Journal Figure Requirements', url: `${siteUrl}/journals` },
  '0.95',
  'weekly'
);

addRoute(
  '/figure-checker',
  'Figure Checker — Check Journal Figure Requirements | SciPubTools',
  'Free online figure checker for journal submission. Validate DPI, figure size, file format and color mode for Nature, Science, Cell, Lancet and more.',
  `<main><h1>Figure Checker</h1><p>Check if your figure meets journal requirements for DPI, width, height, color mode and file format before submission.</p></main>`,
  { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: 'SciPubTools Figure Checker', applicationCategory: 'UtilitiesApplication', operatingSystem: 'Web' },
  '0.95',
  'weekly'
);

addRoute(
  '/image-converter',
  'Image Converter — TIFF, PNG, JPG and PDF for Scientific Figures | SciPubTools',
  'Convert TIFF, PNG, JPG and PDF for scientific publication in your browser. Privacy-friendly figure conversion for journal submission.',
  `<main><h1>Image Converter</h1><p>Convert scientific figures between TIFF, PNG, JPG and PDF with browser-based local processing.</p></main>`,
  { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: 'SciPubTools Image Converter', applicationCategory: 'UtilitiesApplication', operatingSystem: 'Web' },
  '0.9',
  'weekly'
);

addRoute(
  '/blog',
  'Scientific Figure Blog — Guides, DPI Tips and Journal Requirements | SciPubTools',
  'Read practical guides about figure DPI, file formats, graphical abstracts, journal requirements and scientific image preparation.',
  `<main><h1>Scientific Figure Blog</h1><p>Guides and tips for journal figure preparation, image conversion and scientific publishing workflows.</p></main>`,
  { '@context': 'https://schema.org', '@type': 'Blog', name: 'SciPubTools Blog', url: `${siteUrl}/blog` },
  '0.85',
  'weekly'
);

addRoute('/privacy', 'Privacy Policy | SciPubTools', 'Read the privacy policy for SciPubTools.', `<main><h1>Privacy Policy</h1><p>Privacy information for SciPubTools.</p></main>`, { '@context': 'https://schema.org', '@type': 'WebPage', name: 'Privacy Policy' }, '0.3', 'yearly');
addRoute('/terms', 'Terms of Service | SciPubTools', 'Read the terms of service for SciPubTools.', `<main><h1>Terms of Service</h1><p>Terms of service for SciPubTools.</p></main>`, { '@context': 'https://schema.org', '@type': 'WebPage', name: 'Terms of Service' }, '0.3', 'yearly');

for (const post of blogPosts) {
  addRoute(
    `/blog/${post.slug}`,
    `${post.title} | SciPubTools`,
    post.excerpt,
    `<main><article><h1>${post.title}</h1><p>${post.excerpt}</p><p>Published: ${post.date}</p></article></main>`,
    { '@context': 'https://schema.org', '@type': 'Article', headline: post.title, description: post.excerpt, datePublished: post.date, author: { '@type': 'Organization', name: 'SciPubTools' }, publisher: { '@type': 'Organization', name: 'SciPubTools' }, mainEntityOfPage: `${siteUrl}/blog/${post.slug}` },
    '0.8',
    'monthly'
  );
}

for (const journal of journals) {
  const description = `${journal.name} figure requirements: accepted formats, DPI, size guidance, color mode and journal notes. Use SciPubTools to prepare journal-ready figures.`;
  addRoute(
    `/journals/${journal.slug}`,
    `${journal.name} Figure Requirements | SciPubTools`,
    description,
    `<main><article><h1>${journal.name} Figure Requirements</h1><p>${description}</p><p>Category: ${journal.category}</p><p>${journal.notes}</p></article></main>`,
    { '@context': 'https://schema.org', '@type': 'TechArticle', headline: `${journal.name} Figure Requirements`, description, about: journal.name, publisher: { '@type': 'Organization', name: 'SciPubTools' }, mainEntityOfPage: `${siteUrl}/journals/${journal.slug}` },
    '0.75',
    'monthly'
  );
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes.map(({ route, priority, changefreq }) => {
  const loc = route === '/' ? `${siteUrl}/` : `${siteUrl}${route}`;
  return `  <url><loc>${loc}</loc><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`;
}).join('\n')}\n</urlset>\n`;

fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap, 'utf8');
console.log(`SEO build complete: ${routes.length} routes prerendered.`);
