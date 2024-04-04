import { FC } from "react";

import Header from "./Header";
import Footer from "./Footer";

import { Ichildren } from "../../types/interface";

const Layout: FC<Ichildren> = ({ children }) => {
  return (
    <div>
      <header>
        <Header />
      </header>

      <main className="min-h-[2500px]">{children}</main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
