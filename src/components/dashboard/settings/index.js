import React from "react";
import styles from "./index.module.css";
import FormGroup from "./FormGroup";
import { useState } from "react";
import axios from "api/axios";
import { useNavigate } from "react-router-dom";
import ErrorModal from "./ErrorModal";
import { AuthStore } from "store/contexts/AuthContext";
import { login_a } from "store/actions/authActions";
import Loading from "../search/components/loading";

const index = () => {
  const { user, dispatch } = AuthStore();
  const [userState, setUserState] = useState({ first_name: "", last_name: "" });

  const nav = useNavigate();
  const getUserImg = (str1, str2) => {
    return str1.charAt(0) + str2.charAt(0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user || !userState.first_name || !userState.last_name) return;
    try {
      await axios.patch("/api/user/update_user_profie", userState);
      const resp = await axios.get(
        `/api/user/get_single_user?user_id=${user?.user.id}`
      );
      const newUser = resp.data.data;
      const { first_name, last_name } = newUser;
      login_a(dispatch, {
        ...user,
        user: {
          ...user.user,
          first_name,
          last_name
        }
      });
      nav("/dashboard/profile");
    } catch (error) {
      login_a(dispatch, user);
    }
  };

  return (
    <>
      {user === false ? (
        <ErrorModal message={"You are not logged in"} />
      ) : (
        <div className={styles.settings}>
          <div className={styles.settings__header}>
            <div className={styles.settings__header_details}>
              <h1>Settings</h1>
              <a href="/dashboard/profile">cancel</a>
            </div>
            <div className={styles.settings__header_img}>
              {getUserImg(user?.user.first_name, user?.user.last_name)}
            </div>
          </div>
          <form onSubmit={handleSubmit} className={styles.settings__form}>
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
            <Loading loading={true} />
            <button type="submit">Change my details</button>
          </form>
        </div>
      )}
    </>
  );
};

export default index;
