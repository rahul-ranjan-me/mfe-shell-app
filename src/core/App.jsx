import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import propTypes from "prop-types";
import { GlobalState, Header, Footer } from "shared/Components";
import AppRoutes from "./AppRoutes";

import "./index.scss";

function App({ appRoutes = [], federatedComponents = {} }) {
  return (
    <Router>
      <GlobalState
        appRoutesData={appRoutes}
        federatedComponentsData={federatedComponents}
      >
        <div className="app">
          <Header />
          <AppRoutes />
          <Footer />
        </div>
      </GlobalState>
    </Router>
  );
}

App.propTypes = {};

export default App;
