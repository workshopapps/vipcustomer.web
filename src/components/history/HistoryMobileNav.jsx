import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Logo from "../../assets/images/logo.png";
import House from "../../assets/images/house.png";
import Bolt from "../../assets/images/bolt.png";
import Calender from "../../assets/images/calender.png";
import Bell from "../../assets/images/bell.png";
import Settings from "../../assets/images/settings.png";
import Notification from "../../assets/images/notification.png";
import Security from "../../assets/images/security.png";
import Help from "../../assets/images/help.png";
import Logout from "../../assets/images/logout.png";
import Pen from "../../assets/images/pen.png";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import LogoutPage from "components/auth/logoutpage";

const HistoryMobileNav = ({ mobileActive, closeNav }) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className={`profile-mobile-nav ${mobileActive ? "active" : ""}`}>
      <div className="profile-nav-head">
        <img src={Logo} alt="" />
        <FaTimes onClick={closeNav} />
      </div>
      <div>
        <input
          type="search"
          name=""
          placeholder="Search"
          style={{ position: "relative" }}
          id=""
        />
      </div>

      <ul className="profile-mobile-nav-list">
        <li>
          <NavLink to="/profile/edit">
            <span>
              <img className="link-image" src={Pen} alt="" />
            </span>
            <span className="link-text">Edit Profile</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <span>
              <img className="link-image" src={Settings} alt="" />
            </span>
            <span className="link-text">Settings</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/">
            <span>
              <img className="link-image" src={Notification} alt="" />
            </span>
            <span className="link-text">Notification</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/">
            <span>
              <img className="link-image" src={Security} alt="" />
            </span>
            <span className="link-text">Security</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/">
            <span>
              <img className="link-image" src={Help} alt="" />
            </span>
            <span className="link-text">Help</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/profile">
            <span>
              <img className="link-image" src={Logout} alt="" />
            </span>
            <span
              className="link-text"
              onClick={() => {
                setModalShow(true);
                closeNav();
              }}>
              Logout
            </span>
            <LogoutPage show={modalShow} onHide={() => setModalShow(false)} />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

HistoryMobileNav.propTypes = {
  closeNav: PropTypes.func,
  mobileActive: PropTypes.bool
};

export default HistoryMobileNav;
