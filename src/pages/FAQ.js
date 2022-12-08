import React from "react";
import styles from "../components/faq/asset/faq.module.css";
import Add from "../components/faq/asset/add.svg";
import Remove from "../components/faq/asset/remove.svg";
import Questions from "../components/faq/Questions";
import { useState } from "react";
import { Navbar, Footer } from "components/general/";

const data = [
  {
    id: 1,
    text: "What is Star Finder?",
    p: "Star Finder analyzes visiting user profiles on a Website/Application to identify & categorize VIP Customers\nThe API searches various social media platforms and web databases to see if the user meets your VIP Guest criteria."
  },
  {
    id: 2,
    text: "What is the purpose of VIP API?",
    p: "The tool accurately verifies and records VIP visits, generates statistical reports, and keeps historical data, all of which can help you integrate a VIP loyalty program/rewards system or partnerships for publicity."
  },
  {
    id: 3,
    text: "Who is it for?",
    p: "Businesses that want to categorize their users to optimize sales and marketing initiatives and enhance the customer experience."
  },
  {
    id: 4,
    text: "How much does it cost?",
    p: "Star Finder is currently in Beta mode; as a result, only 10% of the total cost will be charged."
  }
];

const FAQ = () => {
  const icon = {
    opened: Remove,
    closed: Add
  };

  const [question_list, setQuestion_list] = useState(data);

  function filter_(input) {
    const query = input.target.value;
    let _newList = data;
    const newList = _newList.filter((item) => {
      if (item.text.toLowerCase().includes(query)) {
        return item;
      }
    });

    setQuestion_list(newList);
  }

  const [id_, setID] = useState(null);

  function opened_func(id) {
    if (id === id_) {
      setID(null);
    } else {
      setID(id);
    }
  }

  return (
    <>
      <Navbar />
      <div className={styles.faq}>
        <div className={styles.top}>
          <h1>Frequently Asked Question</h1> <h1>FAQ</h1>
          <input type="text" placeholder="Search results" onChange={filter_} />
        </div>
        <div className={styles.main}>
          {question_list.map((item) => (
            <Questions
              key={item.id}
              id={item.id}
              // styles={id_ === item.id ? styles.opened : styles.closed}
              styles={id_ === item.id ? styles.opened : styles.closed}
              text={item.text}
              icon={id_ === item.id ? icon.opened : icon.closed}
              p={item.p}
              // p_h={p_h}
              alt={"icon"}
              onChange_={opened_func}
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default FAQ;
