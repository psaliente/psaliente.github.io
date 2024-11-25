import { BrowserRouter, Routes, Route } from "react-router-dom";
import PortfolioPage from "./portfolio.component";
import PortfolioParticles from "./particles.component";

const RouterComponent = (): JSX.Element => 
  (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortfolioPage />}></Route>
        <Route path="/particles" element={<PortfolioParticles />}></Route>
      </Routes>
    </BrowserRouter>
  );

export default RouterComponent;
