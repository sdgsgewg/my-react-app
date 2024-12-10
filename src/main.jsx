import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./input.css";
import App from "./components/App.jsx";
import { ToDoProvider } from "./components/ToDoList/ToDoProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToDoProvider>
      <App />
    </ToDoProvider>
  </StrictMode>
);
