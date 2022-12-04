import React from "react";
import PropTypes from "prop-types";

import UserDropdown from "../userdropdown";
import ProgressBar from "../progressbar";

import styles from "./almost.module.css";
import CancelIcon from "./assets/CancelIcon.svg";
import SuccessIcon from "./assets/SuccessIcon.svg";
import WaitingIcon from "./assets/WaitingIcon.svg";

export default function Almost(props) {
  const { step, onNext } = props;

  function handleSetFilter(e) {
    e.preventDefault();
    onNext();
  }

  return (
    <div className={styles.almost}>
      <div className={styles.almost__header}>
        <UserDropdown />

        <div>
          {step === 1 ? (
            <h2>Almost there...</h2>
          ) : step === 2 ? (
            <h2>All Done!</h2>
          ) : null}
        </div>
      </div>

      <div className={styles.upload__process}>
        <ProgressBar step={step} />

        <div className={styles.upload__info}>
          {step === 1 ? (
            <div className={styles.waiting}>
              <div className={styles.info_header}>
                <div>
                  <img src={WaitingIcon} alt="icon" /> <span>Info</span>
                </div>

                <img src={CancelIcon} alt="icon" />
              </div>
              <p>
                Kindly wait while your file is being uploaded and processed,
                this may take up to 5 mins...
              </p>
            </div>
          ) : step === 2 ? (
            <div className={styles.success_container}>
              <div className={styles.success}>
                <div className={styles.info_header}>
                  <div>
                    <img src={SuccessIcon} alt="icon" /> <span>Success</span>
                  </div>

                  <img src={CancelIcon} alt="icon" />
                </div>
                <p>file upload successful</p>
              </div>

              <button onClick={handleSetFilter}>Set filter</button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

Almost.propTypes = {
  step: PropTypes.number,
  onNext: PropTypes.func
};
