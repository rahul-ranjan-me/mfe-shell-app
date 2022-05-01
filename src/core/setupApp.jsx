import React, { useEffect, useState } from "react";
import { getRoutes } from "shared/dynamicFederationUtils";
import App from "./App";

function SetupApp() {
  const [commonRoutes, setCommonRoutes] = useState([]);
  const [manifests, setManifests] = useState([]);

  useEffect(() => {
    const configSetup = async () => {
      const response = await fetch("/config.json");
      const data = await response.json();
      const { manifests: manifestModule, allModuleRoutes } = await getRoutes(
        data,
        [],
        "navGroups"
      );
      setCommonRoutes(allModuleRoutes);
      setManifests(manifestModule);
    };

    configSetup();
  }, []);

  return (
    <div>
      {commonRoutes.length > 0 && (
        <App commonRoutes={commonRoutes} manifests={manifests} />
      )}
    </div>
  );
}

export default SetupApp;
