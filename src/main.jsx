import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.min.css"
import "./index.css";
import App from "./App";

let entryPoint = ReactDOM.createRoot(document.querySelector(".root"));

entryPoint.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)