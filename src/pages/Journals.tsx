import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { journals, categories } from '../data/journals';
import { slugify } from '../utils/slug';
import SEO from '../components/SEO';

export default function Journals() {
  const { t } = useTranslation();
  const [query, setQuery] = useState('');
  const [cat, setCat] = useState('');

  const list = useMemo(() => {
    let out = journals;
    if (cat) out = out.filter(j => j.category === cat);
    if (query) {
      const q = query.toLowerCase();
      out = out.filter(j => j.name.toLowerCase().includes(q) || j.notes.toLowerCase().includes(q));
    }
    return out.slice(0, 200);
  }, [query, cat]);

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <SEO
        title="Journal Figure Requirements by Publisher and Journal | SciPubTools"
        description="Browse journal figure requirements for Nature, Science, Cell, Lancet, Elsevier, ACS, IEEE and many more. Check figure size, DPI, format and color mode."
        canonical="https://scipubtools.com/journals"
      />
      <h1 className="text-3xl font-bold">{t('journals.title')}</h1>
      <p className="mt-3 text-gray-600">{t('journals.subtitle')}</p>

      <div className="mt-6 flex flex-wrap gap-3 items-center">
        <input value={query} onChange={e => setQuery(e.target.value)} placeholder={t('checker.search_placeholder')} className="px-3 py-2 border rounded-lg text-sm" />
        <select value={cat} onChange={e => setCat(e.target.value)} className="px-3 py-2 border rounded-lg text-sm">
          <option value="">All categories</option>
          {categories.map(c => <option key={c} value={c}>{t(`categories.${c}`)}</option>)}
        </select>
        {cat && <button className="text-sm text-blue-600" onClick={() => setCat('')}>Clear</button>}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map(j => (
          <Link key={j.name} to={`/journals/${slugify(j.name)}`} className="p-5 rounded-xl border hover:shadow">
            <div className="text-lg font-semibold">{j.name}</div>
            <div className="text-xs text-gray-400 mt-1">{t(`categories.${j.category}`)}</div>
            <div className="text-sm text-gray-500 mt-2 line-clamp-2">{j.notes}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
