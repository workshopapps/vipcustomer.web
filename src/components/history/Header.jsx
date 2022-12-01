import React from "react";
import Logo from "../../assets/images/logo.png";
import Girl from "../../assets/images/girl.png";
import { FaBars } from "react-icons/fa";

import PropTypes from "prop-types";

const Header = ({ openNav }) => {
  return (
    <header>
      <div className="header-div">
        <div className="logo-div">
          <img src={Logo} className="profile-logo" alt="axes logo" />
        </div>
        <div className="header-icon-box">
          <span>
            <img src={Girl} alt="girl" className="header-girl" />
          </span>
        </div>
      </div>

      <div className="hamburger" onClick={openNav}>
        <FaBars />
      </div>

      {/* </div> */}
    </header>
  );
};

Header.propTypes = {
  openNav: PropTypes.func
};

export default Header;
