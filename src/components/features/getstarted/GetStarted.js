import React from "react";
import classes from "../getstarted/GetStarted.module.css";
import { Link } from "react-router-dom";
import { AuthStore } from "store/contexts/AuthContext";

const GetStarted = () => {
  const { user } = AuthStore();

  return (
    <div className={classes.getstarted}>
      <h4 className={classes.heading}>
        Identify VIP customers and give them the
        <span className={classes.span}> Five-Star </span>
        treatment they deserve.
      </h4>
      <p className={classes.paragraph}>
        Discover, view & rank VIPs on your platform with Star Finder. Harness
        the power of data to grow your business through unique VIP offerings and
        partnerships.
      </p>
      {user ? (
        <Link to={"/dashboard"}>
          <button className={classes.button}>Go to Dashboard</button>
        </Link>
      ) : (
        <Link to={"/login"}>
          <button className={classes.button}>Get Started</button>
        </Link>
      )}
    </div>
  );
};
export default GetStarted;
