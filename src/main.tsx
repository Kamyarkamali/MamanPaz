import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import Layout from "./components/layout/Layout.tsx";
import Context from "./contexts/Context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Context>
      <Layout>
        <App />
      </Layout>
    </Context>
  </React.StrictMode>
);
