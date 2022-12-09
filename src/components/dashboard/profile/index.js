// please export your page here
import React from "react";
import Input from "./Input";
import { Link, useNavigate } from "react-router-dom";
import styles from "./index.module.css";
import axios from "api/axios";
import { useEffect, useState } from "react";
import Key from "./assets/Key";
import User from "./assets/User";
import ErrorModal from "./ErrorModal";

const index = () => {
  const [userState, setUserState] = useState({
    first_name: "",
    last_name: "",
    email: ""
  });
  const [apiKey, setApiKey] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [keyIsVisible, setKeyIsVisible] = useState(false);
  const nav = useNavigate();

  const getData = async (user) => {
    try {
      const data = await axios.get(
        `/api/user/get_single_user?user_id=${user.id}`
      );
      setUserState(data.data.data);
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  const getApiKey = async () => {
    const token = JSON.parse(localStorage.getItem("user")).access_token;
    const data = await axios.get("/api/user/get_api_keys", {
      headers: { Authorization: "Bearer " + token }
    });
    setApiKey(data.data.api_key);
  };

  const getUserImg = (str1, str2) => {
    return str1.charAt(0) + str2.charAt(0);
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")); //1
    if (!user) return nav("/login"); //2
    getData(user.user);
    getApiKey();
  }, [JSON.parse(localStorage.getItem("user"))]); //3 still to  be corrected

  return (
    <>
      {errorMsg !== "" ? (
        <ErrorModal message={errorMsg} />
      ) : (
        <div className={styles.profile}>
          <div className={styles.profile__header}>
            <div className={styles.profile__header_details}>
              <h1>Profile</h1>
              <Link to="/dashboard/settings">Edit Profile</Link>
            </div>
            <div className={styles.profile__header_img}>
              {getUserImg(userState.first_name, userState.last_name)}
            </div>
          </div>
          <div className={styles.profile__details}>
            <div>
              <Input label="First Name">{userState.first_name}</Input>
              <Input label="Last Name">{userState.last_name}</Input>
            </div>
            <Input label="email">{userState.email}</Input>
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
                    value={apiKey}
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
