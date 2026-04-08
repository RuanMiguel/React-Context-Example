import React from "react";
import ReactDOM from "react-dom/client";
import App from "./ContactsApp";
import "./App.css";
import { ThemeContext, ThemeArea } from "./context/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThemeArea initialTheme="light">
    <App />
  </ThemeArea>
);