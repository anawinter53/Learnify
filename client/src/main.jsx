import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { AuthProvider } from "./context/AuthContext";
import { CategoryProvider } from "./context/CategoryContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <CategoryProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CategoryProvider>
  </AuthProvider>
);
