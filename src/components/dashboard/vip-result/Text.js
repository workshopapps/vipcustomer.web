import React from "react";
import PropTypes from "prop-types";
import { TextWrapper, HeaderTextWrapper } from "./text.styled";

// app
export const Text = ({ text }) => {
  return <TextWrapper>{text}</TextWrapper>;
};

Text.propTypes = {
  text: PropTypes.string.isRequired
};

export const HeaderText = ({ text }) => {
  return <HeaderTextWrapper>{text}</HeaderTextWrapper>;
};

HeaderText.propTypes = {
  text: PropTypes.string.isRequired
};
