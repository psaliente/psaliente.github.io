import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PortfolioPage } from './pages/portfoliopage';
import { ProjectItemPage } from './pages/projectitempage';
import { DecryptToolPage } from './pages/decrypttoolpage';
import { EncryptToolPage } from './pages/encrypttoolpage';

const RouterComponent = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PortfolioPage />}></Route>
      <Route path="/project" element={<ProjectItemPage />}></Route>
      <Route path="/tools/decrypt" element={<DecryptToolPage />}></Route>
      <Route path="/tools/encrypt" element={<EncryptToolPage />}></Route>
    </Routes>
  </BrowserRouter>
);

export default RouterComponent;
