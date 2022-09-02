import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import "./styles/header.scss";
import "./styles/card.scss";
import "./styles/categories.scss";
import "./styles/sort.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
