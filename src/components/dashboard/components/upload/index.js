import React, { useState, useEffect } from "react";
import { MdDelete, MdExpandLess } from "react-icons/md";

import PropTypes from "prop-types";

import styles from "./upload.module.css";
import UploadIcon from "./assets/UploadIcon.svg";
import UserDropdown from "../userdropdown";

function Upload(props) {
  const { handleNamesData, namesData, removeEntry, handleUpload } = props;

  //states
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    occupation: "",
    age: 0,
    email: ""
  });
  const [formErrors, setFormErrors] = useState({});
  const [visibleEntry, setVisibleEntry] = useState(false);
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    setFormErrors(validateForm(formData));
  }, [formData]);

  //Function for form validation
  function validateForm(values) {
    const errors = {};
    const regex = /\S+@\S+\.\S+/;

    if (values.name.length <= 2) {
      errors.name = "Please enter a name";
    }

    if (values.email.length > 0) {
      if (!regex.test(values.email)) {
        errors.email = "Please enter a valid email";
      }
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
    setFormData({
      ...formData,
      name: "",
      gender: "",
      occupation: "",
      age: 0,
      email: ""
    });
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
        <div className={styles.upload__process_header}>
          <h2>Add Entries Below</h2>
          <p>Fill the form to add to entries</p>
        </div>

        <div className={styles.container}>
          <form
            onSubmit={(e) => {
              handleSubmit(e, formData);
            }}
            className={styles.upload__form}>
            {/* name */}
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
              />
              {formErrors.name ? (
                <p className={styles.error_message}>{formErrors.name}</p>
              ) : null}
            </div>

            {/* gender */}
            <div>
              <label htmlFor="gender">Gender</label>
              <input
                type="text"
                id="gender"
                placeholder="Male/Female"
                value={formData.gender}
                onChange={handleChange}
              />
              {formErrors.gender && (
                <p className={styles.error_message}>{formErrors.gender}</p>
              )}
            </div>

            {/* occupation */}
            <div>
              <label htmlFor="occupation">Occupation</label>
              <input
                type="text"
                id="occupation"
                placeholder="Student"
                value={formData.occupation}
                onChange={handleChange}
              />
            </div>

            {/* age */}
            <div>
              <label htmlFor="age">Age</label>
              <input
                type="number"
                id="age"
                placeholder="20"
                value={formData.age}
                onChange={handleChange}
              />
            </div>

            {/* email */}
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="example@gmail.com"
                value={formData.email}
                onChange={handleChange}
              />
              {formErrors.email ? (
                <p className={styles.error_message}>{formErrors.email}</p>
              ) : null}
            </div>

            <button
              type="submit"
              disabled={Object.keys(formErrors).length !== 0}
              className={styles.add_entry__btn}>
              Add Entry
            </button>
          </form>

          <div className={styles.entries__list}>
            <h2 className={styles.names__header}>List of Entries</h2>

            <div className={styles.entries}>
              {namesData.map((item, index) => {
                return (
                  <div key={item.id} className={styles.entry}>
                    <div className={styles.entry__details}>
                      <div className={styles.visible__entry}>
                        <p> {item.name}</p>

                        <span
                          onClick={() => {
                            setVisibleEntry(!visibleEntry);
                            setVisibleIndex(index);
                          }}>
                          <MdExpandLess
                            className={`${
                              visibleEntry && index === visibleIndex
                                ? styles.rotate_icon
                                : ""
                            }`}
                          />
                        </span>
                      </div>

                      <div
                        className={`${styles.hidden__entry} ${
                          visibleEntry && index === visibleIndex
                            ? styles.visible
                            : ""
                        } `}>
                        <p>Gender: {item.gender}</p>
                        <p>Occupation: {item.occupation}</p>
                        <p>Age: {item.age}</p>
                        <p>Email: {item.email}</p>
                      </div>
                    </div>

                    <span
                      className={styles.delete_btn}
                      onClick={() => {
                        removeEntry(index);
                      }}>
                      <MdDelete />
                    </span>
                  </div>
                );
              })}
            </div>

            <button
              disabled={namesData.length === 0}
              className={styles.upload_btn}
              onClick={(e) => {
                e.preventDefault();
                handleUpload();
              }}>
              <img src={UploadIcon} alt="Upload" />
              Upload Entries
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
  handleUpload: PropTypes.func,
  namesData: PropTypes.array,
  removeEntry: PropTypes.func
};
