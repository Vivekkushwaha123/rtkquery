import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";

import App from "./App";
import { userApi } from "./features/api";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApiProvider api={userApi}>
      <App />
    </ApiProvider>
  </React.StrictMode>
);
