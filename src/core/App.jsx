import React from "react";
import propTypes from "prop-types";
import { GlobalState, Header, Footer } from "shared/Components";
import AppRoutes from "./AppRoutes";

import "./index.scss";

function App({ appRoutes = [], federatedComponents = {} }) {
  return (
    <GlobalState
      appRoutesData={appRoutes}
      federatedComponentsData={federatedComponents}
    >
      <Header />
      <AppRoutes appRoutes={appRoutes} />
      <Footer />
    </GlobalState>
  );
}

App.defaultProps = {
  federatedComponents: {}
};

App.propTypes = {
  appRoutes: propTypes.array.isRequired,
  federatedComponents: propTypes.object
};

export default App;
