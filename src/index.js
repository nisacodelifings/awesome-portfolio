import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "../styles/component.css";
import "../styles/styling.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
