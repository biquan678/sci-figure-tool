import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Journals from './pages/Journals';
import JournalNature from './pages/journals/nature';
import JournalCell from './pages/journals/cell';
import JournalScience from './pages/journals/science';
import JournalElsevier from './pages/journals/elsevier';
import JournalAcs from './pages/journals/acs';
import './i18n';
import Layout from './components/Layout';
import Home from './pages/Home';
import FigureChecker from './pages/FigureChecker';
import Converter from './pages/Converter';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/journals" element={<Journals />} />
          <Route path="/journals/nature" element={<JournalNature />} />
          <Route path="/journals/cell" element={<JournalCell />} />
          <Route path="/journals/science" element={<JournalScience />} />
          <Route path="/journals/elsevier" element={<JournalElsevier />} />
          <Route path="/journals/acs" element={<JournalAcs />} />
          <Route path="/figure-checker" element={<FigureChecker />} />
          <Route path="/image-converter" element={<Converter />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
