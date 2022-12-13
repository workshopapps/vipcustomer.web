import React from "react";
import styles from "./values.module.css";
import listIcon from "../assets/listIcon.svg";
import ValuesImg from "../assets/values.webp";
import { FaThumbsUp } from "react-icons/fa";

const Values = () => {
  const [email, setEmail] = React.useState("");
  const [subsriptionForm, setSubscriptionForm] = React.useState(true);
  const [subscriptionPrompt, setSubscriptionPrompt] = React.useState(false);

  function toggleForm() {
    setSubscriptionForm((prevState) => !prevState);
    setSubscriptionPrompt((prevState) => !prevState);
  }
  // function rerenderForm() {
  //   setTimeout(toggleForm, 3000);
  // }
  function handleSubmit(e) {
    e.preventDefault();
    toggleForm();
    // rerenderForm();
    setEmail("");
  }
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
            We strive daily to provide our users with :
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
        {subsriptionForm && (
          <>
            <h2>Get connected with us</h2>

            <form onSubmit={handleSubmit}>
              <input
                className={styles.email}
                type="email"
                required
                value={email}
                placeholder="Email address"
                onChange={handleChange}></input>

              <button className={styles.button}>Subscribe</button>
            </form>
          </>
        )}

        {subscriptionPrompt && (
          <p className={styles.subscriptionPrompt}>
            Subscribed successfully. <FaThumbsUp />
          </p>
        )}
      </div>
    </div>
  );
};

export default Values;
