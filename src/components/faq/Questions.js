import React from "react";
import PropTypes from "prop-types";

const Questions = ({ styles, text, icon, alt, p, onChange_, id }) => {
  function clicked() {
    onChange_(id);
  }

  return (
    <div className={styles.closed}>
      <div>
        <h3 onClick={clicked}>{text}</h3>
        <img onClick={clicked} src={`${icon}`} alt={alt} />
      </div>
      <p className={`ques_p ${styles} `}>{p}</p>
    </div>
  );
};

Questions.propTypes = {
  styles: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired, /// I didn't know what proptype I should use here
  alt: PropTypes.string,
  p: PropTypes.string,
  onChange_: PropTypes.func,
  id: PropTypes.number.isRequired
};

export default Questions;
