import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { BsFillCheckCircleFill } from "react-icons/bs";
import PropTypes from "prop-types";
export default function Modal({ setModal, modalForm, setOpacity }) {
  const [ModalForm, setModalForm] = React.useState("");

  const success = (
    <StyledDiv>
      <StyledCheck />
      <p>Password Reset Successful</p>
      <StyledLink to="/login">Back to login</StyledLink>
    </StyledDiv>
  );
  const failure = (
    <StyledDiv>
      <StyledTimes />
      <p>Password Reset Failed</p>
      <StyledTryAgain
        onClick={() => {
          setModal(false);
          setOpacity(1);
        }}
        to="/password-recovery/change">
        Try again
      </StyledTryAgain>
    </StyledDiv>
  );

  return (
    <StyledModal>{modalForm === "success" ? success : failure}</StyledModal>
  );
}
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  justify-content: center;
  align-items: center;
  margin: auto;
  //   width: 500px;
  text-align: centre;

  p {
    font-size: 20px;
    margin-bottom: 30px;
    padding: 10px 0;
  }
`;
const StyledModal = styled.div`
  position: absolute;
  width: 80%;
  transform: translate(-50%, 0);
  background-color: #091540;
  top: 25%;
  left: 50%;
  padding: 50px 0;
`;

const StyledCheck = styled(BsFillCheckCircleFill)`
  //   color: green;
  background: green;
  height: 150px;
  width: 150px;
  margin: 0 auto;
  align-self: center;
  border-radius: 100%;
`;
const StyledLink = styled(Link)`
  display: inline;
  border: 1px solid white;
  border-radius: 30px;
  padding: 5px 10px;

  :hover {
    color: green;
    border: 1px solid green;
  }
`;
const StyledTryAgain = styled(Link)`
  display: inline;
  border: 1px solid white;
  border-radius: 30px;
  padding: 5px 10px;

  :hover {
    color: red;
    border: 1px solid red;
  }
`;
const StyledTimes = styled(FaTimes)`
  color: Red;
  height: 150px;
  width: 150px;
  margin: 0 auto;
  align-self: center;
`;

Modal.propTypes = {
  setModal: PropTypes.func,
  modalForm: PropTypes.string,
  setOpacity: PropTypes.func
};
