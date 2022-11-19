import React from "react";
import { NavLink } from "react-router-dom";
import Arrow from "../../assets/images/arrow.png";
import Settings from "../../assets/images/settings.png";
import Notification from "../../assets/images/notification.png";
import Security from "../../assets/images/security.png";
import Help from "../../assets/images/help.png";
import Logout from "../../assets/images/logout.png";
import Girl from "../../assets/images/girl.png";

const ProfileContent = () => {
  return (
    <section className="profile-content">
      <div className="side-nav">
        <div className="side-nav-head">
          <NavLink to="/">
            <span>
              <img src={Arrow} alt="" />
            </span>
            <span>Profile</span>
          </NavLink>
        </div>

        <div className="side-nav-body">
          <ul>
            <li>
              <NavLink to="/edit-profile">
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
              <NavLink to="/">
                <span>
                  <img className="link-image" src={Logout} alt="" />
                </span>
                <span className="link-text">Logout</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="profile-main-content">
        <div
          className=""
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "30px"
          }}>
          <div>
            <h2>Profile</h2>
          </div>
          <div>
            <img src={Girl} width="120" alt="" />
          </div>
        </div>

        <form className="profile-form">
          <div className="double-input">
            <div>
              <label htmlFor="">First Name</label>
              <input type="text" placeholder="Rika" />
            </div>

            <div>
              <label htmlFor="">Last Name</label>
              <input type="text" placeholder="Timmy" />
            </div>
          </div>

          <div className="single-input">
            <label htmlFor="">Company Email</label>
            <input type="email" placeholder="axe.business@gmail.com" />
          </div>

          <div className="single-input">
            <label htmlFor="">Address</label>
            <input type="text" name="" id="" placeholder="33062 Zboncak isle" />
          </div>

          <div className="single-input">
            <label htmlFor="">Contact Number</label>
            <input type="tel" placeholder="58077.79" />
          </div>
        </form>

        <div>
          <div className="user-box">
            <div className="user-box-head">
              <span>All</span>
              <span>Login History</span>
              <span>Processes</span>
            </div>

            <div className="user-box-body">
              <div>
                <img src="" alt="" />
                <div>
                  <h5>Running Newsletter</h5>
                  <span>16 November 2022 at 12:00</span>
                </div>
              </div>

              <div>
                <img src="" alt="" />
                <div>
                  <h5>Uploading CSV</h5>
                  <span>16 November 2022 at 2:00pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileContent;
