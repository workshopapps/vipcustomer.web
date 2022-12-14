// please export your page here
import React, { useState } from "react";
import Input from "./Input";
import { Link } from "react-router-dom";
import styles from "./index.module.css";
import Key from "./assets/Key";
import ErrorModal from "./ErrorModal";
import { AuthStore } from "store/contexts/AuthContext";

const index = () => {
  const { api_key, user } = AuthStore();
  const [showAlert, setShowAlert] = useState(false);

  const getUserImg = (str1, str2) => {
    return str1.charAt(0) + str2.charAt(0);
  };

  const generateApiKey = (e) => {
    e.preventDefault();

    navigator.clipboard.writeText(api_key);

    e.target.style.boxShadow = "none";
    setTimeout(() => {
      e.target.style.boxShadow = "2px 4px 2px";
    }, 150);

    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <>
      {user === false ? (
        <ErrorModal message={"You are not logged in"} />
      ) : (
        <>
          {showAlert && (
            <div className={styles.alert}>Api Key copied to clipboard</div>
          )}
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
                  <button onClick={generateApiKey}>
                    Generate your api key
                  </button>
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
        </>
      )}
    </>
  );
};

export default index;
