import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./index.css";
import "./styles/dojo.css";
import "./styles/marca.css";
import { iniciarVisitas } from "./lib/visitas";

iniciarVisitas();

ReactDOM.createRoot(document.getElementById("app")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
