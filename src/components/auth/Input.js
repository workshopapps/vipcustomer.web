import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

function Input({ label, id, errorMessage, isError, ...rest }) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <InputStyles name={id} {...rest} />
      {isError && <Error>{errorMessage}</Error>}
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.any.isRequired,
  errorMessage: PropTypes.string,
  isError: PropTypes.bool
};

export default Input;

const Label = styled.label`
  font-size: 1.4rem;
  font-weight: 400;
  color: black;
`;

const InputStyles = styled.input`
  display: block;
  margin-top: 0.7rem;
  border: 1px solid #adb1bf;
  border-radius: 8px;
  padding: 1rem 1.6rem;
  cursor: text;
  width: 100%;
  color: black;
  font-size: 1.4rem;

  &:focus {
    border: 1px solid #091540;
  }

  &::placeholder {
    color: #adb1bf;
  }
`;

const Error = styled.p`
  color: red;
  font-size: 1.4rem;
  color: #ff414e;
  font-weight: 400;
`;
