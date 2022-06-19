import React, { useEffect } from "react";
import propTypes from "prop-types";
import { useRoutes } from "react-router-dom";

const AppRoutes = ({ appRoutes }) => {
  const element = useRoutes(appRoutes);
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return <div className="app-container">{element}</div>;
};

AppRoutes.propTypes = {
  appRoutes: propTypes.array.isRequired,
};

export default AppRoutes;
