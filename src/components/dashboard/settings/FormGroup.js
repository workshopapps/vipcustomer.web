import React from "react";
import styles from "./formgroup.module.css";
import { PropTypes } from "prop-types";

const FormGroup = ({ label, id, ...rest }) => {
  return (
    <div className={styles.formgroup}>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} name={id} {...rest} />
    </div>
  );
};

FormGroup.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string
};

export default FormGroup;
