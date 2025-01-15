import React from "react";
import { createRoot } from "react-dom/client"
import "./CLC/Fetch API/Style.css"
import App from "./Router/App"
import { BrowserRouter } from "react-router-dom";

createRoot(document.querySelector("#root")).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>

)