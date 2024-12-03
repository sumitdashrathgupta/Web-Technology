import React from "react";
import ReactDom, { createRoot } from "react-dom/client"
import Product from "./Product"

createRoot(document.querySelector("#root")).render(<Product />)