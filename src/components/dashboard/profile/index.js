// please export your page here
import React, { useEffect, useState } from "react";
import Input from "./Input";
import styles from "./index.module.css";
import axios from "axios";

const index = () => {
  const [userState, setUserState] = useState({});
  const [img, setImg] = useState("");

  const getUser = async () => {
    const user = JSON.parse(localStorage.getItem("user")).data;
    setUserState(user);
    setImg(
      (user.first_name.charAt(0) + user.last_name.charAt(0)).toUpperCase()
    );
    // const res = await axios.get(
    //   `https://api.starfinder.hng.tech/api/user/get_single_user?user_id=${user.id}`
    // );
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className={styles.profile}>
      <div className={styles.profile__header}>
        <div>
          <h1>Profile</h1>
          <a href="/dashboard/settings">Edit Profile</a>
        </div>
        <div className={styles.profile__img}>{img}</div>
      </div>
      <div className={styles.profile__details}>
        <div className={styles.profile__names}>
          <Input label="first name">{userState.first_name}</Input>
          <Input label="last name">{userState.last_name}</Input>
        </div>
        <Input label="company email">{userState.email}</Input>
        <Input label="address">{userState.address}</Input>
        <Input label="contact number">{userState.number}</Input>
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
