import React from "react";
import styled from "styled-components";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export default function BackBtn() {
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate("/")}>
      <BiArrowBack />
    </Container>
  );
}

const Container = styled.div`
  cursor: pointer;
  background-color: white;
  color: #091540;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: grid;
  place-items: center;
  position: absolute;
  top: 2rem;
  left: 2rem;

  @media only screen and (max-width: 768px) {
    top: 1rem;
  }
`;
