import React from "react";
import { createRoot } from "react-dom/client"
import App from "./App"
import { Provider } from "react-redux";

createRoot(document.querySelector("#root")).render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)

