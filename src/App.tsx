import { BrowserRouter, Navigate, Outlet, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import './i18n';
import i18n from './i18n';
import Layout from './components/Layout';
import { DEFAULT_LOCALE, SUPPORTED_LOCALES, localizePath, normalizeLocale, stripLocalePrefix } from './lib/locale';

const Home = lazy(() => import('./pages/Home'));
const Journals = lazy(() => import('./pages/Journals'));
const JournalNature = lazy(() => import('./pages/journals/nature'));
const JournalCell = lazy(() => import('./pages/journals/cell'));
const JournalScience = lazy(() => import('./pages/journals/science'));
const JournalElsevier = lazy(() => import('./pages/journals/elsevier'));
const JournalAcs = lazy(() => import('./pages/journals/acs'));
const JournalDynamic = lazy(() => import('./pages/journals/_dynamic'));
const FigureChecker = lazy(() => import('./pages/FigureChecker'));
const Converter = lazy(() => import('./pages/Converter'));
const BlogList = lazy(() => import('./pages/BlogList'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));

function LocaleGate() {
  const { lang } = useParams();
  const locale = normalizeLocale(lang);

  useEffect(() => {
    if (i18n.language !== locale) {
      i18n.changeLanguage(locale);
      localStorage.setItem('lang', locale);
    }
  }, [locale]);

  if (!SUPPORTED_LOCALES.includes((lang || '') as (typeof SUPPORTED_LOCALES)[number])) {
    return <Navigate to={`/${DEFAULT_LOCALE}`} replace />;
  }

  return (
    <Layout>
      <Suspense fallback={<div className="max-w-6xl mx-auto px-4 py-10 text-sm text-gray-400">Loading…</div>}>
        <Outlet />
      </Suspense>
    </Layout>
  );
}

function LegacyRedirect() {
  const location = useLocation();
  const savedLang = typeof window !== 'undefined' ? localStorage.getItem('lang') : null;
  const locale = normalizeLocale(savedLang || i18n.language || DEFAULT_LOCALE);
  return <Navigate to={localizePath(stripLocalePrefix(location.pathname), locale)} replace />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LegacyRedirect />} />
        <Route path="/journals" element={<LegacyRedirect />} />
        <Route path="/journals/nature" element={<LegacyRedirect />} />
        <Route path="/journals/cell" element={<LegacyRedirect />} />
        <Route path="/journals/science" element={<LegacyRedirect />} />
        <Route path="/journals/elsevier" element={<LegacyRedirect />} />
        <Route path="/journals/acs" element={<LegacyRedirect />} />
        <Route path="/journals/:slug" element={<LegacyRedirect />} />
        <Route path="/figure-checker" element={<LegacyRedirect />} />
        <Route path="/image-converter" element={<LegacyRedirect />} />
        <Route path="/blog" element={<LegacyRedirect />} />
        <Route path="/blog/:slug" element={<LegacyRedirect />} />
        <Route path="/privacy" element={<LegacyRedirect />} />
        <Route path="/terms" element={<LegacyRedirect />} />

        <Route path="/:lang" element={<LocaleGate />}>
          <Route index element={<Home />} />
          <Route path="journals" element={<Journals />} />
          <Route path="journals/nature" element={<JournalNature />} />
          <Route path="journals/cell" element={<JournalCell />} />
          <Route path="journals/science" element={<JournalScience />} />
          <Route path="journals/elsevier" element={<JournalElsevier />} />
          <Route path="journals/acs" element={<JournalAcs />} />
          <Route path="journals/:slug" element={<JournalDynamic />} />
          <Route path="figure-checker" element={<FigureChecker />} />
          <Route path="image-converter" element={<Converter />} />
          <Route path="blog" element={<BlogList />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
        </Route>

        <Route path="*" element={<Navigate to={`/${DEFAULT_LOCALE}`} replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
