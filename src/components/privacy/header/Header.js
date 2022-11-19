import React, { useState } from "react";
import HeaderWrapper from "./header.styled";
import axeLogo from "./../images/logos.png";
import ham from "./../images/menubar.png";
import Linkbtn from "../Linkbtn";
import Sidebar from "./Sidebar";

//header component for privacy page
const Header = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    return setNav(!nav);
  };

  return (
    <HeaderWrapper>
      <div className="axeimg">
        <img src={axeLogo} alt="Axe API" />
      </div>
      <nav>
        <div className="navlist">
          {/* calling the linkbtn component as a reusable component */}
          <Linkbtn href="#" child="Products" />
          <Linkbtn href="#" child="Resources" />
          <Linkbtn href="#" child="About Us" />
        </div>
        <div className="navlist">
          <Linkbtn href="#" child="Login" />
          <Linkbtn href="#" className="start" child="Get Started" />
        </div>
      </nav>
      {/* hamburger menu hidden on desktop, display on tablets and mobile */}
      <div className="ham" onClick={handleClick}>
        <img src={ham} alt="hamburgermenu" />
      </div>
      {nav ? <Sidebar /> : null}
    </HeaderWrapper>
  );
};
export default Header;
