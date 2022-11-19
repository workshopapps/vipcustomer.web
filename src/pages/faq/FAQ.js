import React from "react";
import styles from "./faq.module.css";
import Add from "./asset/add.svg";
import Remove from "./asset/remove.svg";
import Questions from "../../components/faq/Questions";

const FAQ = () => {
  console.log(window.innerWidth);
  const icon = {
    opened: Remove,
    closed: Add
  };

  return (
    <div className={styles.faq}>
      <div className={styles.top}>
        <h1>Frequently Asked Question</h1> <h1>FAQ</h1>
        <input type="text" placeholder="Search results" />
      </div>
      <div className={styles.main}>
        <Questions
          styles={styles}
          text={"What is Axe VIP Customer API?"}
          icon={icon}
          p={
            "Making sure your account is safe is our biggest priority. We're committed to protecting your account with the highest standards of security available. We use state-of-the-art data encryption and two-factor authentication (2FA) protection when handling your financial information."
          }
          alt={"icon"}
        />
        <Questions
          styles={styles}
          text={"How secure are your payment"}
          icon={icon}
          p={
            "Making sure your account is safe is our biggest priority. We're committed to protecting your account with the highest standards of security available. We use state-of-the-art data encryption and two-factor authentication (2FA) protection when handling your financial information."
          }
          alt={"icon"}
        />
        <Questions
          styles={styles}
          text={"How to integrate Axe VIP customer API?"}
          icon={icon}
          alt={"icon"}
          p={
            "Making sure your account is safe is our biggest priority. We're committed to protecting your account with the highest standards of security available. We use state-of-the-art data encryption and two-factor authentication (2FA) protection when handling your financial information."
          }
        />
        <Questions
          styles={styles}
          text={"What is VIP Customer API?"}
          icon={icon}
          alt={"icon"}
          p={
            "Making sure your account is safe is our biggest priority. We're committed to protecting your account with the highest standards of security available. We use state-of-the-art data encryption and two-factor authentication (2FA) protection when handling your financial information."
          }
        />
        <Questions
          styles={styles}
          text={"Security and Privacy"}
          icon={icon}
          alt={"icon"}
          p={
            "Making sure your account is safe is our biggest priority. We're committed to protecting your account with the highest standards of security available. We use state-of-the-art data encryption and two-factor authentication (2FA) protection when handling your financial information"
          }
        />
      </div>
    </div>
  );
};

export default FAQ;
