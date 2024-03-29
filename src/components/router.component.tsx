import { BrowserRouter, Routes, Route } from "react-router-dom";
import PortfolioPage from "./portfolio.component";
import MrTutorPage from "./mrtutor/mrtutor.component";

const RouterComponent = (): JSX.Element => 
  (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortfolioPage />}></Route>
        <Route path="/mr-tutor" element={<MrTutorPage />}></Route>
      </Routes>
    </BrowserRouter>
  );

export default RouterComponent;
