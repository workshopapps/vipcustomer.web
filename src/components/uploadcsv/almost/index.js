import React from "react";
import PropTypes from "prop-types";
import ProgressBar from "components/progressbar";

import styles from "./almost.module.css";
import dummmy_dp from "../assets/dummy_dp.png";

export default function Almost(props) {
  const { step } = props;
  return (
    <div className={styles.almost}>
      <div className={styles.header}>
        <img src={dummmy_dp} alt="user" />

        <div>
          <h2>Almost</h2>
        </div>
      </div>

      <div className={styles.upload__process}>
        <ProgressBar step={step} />

        <div className={styles.upload__info}>
          <div className="waiting">
            <div>
              <img src="" alt="" /> <span>Info</span>
            </div>

            <span>
              <img src="" alt="" />
            </span>
          </div>

          <div className="sucess"></div>
        </div>
      </div>
    </div>
  );
}

Almost.propTypes = {
  step: PropTypes.number
};
