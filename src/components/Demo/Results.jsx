import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export default function Results({
  name,
  gender,
  occupation,
  age,
  isVip,
  vipScore
}) {
  return (
    <Container>
      <div className="name">{name}</div>
      <div className="others">
        <div>
          Gender: <span>{gender}</span>
        </div>
        <div>
          occupation: <span>{occupation}</span>
        </div>
        <div>
          age: <span>{age}</span>
        </div>
        <div>
          vip: <span>{isVip ? "yes" : "no"}</span>
        </div>
        <div>
          vipScore: <span>{vipScore || "not available"}</span>
        </div>
      </div>
    </Container>
  );
}

Results.propTypes = {
  name: PropTypes.string,
  gender: PropTypes.string,
  occupation: PropTypes.string,
  age: PropTypes.string,
  isVip: PropTypes.string,
  vipScore: PropTypes.string
};

const Container = styled.div`
  margin-top: 7.2rem;
  padding-left: 13.8rem;

  .name {
    font-weight: 700;
    font-size: 3.2rem;
    color: #121212;
  }

  .others {
    margin-top: 6.8rem;
    margin-left: 4.2rem;
    display: flex;
    font-weight: 700;
    flex-direction: column;
    gap: 5.2rem;

    span {
      color: #f05d23;
    }
  }
`;
