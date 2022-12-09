import React from "react";
import styles from "./values.module.css";
import listIcon from "../assets/listIcon.svg";
import ValuesImg from "../assets/values.webp";

const Values = () => {
  function handleSubmit(e) {
    e.preventDefault();
    setEmail("");
  }

  const [email, setEmail] = React.useState("");
  function handleChange(e) {
    setEmail(e.target.value);
  }
  return (
    <div className={styles.values}>
      <div className={styles.container}>
        <img className={styles.img} src={ValuesImg} />
        <div>
          {" "}
          <h2 className={styles.h2}>Our Core Values</h2>
          <p className={styles.p}>
            We Strive daily to provide our users with :
          </p>
          <ul className={styles.ul}>
            <li>
              <img src={listIcon} />
              <span>Speed</span>
            </li>
            <li>
              <img src={listIcon} />
              <span>Reliability</span>
            </li>
            <li>
              <img src={listIcon} />
              <span>Privacy</span>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.connect}>
        <h2>Get Connected with us</h2>
        <form onSubmit={handleSubmit}>
          <input
            className={styles.email}
            type="email"
            value={email}
            placeholder="Email Address"
            onChange={handleChange}></input>

          <button className={styles.button}>Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default Values;
