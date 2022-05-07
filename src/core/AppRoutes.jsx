import React from "react";
import { useRoutes } from "react-router-dom";

const AppRoutes = ( { appRoutes }) => {
  let element = useRoutes(appRoutes);

  return <div className="app-container">{element}</div>;
};

export default AppRoutes;
