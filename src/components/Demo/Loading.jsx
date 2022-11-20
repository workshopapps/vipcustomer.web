import React from "react";
import styled from "styled-components";
import LoadingImg from "./assets/pana.png";
import PropTypes from "prop-types";

export default function Loading({ text }) {
  return (
    <Container>
      <img src={LoadingImg} alt="loading" />
      <p>{text}</p>
    </Container>
  );
}

Loading.propTypes = {
  text: PropTypes.string.isRequired
};

const Container = styled.div`
  display: grid;
  place-items: center;
  padding: 14.7rem 0 22.9rem;

  p {
    margin-top: 6.4rem;
    font-weight: 500;
    font-size: 28px;
    color: #121212;
  }
`;
