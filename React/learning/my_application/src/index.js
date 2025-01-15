import React from "react";
import { createRoot } from "react-dom/client"
import "./CLC/Fetch API/Style.css"
<<<<<<< HEAD
import App from "./Context API/File Props/App"
createRoot(document.querySelector("#root")).render(<App />)
=======
import App from "./Router/App"
import { BrowserRouter } from "react-router-dom";

createRoot(document.querySelector("#root")).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>

)
>>>>>>> 44f66e0f470c0335c199204f1ecc2a217ef2b15e
