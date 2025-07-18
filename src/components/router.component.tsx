import { Routes, Route, HashRouter } from 'react-router-dom';
import { PortfolioPage } from './pages/portfoliopage';
import { ProjectItemPage } from './pages/projectitempage';
import { DecodePage, DecryptPage, EncodePage, EncryptPage, JulianConverterPage, ToolsPage } from './pages/toolspage';

const RouterComponent = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<PortfolioPage />}></Route>
      <Route path="/project" element={<ProjectItemPage />}></Route>
      <Route path="/tools" element={<ToolsPage />}></Route>
      <Route path="/tools/decrypt" element={<DecryptPage />}></Route>
      <Route path="/tools/encrypt" element={<EncryptPage />}></Route>
      <Route path="/tools/decode" element={<DecodePage />}></Route>
      <Route path="/tools/encode" element={<EncodePage />}></Route>
      <Route path="/tools/julian-convert" element={<JulianConverterPage />}></Route>
    </Routes>
  </HashRouter>
);

export default RouterComponent;
