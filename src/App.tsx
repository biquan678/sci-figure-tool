import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './i18n';
import Layout from './components/Layout';
import Home from './pages/Home';
import FigureChecker from './pages/FigureChecker';
import Converter from './pages/Converter';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/figure-checker" element={<FigureChecker />} />
          <Route path="/image-converter" element={<Converter />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
