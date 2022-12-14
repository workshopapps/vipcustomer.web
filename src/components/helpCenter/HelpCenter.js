import React from "react";
import { Link } from "react-router-dom";
import styles from "./HelpCenter.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { RiFileList2Line } from "react-icons/ri";
import { TiMessages } from "react-icons/ti";
import { FaThumbsUp } from "react-icons/fa";

import { Footer, Navbar } from "components/general";

const HelpCenter = () => {
  const [ReachUs, setReachUs] = React.useState(true);
  const [MessageReceived, setMessageReceived] = React.useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    toggleForm();
    // rerenderForm();
  }
  function toggleForm() {
    setReachUs((prevState) => !prevState);
    setMessageReceived((prevState) => !prevState);
  }
  // function rerenderForm() {
  //   setTimeout(toggleForm, 4000);
  // }
  return (
    <>
      <Navbar />
      <div className={styles.help_center}>
        <div>
          <h3 className={styles.helpcenter_headings}>
            We are here to help you.
          </h3>
          <p className={styles.helpcenter_paragraphs}>
            Find advice and answers from our support team fast or get in touch.
          </p>
        </div>
        <div className={styles.helpcenter_search_container}>
          <div className={styles.helpcenter_search_div}>
            <AiOutlineSearch className={styles.helpcenter_searchIcon} />
            <input
              type="text"
              placeholder="Search for answers..."
              className={styles.helpcenter_inputs}
            />
          </div>
        </div>
        <div className={styles.helpcenter_category_div}>
          <h5 className={styles.helpcenter_headings}>Browse the Categories</h5>
          <div className={styles.helpcenter_cards}>
            <Link to="/faq">
              <div className={styles.helpcenter_card}>
                <TiMessages className={styles.helpcenter_icons} />
                <h6>FAQs</h6>
                <p>
                  Get answers to questions frequently <br></br>asked by users.
                </p>
              </div>
            </Link>
            <Link to="/docs">
              <div className={styles.helpcenter_card}>
                <RiFileList2Line className={styles.helpcenter_icons} />
                <h6>API Documentation</h6>
                <p>
                  Detailed instructions on how to effectively use and integrate
                  our API.
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className={styles.helpcenter_question_div}>
          <h5 className={styles.helpcenter_headings}>
            Didn’t find an answer to your questions?
          </h5>
          <p className={styles.helpcenter_paragraphs}>
            Get in touch with us for details on additional support and services
          </p>

          {ReachUs && (
            <form onSubmit={handleSubmit} className={styles.helpcenter_forms}>
              <div className={styles.helpcenter_forms_div}>
                <input type="text" placeholder="Full Name" required />
                <input type="email" placeholder="Email Address" required />
              </div>
              <textarea
                name="question"
                id="questions"
                cols="30"
                rows="10"
                placeholder="Enter your question here..."
                required></textarea>
              <input
                type="submit"
                value={"Get in Touch"}
                className={styles.helpcenter_submit}
              />
            </form>
          )}
          {MessageReceived && (
            <p className={styles.message_received}>
              Our team will reach out to you urgently. <FaThumbsUp />
            </p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default HelpCenter;
