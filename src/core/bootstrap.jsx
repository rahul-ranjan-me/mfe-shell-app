import React from "react";
import { createRoot } from "react-dom/client";
import SetupApp from "./setupApp";

const root = createRoot(document.getElementById("app"));
root.render(<SetupApp />);