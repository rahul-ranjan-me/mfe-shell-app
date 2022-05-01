import { useContext } from "react";
import { useRoutes } from "react-router-dom";
import { GlobalContext } from "shared/Components";

const AppRoutes = () => {
  const { appRoutes } = useContext(GlobalContext);

  let element = useRoutes(appRoutes);

  return element;
};

export default AppRoutes;
