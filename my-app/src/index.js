import React from "react";
import ReactDOM from "react-dom/client";

import "./stylesheets/main.css";
import Root from "./components/root.js";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Root />
  </Router>
);
