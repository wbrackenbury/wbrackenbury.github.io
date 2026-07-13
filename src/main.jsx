import React from "react";
import ReactDOM from "react-dom/client";

import "./main.css";
import Root from "./components/root";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Root />
  </Router>
);
