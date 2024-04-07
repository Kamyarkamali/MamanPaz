import { Route, Routes } from "react-router-dom";

import HomePage from "../templates/HomePage";
import Register from "../module/Register";
import Services from "../module/Services";
import CookingMamanPaz from "../templates/CookingMamanPaz";
import CookInMamanPaz from "../templates/CookInMamanPaz";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/services" element={<Services />} />
        <Route path="/cookingMamanPaz" element={<CookingMamanPaz />} />
        <Route path="/cookforMamanPaz" element={<CookInMamanPaz />} />
      </Routes>
    </div>
  );
}

export default Router;
