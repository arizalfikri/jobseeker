import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./index.css";
import "./scss/custom.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/inter";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
