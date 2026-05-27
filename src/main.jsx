import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import Home from "./home";

createRoot(document.getElementById("root")).render(
    <Home />
);
