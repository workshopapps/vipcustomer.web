import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  BodyWrapper,
  HeaderWrapper,
  MainWrapper,
  FormWrapper,
  AnchorWrapper,
  BottomWrapper
} from "./password-recovery.styled";

const PasswordRecovery = () => {
  return (
    <Container>
      <BodyWrapper>
        <HeaderWrapper>
          <h1>Password Recovery</h1>
        </HeaderWrapper>
        <MainWrapper>
          <h4>Forgot your password?</h4>
          <p>
            You can easily request your password reset below, a password reset
            link would be sent to the registered email address, kindly ensure it
            is correct.
          </p>
          <FormWrapper>
            <label>Email</label>
            <input type="email" placeholder="JohnDoe@gmail.com" />
            <AnchorWrapper>
              <Link to={"/"}>Next</Link>
            </AnchorWrapper>
          </FormWrapper>

          <BottomWrapper>
            <small>
              Still in need of assistance? kindly visit our Contact us page
            </small>
          </BottomWrapper>
        </MainWrapper>
      </BodyWrapper>
    </Container>
  );
};

export default PasswordRecovery;
