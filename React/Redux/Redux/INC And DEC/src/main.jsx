import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import store from "./Store/Store.jsx";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
