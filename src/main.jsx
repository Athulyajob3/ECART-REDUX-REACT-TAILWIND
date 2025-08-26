 import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux"; // ✅ Add this
import cartStore from "./redux/cartStore"; // ✅ Adjust this path as needed

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={cartStore}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
