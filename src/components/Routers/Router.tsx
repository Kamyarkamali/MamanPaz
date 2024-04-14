import { Route, Routes } from "react-router-dom";

import HomePage from "../templates/HomePage";
import Register from "../module/Register";
import Services from "../module/Services";
import CookingMamanPaz from "../templates/CookingMamanPaz";
import CookInMamanPaz from "../templates/CookInMamanPaz";
import ProfileMaman from "../templates/ProfileMaman";
import PageNotFound from "../templates/404";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/services" element={<Services />} />
        <Route path="/cookingMamanPaz" element={<CookingMamanPaz />} />
        <Route path="/cookforMamanPaz" element={<CookInMamanPaz />} />
        <Route path="/:id" element={<ProfileMaman />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default Router;
