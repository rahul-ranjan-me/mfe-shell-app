import React from "react";
import propTypes from "prop-types";
import { useRoutes } from "react-router-dom";

const AppRoutes = ({ appRoutes }) => {
  const element = useRoutes(appRoutes);

  return <div className="app-container">{element}</div>;
};

AppRoutes.propTypes = {
  appRoutes: propTypes.array.isRequired
};

export default AppRoutes;
