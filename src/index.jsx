import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import SideBar from "./components/SideBar.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="flex w-screen">
        <SideBar />
        <App />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
