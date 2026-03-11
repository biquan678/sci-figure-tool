import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { posts } from '../data/blog';
import { articleContent } from '../data/articles';
import SEO from '../components/SEO';
import { localizePath, normalizeLocale } from '../lib/locale';
import { getBlogPostMeta } from '../lib/blogSeo';

export default function BlogPost() {
  const { t } = useTranslation();
  const { slug, lang } = useParams<{ slug: string; lang: string }>();
  const locale = normalizeLocale(lang);
  const post = posts.find(p => p.slug === slug);
  const content = slug ? articleContent[slug] : undefined;

  if (!post || !content) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">{t('blog.not_found')}</h1>
        <Link to={localizePath('/', locale)} className="text-blue-600 hover:underline">← {t('blog.back_home')}</Link>
      </div>
    );
  }

  const meta = getBlogPostMeta(post, locale);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    inLanguage: locale,
    author: { '@type': 'Organization', name: 'SCI Pub Tools' },
    publisher: { '@type': 'Organization', name: 'SCI Pub Tools', url: 'https://scipubtools.com' },
    mainEntityOfPage: `https://scipubtools.com${localizePath(`/blog/${post.slug}`, locale)}`,
  };

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <SEO
        title={meta.title}
        description={meta.description}
        path={`/blog/${post.slug}`}
        locale={locale}
        schema={articleSchema}
      />
      <Link to={localizePath('/blog', locale)} className="text-sm text-blue-600 hover:underline mb-4 inline-block">← {t('blog.back_blog')}</Link>
      <div className="flex flex-wrap gap-1 mb-3">
        {post.tags.map(tag => (
          <span key={tag} className="text-xs px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full">{tag}</span>
        ))}
      </div>
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{post.title}</h1>
      <time className="text-sm text-gray-400 block mb-8">{post.date}</time>
      <div className="prose prose-sm sm:prose max-w-none prose-headings:text-gray-900 prose-a:text-blue-600 prose-strong:text-gray-900"
        dangerouslySetInnerHTML={{ __html: markdownToHtml(content) }} />
    </article>
  );
}

function markdownToHtml(md: string): string {
  let html = md
    .replace(/```(\w*)\n([\s\S]*?)```/g, '<pre class="bg-gray-50 rounded-lg p-4 overflow-x-auto text-sm"><code>$2</code></pre>')
    .replace(/\|(.+)\|\n\|[-| :]+\|\n((?:\|.+\|\n?)*)/g, (_match, header: string, body: string) => {
      const ths = header.split('|').filter((c: string) => c.trim()).map((c: string) => `<th class="px-3 py-2 text-left text-sm font-medium text-gray-700 bg-gray-50">${c.trim()}</th>`).join('');
      const rows = body.trim().split('\n').map((row: string) => {
        const tds = row.split('|').filter((c: string) => c.trim()).map((c: string) => `<td class="px-3 py-2 text-sm text-gray-600 border-t">${c.trim()}</td>`).join('');
        return `<tr>${tds}</tr>`;
      }).join('');
      return `<table class="w-full border border-gray-200 rounded-lg overflow-hidden mb-4"><thead><tr>${ths}</tr></thead><tbody>${rows}</tbody></table>`;
    })
    .replace(/^### (.+)$/gm, '<h3 class="text-lg font-semibold text-gray-900 mt-6 mb-2">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="text-xl font-bold text-gray-900 mt-8 mb-3">$1</h2>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code class="bg-gray-100 px-1 rounded text-sm">$1</code>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-600 hover:underline">$1</a>')
    .replace(/^- \[ \] (.+)$/gm, '<div class="flex items-center gap-2 my-1"><input type="checkbox" disabled class="rounded"><span class="text-sm">$1</span></div>')
    .replace(/^- \[x\] (.+)$/gm, '<div class="flex items-center gap-2 my-1"><input type="checkbox" checked disabled class="rounded"><span class="text-sm line-through text-gray-400">$1</span></div>')
    .replace(/^- (.+)$/gm, '<li class="ml-4 text-sm text-gray-700">$1</li>')
    .replace(/^\d+\. (.+)$/gm, '<li class="ml-4 text-sm text-gray-700 list-decimal">$1</li>')
    .replace(/\n\n/g, '</p><p class="text-gray-700 leading-relaxed mb-4">')
    .replace(/\n/g, '<br/>');
  return `<p class="text-gray-700 leading-relaxed mb-4">${html}</p>`;
}
