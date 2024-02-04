import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Landing from "./screens/Landing";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>
  <Landing />
  // </React.StrictMode>
);
