import React from "react";
import PropTypes from "prop-types";

import { Container, ContentWrapper, Title, White } from "./shell.styled";

export default function Shell({ title, children, opacity }) {
  return (
    <Container style={{ opacity: opacity }}>
      <div>
        <Title>{title}</Title>
        <White>
          <ContentWrapper>
            <div>{children}</div>
          </ContentWrapper>
        </White>
      </div>
    </Container>
  );
}

Shell.propTypes = {
  title: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  children: PropTypes.node,
  onBtnClick: PropTypes.func,
  opacity: PropTypes.number
};
