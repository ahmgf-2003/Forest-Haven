import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { makeServer } from "./server";

makeServer();

createRoot(document.getElementById("root")).render(<App />);
