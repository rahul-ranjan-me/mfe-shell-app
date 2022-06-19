import React from "react";
import {
  SharedContextExample,
  MFAComponentLoader,
  Readme,
} from "shared/Components";
import readmeContent from "./readmeData";

const Home = () => (
  <div className="home-container">
    <Readme data={readmeContent} />
    <div id="mfa-component-loader-example" />
    <MFAComponentLoader componentName="./header" />
    <SharedContextExample link="/payments" />
  </div>
);

export default Home;
