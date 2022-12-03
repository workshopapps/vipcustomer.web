// please export your page here
import React from "react";
import Input from "./Input";
import styles from "./index.module.css";

const index = () => {
  return (
    <div>
      <div className={styles.profile__header}>
        <div>
          <h1>Profile</h1>
          <a>Edit Profile</a>
        </div>
        <div className={styles.profile__img}>sa</div>
      </div>
      <div className={styles.profile__details}>
        <div className={styles.profile__names}>
          <Input label="first name" id="fname" value="rika" disabled />
          <Input label="last name" id="lname" value="timmy" disabled />
        </div>
        <Input
          label="company email"
          id="email"
          value="axe.business@gmail.com"
          disabled
        />
        <Input
          label="address"
          id="address"
          value="33062 Zboncak isle"
          disabled
        />
        <Input
          label="contact number"
          id="number"
          value="+23458673540"
          disabled
        />
      </div>
      <div className={styles.profile__keysSection}>
        <div>
          <img src="/svg/key.svg" alt="" />
          <div>
            <h4>api key</h4>
            <p>A Private API Key to interact with the StarFinder API</p>
            <p className={styles.profile__keys}>******************</p>
          </div>
        </div>
        <div>
          <img src="/svg/key.svg" style={{ visibility: "hidden" }} alt="" />
          <div>
            <h4>application identifier</h4>
            <p>
              A Public Key Identifier that can be exposed to client’s
              applications
            </p>
            <p className={styles.profile__keys}>2849-3934-430</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
