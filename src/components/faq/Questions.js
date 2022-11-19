import React, { useState } from "react";
import PropTypes from "prop-types";

const Questions = ({ styles, text, icon, alt, p }) => {
  const [opened, setOpened] = useState(false);

  function clicked() {
    if (opened === true) {
      console.log("clicked");
      setOpened(false);
    } else {
      console.log("clicked");
      setOpened(true);
    }
  }
  return (
    <div className={styles.closed}>
      <div>
        <h3 onClick={clicked}>{text}</h3>
        <img src={`${opened ? icon.opened : icon.closed}`} alt={alt} />
      </div>
      <p
        className={`${styles.ques_p} ${
          opened ? styles.opened : styles.closed
        } `}>
        {p}
      </p>
    </div>
  );
};

Questions.prototype = {
  styles: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired, /// I didn't know what proptype I should use here
  alt: PropTypes.string,
  p: PropTypes.string
};

export default Questions;
