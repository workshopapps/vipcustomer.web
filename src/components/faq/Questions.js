import React from "react";
import PropTypes from "prop-types";
import quest from "./asset/faq.module.css";

const Questions = ({ styles, text, icon, alt, p, onChange_, id }) => {
  // const x = document.querySelector(`.${quest.ques_p}`);
  // const [height, setHeight] = useState(0);
  // const openedCssClass = document.querySelector(`.${quest.ques_p}`);

  // function p_h(item) {
  //   console.log(item);
  //   return item.offsetHeight;
  // }
  function clicked() {
    // x.forEach((e) => {
    //   let w = p_h(e);
    //   setHeight(w);
    //   console.log(height);
    // });
    // console.log(height);
    // openedCssClass.style.height = `${height}px`;
    onChange_(id);
    // console.log(openedCssClass);
    // setHeight();
  }
  // console.log(height);

  // console.log(`.${quest.ques_p}`);
  return (
    <div className={styles}>
      <div>
        <h3 onClick={clicked}>{text}</h3>
        <figure onClick={clicked}>
          <img src={`${icon}`} alt={alt} />
        </figure>
      </div>
      <p className={`${quest.ques_p} ${styles} `}>{p}</p>
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
