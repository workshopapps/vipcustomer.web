import React from "react";
import { PropTypes } from "prop-types";
import styles from "./errormodal.module.css";

const ErrorModal = ({ message }) => {
  return (
    <div className={styles.ErrorModal}>
      <h1>Error</h1>
      <p>{message}</p>
      <p>
        Click here to go back to the <a href="/">home page </a>
      </p>
    </div>
  );
};

ErrorModal.propTypes = {
  message: PropTypes.string
};

export default ErrorModal;
