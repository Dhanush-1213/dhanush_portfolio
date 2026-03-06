import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"; // Make sure the file is App.jsx

// CSS imports
import "./index.css";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);