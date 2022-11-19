import React from "react";
import image1 from "../about/main.png";
import styles from "./About.module.css";

const Aboutmain = () => {
  return (
    <div>
      <div className={styles.mainCont}>
        <h2>Our Benefits</h2>
        <div>
          <div>
            <h2>Simple software that identifies VIPs</h2>
            <p>
              Our API helps users identify the highest ranking customers that
              visit their website. It is easy to use and understand
            </p>
          </div>
          <div>
            <h2>Strict privacy policy</h2>
            <p>
              Our rigorous privacy policy prevents us from disclosing consumer
              information to any outside parties. Therefore you can rest easy,
              knowing that all personal data is secure.
            </p>
          </div>
          <div>
            <h2>Helping business generate sales</h2>
            <p>
              We give you all the information you need to better serve your
              customers the type of special offers and services they require
            </p>
          </div>
          <div>
            <img src={image1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutmain;
