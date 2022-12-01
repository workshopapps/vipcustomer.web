import React, { useEffect, useState } from "react";
// import Header from "../components/profile/Header";
import { NavLink } from "react-router-dom";
import Arrow from "../assets/images/arrow.png";
import Settings from "../assets/images/settings.png";
import Notification from "../assets/images/notification.png";
import Security from "../assets/images/security.png";
import Help from "../assets/images/help.png";
import Logout from "../assets/images/logout.png";
import Search from "../assets/images/search.png";
import ProfileMobileNav from "../components/profile/ProfileMobileNav";
import "../components/history/history.css";
import LogoutPage from "components/auth/logoutpage";
import Header from "components/history/Header";
import SearchHistory from "components/history/SearchHistory";

const History = () => {
  const [mobileActive, setMobileActive] = useState(false);

  const [modalShow, setModalShow] = useState(false);
  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  function openNav() {
    setMobileActive(true);
  }

  function closeNav() {
    setMobileActive(false);
  }

  return (
    <>
      <main className="profile-page">
        <Header openNav={openNav} />
        <section className="profile-content">
          <div className="side-nav">
            <div className="side-nav-head">
              <NavLink
                to="/"
                style={{
                  display: "flex",
                  gap: "8px",
                  alignItem: "center",
                  fontWeight: "700"
                }}>
                <span>
                  <img src={Arrow} alt="" />
                </span>
                <span>History</span>
              </NavLink>
            </div>

            <div className="side-nav-body">
              <ul>
                <li>
                  <NavLink to="/profile/edit">
                    <span>
                      <img className="link-image" src={Settings} alt="" />
                    </span>
                    <span className="link-text">Settings</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/profile">
                    <span>
                      <img className="link-image" src={Notification} alt="" />
                    </span>
                    <span className="link-text">Notification</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/profile">
                    <span>
                      <img className="link-image" src={Security} alt="" />
                    </span>
                    <span className="link-text">Security</span>
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/profile">
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
                      onClick={() => setModalShow(true)}>
                      Logout
                    </span>
                    <LogoutPage
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                    />
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="search-history-content">
            <SearchHistory />
          </div>
        </section>
      </main>

      <ProfileMobileNav mobileActive={mobileActive} closeNav={closeNav} />
    </>
  );
};

export default History;
