import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./static/css/tailwind.config.css";

// 🟡 Font Awesome Setup
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
library.add(faPlus); // 🟢 This registers the icon for global use

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
