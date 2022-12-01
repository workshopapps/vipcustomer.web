import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchInput from "../searchinput";

import styles from "./nav.module.css";

import dummmy_dp from "../../assets/dummy_dp.png";
import Logo from "./assets/Logo.svg";
import SearchIcon from "./assets/SearchIcon.svg";

export default function NavBar() {
  const [showDrop, setShowDrop] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/">
          <div className={styles.logo__container}>
            <img src={Logo} alt="Axe api" />
          </div>
        </Link>

        <div className={styles.search__user_img}>
          <SearchInput />

          <div
            className={styles.img__dropdown}
            onClick={() => setShowDrop(!showDrop)}>
            <img src={dummmy_dp} alt="user" />

            <div
              className={`${styles.dropdown} ${showDrop ? styles.active : ""}`}>
              <h3>Username</h3>

              <ul>
                <li>
                  <a href="">Settings</a>
                </li>
                <li>
                  <a href="">Settings</a>
                </li>
                <li>
                  <a href="">Settings</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.mobile__search}>
          <img src={SearchIcon} alt="search" />
        </div>
      </div>
    </header>
  );
}
