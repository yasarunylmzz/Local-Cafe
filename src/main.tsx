import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Login from "./Login/Login.tsx";
import QrMenu from "./QrMenu/QrMenu.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QrMenu />
  </StrictMode>
);
