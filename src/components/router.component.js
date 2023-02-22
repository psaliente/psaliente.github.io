import { BrowserRouter, Routes, Route } from "react-router-dom";
import PortfolioPage from "./portfolio.component";
import MrTutorPage from "./mrtutor/mrtutor.component";

export default function RouterComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortfolioPage />}></Route>
        <Route path="/mr-tutor" element={<PortfolioPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
