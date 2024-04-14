import Router from "./components/Routers/Router";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
    document.title = "مامان پز,سفارش آنلاین غذای خانگی";
  }, []);
  return (
    <div data-aos="fade-up">
      <Router />
    </div>
  );
}

export default App;
