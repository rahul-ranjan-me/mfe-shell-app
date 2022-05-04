import React from "react";
import { Link } from "react-router-dom";
import { MFAComponentLoader } from "shared/Components";

const Home = () => {
  return (
    <>
      <Link to="/payments">Go to about page</Link>
      <h1>Welcome to Module federation bootstrap app</h1>
      <MFAComponentLoader componentName="./header" />
    </>
  );
};

export default Home;
