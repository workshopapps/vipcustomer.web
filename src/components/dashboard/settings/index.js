import React from "react";
import styles from "./index.module.css";
import FormGroup from "./FormGroup";
import { useState, useEffect } from "react";
import axios from "api/axios";
import { useNavigate } from "react-router-dom";
import ErrorModal from "./ErrorModal";

const index = () => {
  const [userState, setUserState] = useState({ first_name: "", last_name: "" });
  const [errorMsg, setErrorMsg] = useState("");
  const nav = useNavigate();

  const getUserImg = (str1, str2) => {
    return str1.charAt(0) + str2.charAt(0);
  };

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

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")).user;
    if (!user) nav("/login");
    getData(user);
    console.log(errorMsg);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = JSON.parse(localStorage.getItem("user")).access_token;

    await axios.patch("/api/user/update_user_profie", userState, {
      headers: {
        Authorization: "bearer " + token
      }
    });
    nav("/dashboard/profile");
  };

  return (
    <>
      {errorMsg !== "" ? (
        <ErrorModal message={errorMsg} />
      ) : (
        <div className={styles.settings}>
          <div className={styles.settings__header}>
            <div className={styles.settings__header_details}>
              <h1>Settings</h1>
              <a href="/dashboard/profile">cancel</a>
            </div>
            <div className={styles.settings__header_img}>
              {getUserImg(userState.first_name, userState.last_name)}
            </div>
          </div>
          <form
            action=""
            onSubmit={handleSubmit}
            className={styles.settings__form}>
            <FormGroup
              label="First Name"
              id="fname"
              value={userState.first_name}
              onChange={(e) =>
                setUserState({ ...userState, first_name: e.target.value })
              }
              placeholder="Enter your first name"
            />
            <FormGroup
              label="Last Name"
              id="lname"
              value={userState.last_name}
              onChange={(e) =>
                setUserState({ ...userState, last_name: e.target.value })
              }
              placeholder="Enter your last name"
            />
            <button type="submit">Change my details</button>
          </form>
        </div>
      )}
    </>
  );
};

export default index;
