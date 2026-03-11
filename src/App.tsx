import { BrowserRouter, Navigate, Outlet, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Journals from './pages/Journals';
import JournalNature from './pages/journals/nature';
import JournalCell from './pages/journals/cell';
import JournalScience from './pages/journals/science';
import JournalElsevier from './pages/journals/elsevier';
import JournalAcs from './pages/journals/acs';
import JournalDynamic from './pages/journals/_dynamic';
import './i18n';
import i18n from './i18n';
import Layout from './components/Layout';
import Home from './pages/Home';
import FigureChecker from './pages/FigureChecker';
import Converter from './pages/Converter';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import { DEFAULT_LOCALE, SUPPORTED_LOCALES, localizePath, normalizeLocale, stripLocalePrefix } from './lib/locale';

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
      <Outlet />
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
