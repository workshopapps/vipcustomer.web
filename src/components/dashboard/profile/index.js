// please export your page here
import React from "react";
import Input from "./Input";
import { Link } from "react-router-dom";
import styles from "./index.module.css";
import { useState } from "react";
import Key from "./assets/Key";
import User from "./assets/User";
import ErrorModal from "./ErrorModal";
import { AuthStore } from "store/contexts/AuthContext";

const index = () => {
  const { api_key, user } = AuthStore();

  const [keyIsVisible, setKeyIsVisible] = useState(false);

  const getUserImg = (str1, str2) => {
    return str1.charAt(0) + str2.charAt(0);
  };

  return (
    <>
      {user === false ? (
        <ErrorModal message={"You are not logged in"} />
      ) : (
        <div className={styles.profile}>
          <div className={styles.profile__header}>
            <div className={styles.profile__header_details}>
              <h1>Profile</h1>
              <Link to="/dashboard/settings">Edit Profile</Link>
            </div>
            <div className={styles.profile__header_img}>
              {getUserImg(user?.user.first_name, user?.user.last_name)}
            </div>
          </div>
          <div className={styles.profile__details}>
            <div>
              <Input label="First Name">{user?.user.first_name}</Input>
              <Input label="Last Name">{user?.user.last_name}</Input>
            </div>
            <Input label="email">{user?.user.email}</Input>
          </div>
          <div className={styles.profile__keys}>
            <div>
              <span className={styles.profile__keys_img}>
                <Key />
              </span>
              <div className={styles.profile__keys_details}>
                <h4>API KEY</h4>
                <p>A Private API Key to interact with the StarFinder API</p>
                <div>
                  <input
                    type={keyIsVisible ? "text" : "password"}
                    readOnly
                    value={api_key || " "}
                  />
                  <User
                    setKeyIsVisible={setKeyIsVisible}
                    keyIsVisible={keyIsVisible}
                  />
                </div>
              </div>
            </div>
            <div>
              <span className={styles.profile__keys_img}>
                <Key />
              </span>
              <div className={styles.profile__keys_details}>
                <h4>APPLICATION IDENTIFIER</h4>
                <p>
                  A Public Key Identifier that can be exposed to client&apos;s
                  applications
                </p>
                <p>2849-3934-430</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default index;
