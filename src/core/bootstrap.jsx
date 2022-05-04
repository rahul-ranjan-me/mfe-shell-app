import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";
import SetupApp from "./setupApp";

const root = createRoot(document.getElementById("app"));
root.render(
  <Router>
    <SetupApp />
  </Router>
);
