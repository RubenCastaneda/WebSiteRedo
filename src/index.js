import React from "react";
import ReactDOM from "react-dom/client"; // Use React 18 method for rendering
import "./styles.css"; // Import global styles here
import App from "./App";

// Create a root and render the App component into the root div
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
