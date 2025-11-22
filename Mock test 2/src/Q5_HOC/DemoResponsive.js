import React from "react";
import withWindowWidth from "./withWindowWidth";

/*
  Q5: Component using HOC
  --------------------------------
  Displays different UI for mobile / desktop
*/

const DemoResponsive = ({ windowWidth }) => {
  return (
    <div>
      <h3>Window width: {windowWidth}px</h3>
      {windowWidth < 600 ? <p>Mobile View</p> : <p>Desktop View</p>}
    </div>
  );
};

export default withWindowWidth(DemoResponsive);
