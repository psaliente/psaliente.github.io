import { BrowserRouter, Routes, Route } from "react-router-dom";
import PortfolioPage from "./portfolio.component";
import PortfolioParticles from "./particles.component";
import ProjectItemPage from "./projectItemPage.component";

const RouterComponent = (): JSX.Element => 
  (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortfolioPage />}></Route>
        <Route path="/project" element={<ProjectItemPage />}></Route>
      </Routes>
    </BrowserRouter>
  );

export default RouterComponent;
