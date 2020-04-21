import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "./fonts/MicroSquare_30427.ttf";
import "./fonts/MicroSquare-Bold_30424.ttf";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
