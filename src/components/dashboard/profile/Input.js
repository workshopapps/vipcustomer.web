import React from "react";
import { PropTypes } from "prop-types";
import styles from "./Input.module.css";

const Input = ({ label, children }) => {
  return (
    <div className={styles.Input}>
      <h2>{label}</h2>
      <div>{children}</div>
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  children: PropTypes.string
};

export default Input;
