import React from "react";
import { ButtonWrapper } from "./button.styled";
import PropTypes from "prop-types";

const Button = ({ style, text, onClick }) => {
  return (
    <ButtonWrapper style={style} onClick={onClick}>
      {text}
    </ButtonWrapper>
  );
};

export default Button;
Button.propTypes = {
  style: PropTypes.object,
  text: PropTypes.string,
  onClick: PropTypes.func
};
