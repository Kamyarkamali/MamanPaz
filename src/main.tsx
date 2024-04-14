import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import Layout from "./components/layout/Layout.tsx";
import Context from "./contexts/Context.tsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/store.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Context>
          <Layout>
            <App />
          </Layout>
        </Context>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
