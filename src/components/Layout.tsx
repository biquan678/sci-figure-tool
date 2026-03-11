import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { journals } from '../data/journals';
import BookmarkHint from './BookmarkHint';
import { localizePath, stripLocalePrefix } from '../lib/locale';

const langs = [
  { code: 'en', label: 'EN' },
  { code: 'zh', label: '中文' },
  { code: 'ja', label: '日本語' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();
  const currentLocale = params.lang || i18n.language;
  const currentPath = stripLocalePrefix(location.pathname);

  const switchLang = (code: string) => {
    i18n.changeLanguage(code);
    localStorage.setItem('lang', code);
    navigate(localizePath(currentPath, code));
  };

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/journals', label: t('nav.journals') },
    { path: '/figure-checker', label: t('nav.checker') },
    { path: '/image-converter', label: t('nav.converter') },
    { path: '/blog', label: t('nav.blog') },
  ];

  const localizedCurrentPath = localizePath(currentPath, currentLocale);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to={localizePath('/', currentLocale)} className="flex items-center gap-2">
            <span className="text-xl">📐</span>
            <span className="text-lg font-bold text-gray-900">{t('site.title')}</span>
          </Link>
          <nav className="hidden sm:flex items-center gap-1">
            {navItems.map(item => {
              const target = localizePath(item.path, currentLocale);
              return (
                <Link key={item.path} to={target}
                  className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
                    localizedCurrentPath === target ? 'bg-blue-100 text-blue-700 font-medium' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}>
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-1">
            {langs.map(l => (
              <button key={l.code} onClick={() => switchLang(l.code)}
                className={`px-2 py-1 text-xs rounded transition-colors ${
                  currentLocale === l.code ? 'bg-blue-600 text-white' : 'text-gray-500 hover:bg-gray-100'
                }`}>
                {l.label}
              </button>
            ))}
          </div>
        </div>
        <div className="sm:hidden flex border-t border-gray-100">
          {navItems.map(item => {
            const target = localizePath(item.path, currentLocale);
            return (
              <Link key={item.path} to={target}
                className={`flex-1 text-center py-2 text-xs transition-colors ${
                  localizedCurrentPath === target ? 'text-blue-700 font-medium bg-blue-50' : 'text-gray-500'
                }`}>
                {item.label}
              </Link>
            );
          })}
        </div>
      </header>

      <main className="flex-1">{children}</main>
      <BookmarkHint />

      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center text-sm text-gray-400">
          <p>{t('site.title')} — {t('footer.desc')} · {t('site.journals_count', { count: journals.length })}</p>
          <p className="mt-1">{t('footer.privacy')}</p>
          <div className="mt-2 flex justify-center gap-4 text-xs">
            <Link to={localizePath('/privacy', currentLocale)} className="hover:text-gray-600 transition-colors">Privacy Policy</Link>
            <Link to={localizePath('/terms', currentLocale)} className="hover:text-gray-600 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
