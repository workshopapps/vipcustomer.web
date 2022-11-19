import React, { useState } from "react";
import Header from "../components/profile/Header";
import { NavLink } from "react-router-dom";
import Arrow from "../assets/images/arrow.png";
import Notification from "../assets/images/notification.png";
import Security from "../assets/images/security.png";
import Help from "../assets/images/help.png";
import Logout from "../assets/images/logout.png";
import Girl from "../assets/images/girl.png";
import Pen from "../assets/images/pen.png";
import ProfileMobileNav from "../components/profile/ProfileMobileNav";

const EditProfile = () => {
  const [mobileActive, setMobileActive] = useState(false);

  return (
    <>
      <main className="profile-page">
        <Header setMobileActive={setMobileActive} />
        <section className="profile-content">
          <div className="side-nav">
            <div className="side-nav-head">
              <NavLink
                to="/profile"
                style={{ display: "flex", gap: "8px", alignItem: "center" }}>
                <span>
                  <img src={Arrow} alt="" />
                </span>
                <span>Settings</span>
              </NavLink>
            </div>

            <div className="side-nav-body">
              <ul>
                <li>
                  <NavLink to="/edit-profile">
                    <span>
                      <img className="link-image" src={Pen} alt="" />
                    </span>
                    <span className="link-text">Edit Profile</span>
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
                    <span className="link-text">Logout</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="profile-main-content">
            <div
              className="profile-main-content-head"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "30px"
              }}>
              <div>
                <h2>Edit Profile</h2>
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
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="33062 Zboncak isle"
                />
              </div>

              <div className="single-input">
                <label htmlFor="">Contact Number</label>
                <input type="tel" placeholder="58077.79" />
              </div>

              <div className="double-input">
                <div>
                  <label htmlFor="">City</label>
                  <select name="" id="">
                    <option value="mehrab">Mehrab</option>
                    <option value="lagos">Lagos</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="">State</label>
                  <select name="" id="">
                    <option value="borzogi">Borzogi</option>
                    <option value="Banghad">Banghad</option>
                  </select>
                </div>
              </div>

              <div className="single-input">
                <label htmlFor="">Password</label>
                <input type="password" placeholder="sbdfbnd65sfdvb s" />
              </div>

              <div className="profile-form-buttons">
                <button className="cancel-btn">Cancel</button>
                <button className="save-btn">Save</button>
              </div>
            </form>
          </div>
        </section>
      </main>
      {mobileActive && <ProfileMobileNav setMobileActive={setMobileActive} />}
    </>
  );
};

export default EditProfile;
