import { useContext, useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import { GlobalContext } from "shared/Components";
import { loadScripts, getComponent } from "shared/dynamicFederationUtils";
import localRoutes from "../const/routes";

const AppRoutes = () => {
  const { manifests, setManifests } = useContext(GlobalContext);
  const [appRoutes, setAppRoutes] = useState(localRoutes);

  useEffect(() => {
    manifests.map(async (manifest, index) => {
      const { url, moduleName } = manifest;
      if (!manifests[index].loaded) await loadScripts(`${url}remoteEntry.js`);
      const module = await getComponent(moduleName, "./appRoutes");
      manifests[index].loaded = true;
      setManifests(manifests);
      setAppRoutes([...appRoutes, ...module]);
    });
  }, [manifests]);

  let element = useRoutes(appRoutes);

  return element;
};

export default AppRoutes;
