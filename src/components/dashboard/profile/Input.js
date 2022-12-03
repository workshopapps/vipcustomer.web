import React from "react";
import PropTypes from "prop-types";
import styles from "./Input.module.css";

const Input = ({ label, id, ...rest }) => {
  return (
    <div className={styles.Input}>
      <label htmlFor={id}>{label}</label>
      <input type="text" name={id} id={id} {...rest} />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string
};

export default Input;
