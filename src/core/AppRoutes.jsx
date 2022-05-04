import { useRoutes } from "react-router-dom";

const AppRoutes = ( { appRoutes }) => {
  let element = useRoutes(appRoutes);

  return element;
};

export default AppRoutes;
