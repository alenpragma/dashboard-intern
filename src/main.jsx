import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router.jsx";
import StoreContextProvider from "./context/context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <StoreContextProvider>
  <RouterProvider router={router} />
  </StoreContextProvider>
  </React.StrictMode>
);
