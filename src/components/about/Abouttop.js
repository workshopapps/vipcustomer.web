import React from "react";
import styles from "./About.module.css";

const Abouttop = () => {
  return (
    <div className={styles.title}>
      <div className={styles.container}>
        <h1 className={styles.h1}>About Us</h1>
        <p className={styles.hi}>
          Axe API is a reliable service that can be used for VIP Customer
          identification. We help you understand your website Traffic and make
          sense of who is visiting your page. Wherther it is to improve your
          sales decisions, or for targeted marketing campaigns. Our API will
          help you filter through your users profiles to alert you when you have
          special guests visiting your website.
        </p>
      </div>
    </div>
  );
};
export default Abouttop;
