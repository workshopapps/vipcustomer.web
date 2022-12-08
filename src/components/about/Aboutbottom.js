import React from "react";
import styles from "./About.module.css";
import { useNavigate } from "react-router-dom";
import { AuthStore } from "store/contexts/AuthContext";

const Aboutbottom = () => {
  const { user } = AuthStore();

  let navigate = useNavigate();

  const navigateLogin = () => {
    let path;
    if (user) {
      path = "/dashboard";
    } else {
      path = "/login";
    }
    navigate(path);
  };

  return (
    <div className={styles.bottCont}>
      <div className={styles.bottom}>
        <div className={styles.bottomImg}></div>
        <div className={styles.textDiv}>
          <h3 className={styles.bottText}>
            See how Star Finder can help your business leverage customer
            information, to make more informed business development decisions
            today
          </h3>
          {user ? (
            <button className={styles.signupBtn} onClick={navigateLogin}>
              Go to Dashboard
            </button>
          ) : (
            <button className={styles.signupBtn} onClick={navigateLogin}>
              Get Started
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Aboutbottom;
