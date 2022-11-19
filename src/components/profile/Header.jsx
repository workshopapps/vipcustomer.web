import React from "react";
import Logo from "../../assets/images/logo.png";
import Girl from "../../assets/images/girl.png";
import House from "../../assets/images/house.png";
import Bolt from "../../assets/images/bolt.png";
import Calender from "../../assets/images/calender.png";
import Bell from "../../assets/images/bell.png";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <div className="logo-div">
        <img src={Logo} className="profile-logo" alt="axes logo" />
      </div>
      <div className="icon-box">
        <div className="header-search">
          <input
            type="search"
            name=""
            placeholder="Search"
            style={{ position: "relative" }}
            id=""
          />
        </div>
        <div className="hamburger">
          <FaBars style={{ marginBottom: "0" }} />
        </div>
        <div className="header-icon-box">
          <span>
            <img src={House} width="33" className="header-icons" alt="house" />
          </span>
          <span>
            <img src={Bell} width="23" className="header-icons" alt="bell" />
          </span>
          <span>
            <img
              src={Calender}
              width="23"
              className="header-icons"
              alt="calender"
            />
          </span>
          <span>
            <img src={Bolt} width="33" className="header-icons" alt="bolt" />
          </span>
          <span>
            <img src={Girl} alt="girl" className="header-girl" />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
