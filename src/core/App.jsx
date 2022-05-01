import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import propTypes from "prop-types";
import { GlobalState, Header, Footer } from "shared/Components";
import AppRoutes from './AppRoutes'

import "./index.scss";

function App({ commonRoutes = [], manifests = [] }) {
  return (
    <Router>
      <GlobalState manifestData={manifests}>
        <div className="app">
          <Header routes={commonRoutes} />
          <AppRoutes />
          <Footer />
        </div>
      </GlobalState>
    </Router>
  );
}

App.propTypes = {
  commonRoutes: propTypes.array.isRequired,
  manifests: propTypes.array.isRequired,
};

export default App;
