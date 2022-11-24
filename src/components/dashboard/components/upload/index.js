import React, { useState } from "react";
import PropTypes from "prop-types";

import styles from "./upload.module.css";
// import CloudUploadIcon from "./assets/CloudUploadIcon.svg";
import UploadIcon from "./assets/UploadIcon.svg";
import UserDropdown from "../userdropdown";

function Upload(props) {
  const { handleNamesData, namesData, removeEntry } = props;

  //states
  const [formData, setFormData] = useState({ fullName: "", email: "" });
  const [formErrors, setFormErrors] = useState({});
  const [visibleEntry, setVisibleEntry] = useState(false);
  const [visibleIndex, setVisibleIndex] = useState(0);

  //Function for form validation
  function validateForm(values) {
    const errors = {};
    if (values.fullName.length <= 5) {
      errors.fullName = "Please enter your full name";
    }

    return errors;
  }

  function handleChange(e) {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  }

  function handleSubmit(e, formData) {
    e.preventDefault();
    handleNamesData(formData);
    setFormData({ ...formData, fullName: "", email: "" });
  }

  return (
    <div className={styles.upload}>
      <div className={styles.welcome__header}>
        <UserDropdown />

        <div>
          <h2>Hi, Iyanu</h2>
          <h2>Welcome back!</h2>
        </div>
      </div>

      <div className={styles.upload__process}>
        <div className={styles.texts}>
          <h2>Add Names Below</h2>
          <p>Fill the form to add to list of names</p>
        </div>

        <div className={styles.container}>
          <form
            onSubmit={(e) => {
              handleSubmit(e, formData);
            }}
            className={styles.upload__form}>
            <div>
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                placeholder="John Doe"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="example@gmail.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" />
            </div>

            <div>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" />
            </div>

            <div>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" />
            </div>
            <button type="submit" className={styles.upload_btn}>
              Add Entry
            </button>
          </form>

          <div className={styles.names__container}>
            <h2 className={styles.names__header}>List of Entries</h2>

            <div className={styles.entries}>
              {namesData.map((item, index) => {
                return (
                  <div key={item.id} className={styles.entry}>
                    <div className={styles.entry__details}>
                      <div className={styles.visible__entry}>
                        <p> {item.fullName}</p>

                        <span
                          onClick={() => {
                            setVisibleEntry(!visibleEntry);
                            setVisibleIndex(index);
                          }}>
                          icon
                        </span>
                      </div>

                      <div
                        className={`${styles.hidden__entry} ${
                          visibleEntry && index === visibleIndex
                            ? styles.visible
                            : ""
                        } `}>
                        <p>Email: {item.email}</p>
                      </div>
                    </div>

                    <span
                      className={styles.delete_btn}
                      onClick={() => {
                        removeEntry(index);
                      }}>
                      delete
                    </span>
                  </div>
                );
              })}
            </div>

            <button
              type="submit"
              disabled={namesData.length === 0}
              className={styles.upload_btn}>
              <img src={UploadIcon} alt="Upload" />
              Upload Names
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upload;

Upload.propTypes = {
  handleNamesData: PropTypes.func,
  namesData: PropTypes.array,
  removeEntry: PropTypes.func
};
