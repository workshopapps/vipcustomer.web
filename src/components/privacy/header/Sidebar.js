import React from "react";
import Linkbtn from "../Linkbtn";

const Sidebar = () => {
  return (
    <div className="side">
      <div className="sidelist">
        {/* calling the linkbtn component as a reusable component */}
        <Linkbtn href="#" child="Products" />
        <Linkbtn href="#" child="Resources" />
        <Linkbtn href="#" child="About Us" />
      </div>
      <div className="sidelist">
        <Linkbtn href="#" child="Login" />
        <Linkbtn href="#" className="sidestart" child="Get Started" />
      </div>
    </div>
  );
};

export default Sidebar;
