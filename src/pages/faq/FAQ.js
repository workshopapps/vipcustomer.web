import React, { useState } from "react";
import styles from "./faq.module.css";
import Add from "./asset/add.svg";
import Remove from "./asset/remove.svg";
import Questions from "../../components/faq/Questions";

const FAQ = () => {
  const icon = {
    opened: Remove,
    closed: Add
  };

  const [question_list, setQuestion_list] = useState([
    {
      id: 1,
      text: "What is Axe VIP Customer API?",
      p: "Making sure your account is safe is our biggest priority. We're committed to protecting your account with the highest standards of security available. We use state-of-the-art data encryption and two-factor authentication (2FA) protection when handling your financial information."
    },
    {
      id: 2,
      text: "What is Axe VIP Customer API?",
      p: "Making sure your account is safe is our biggest priority. We're committed to protecting your account with the highest standards of security available. We use state-of-the-art data encryption and two-factor authentication (2FA) protection when handling your financial information."
    },
    {
      id: 3,
      text: "What is Axe VIP Customer API?",
      p: "Making sure your account is safe is our biggest priority. We're committed to protecting your account with the highest standards of security available. We use state-of-the-art data encryption and two-factor authentication (2FA) protection when handling your financial information."
    },
    {
      id: 4,
      text: "What is Axe VIP Customer API?",
      p: "Making sure your account is safe is our biggest priority. We're committed to protecting your account with the highest standards of security available. We use state-of-the-art data encryption and two-factor authentication (2FA) protection when handling your financial information."
    },
    {
      id: 5,
      text: "What is Axe VIP Customer API?",
      p: "Making sure your account is safe is our biggest priority. We're committed to protecting your account with the highest standards of security available. We use state-of-the-art data encryption and two-factor authentication (2FA) protection when handling your financial information."
    }
  ]);

  // const [user_input, setUser_input] = useState("");

  // function filter_(input) {
  // const query = input.target.value;
  // let newList = [...question_list];
  // newList = newList.filter((item) => {

  //   // return newList.text.includes(query);
  // });
  // setQuestion_list(newList);
  // }

  // function onInput(e) {
  //   setUser_input(e.target.input);
  //   console.log(user_input);
  // }

  // onChange = { filter_ };

  return (
    <div className={styles.faq}>
      <div className={styles.top}>
        <h1>Frequently Asked Question</h1> <h1>FAQ</h1>
        <input type="text" placeholder="Search results" />
      </div>
      <div className={styles.main}>
        {question_list.map((item) => (
          <Questions
            key={item.id}
            // user_data={user_input}
            styles={styles}
            text={item.text}
            icon={icon}
            p={item.p}
            alt={"icon"}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
