import React from "react";
import styles from "./landingvideo.module.css";

const LandingVideo = () => {
  return (
    <div className={styles.demo}>
      <div className={styles.wrapper}>
        <div>
          <h4>Get a free demo of Star Finder VIP recognition software</h4>
          <p>
            Join the leading software in API recognition with the click of a
            button
          </p>
        </div>
        <button>Watch live video</button>
      </div>
    </div>
  );
};

export default LandingVideo;
