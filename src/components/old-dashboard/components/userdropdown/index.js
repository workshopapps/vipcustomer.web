import React, { useState } from "react";
import styles from "./styles.module.css";
import dummmy_dp from "../../assets/dummy_dp.png";

export default function UserDropdown() {
  const [showDrop, setShowDrop] = useState(false);

  return (
    <div
      className={styles.user_dropdown}
      onClick={() => setShowDrop(!showDrop)}>
      <img src={dummmy_dp} alt="user" />

      <div className={`${styles.dropdown} ${showDrop ? styles.active : ""}`}>
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
  );
}
