import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PortfolioPage } from './pages/portfoliopage';
import { ProjectItemPage } from './pages/projectitempage';
import { DecryptPage, EncryptPage } from './pages/toolspage';

const RouterComponent = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PortfolioPage />}></Route>
      <Route path="/project" element={<ProjectItemPage />}></Route>
      <Route path="/tools/decrypt" element={<DecryptPage />}></Route>
      <Route path="/tools/encrypt" element={<EncryptPage />}></Route>
    </Routes>
  </BrowserRouter>
);

export default RouterComponent;
