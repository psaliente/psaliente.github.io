import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PortfolioPage } from './pages/portfoliopage';
import { ProjectItemPage } from './pages/projectitempage';

const RouterComponent = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PortfolioPage />}></Route>
      <Route path="/project" element={<ProjectItemPage />}></Route>
    </Routes>
  </BrowserRouter>
);

export default RouterComponent;
