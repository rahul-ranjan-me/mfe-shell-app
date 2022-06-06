import React, { useEffect, useState } from "react";
import { setupInitialApp } from "shared/dynamicFederationUtils";
import localRoutes from "../const/routes";
import App from "./App";

function SetupApp() {
  const [allAppRoutes, setAllAppRoutes] = useState([]);
  const [federatedComponents, setFederatedComponents] = useState({});

  useEffect(() => {
    const configSetup = async () => {
      const configsResponse = await fetch("/config.json");
      const configs = await configsResponse.json();

      const { appRoutesInitial, updateWithModuleName } = await setupInitialApp(
        configs,
        localRoutes
      );
      setAllAppRoutes(appRoutesInitial);
      setFederatedComponents(updateWithModuleName);
    };

    configSetup();
  }, []);

  return (
    allAppRoutes.length > 0 && (
      <App
        appRoutes={allAppRoutes}
        federatedComponents={federatedComponents}
      />
    )
  );
}

export default SetupApp;
