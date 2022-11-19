import React from "react";
import { FcGoogle } from "react-icons/fc";
import { SlSocialInstagram, SlSocialTwitter } from "react-icons/sl";
import { ReactComponent as Logo } from "../../general/assets/logo.svg";
import Checkbox from "./Checkbox";
import Input from "../Input";
import {
  Container,
  Left,
  LoginText,
  LinkStyles,
  Socials,
  Right,
  GoogleSignUp,
  OrDemarcation,
  Form,
  Names,
  SignUpBtn,
  LogoWrapper
} from "./signup.styled";

export default function index() {
  return (
    <Container>
      <Left>
        <div>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
          <h3>Let&apos;s help you, identify VIPs</h3>
          <LoginText>
            Already have an account? <LinkStyles to="/login">Log in</LinkStyles>
          </LoginText>
          <Socials>
            <SlSocialInstagram />
            <SlSocialTwitter />
          </Socials>
        </div>
      </Left>
      <Right>
        <div>
          <GoogleSignUp>
            <span>
              <FcGoogle />
            </span>
            Sign up with Google
          </GoogleSignUp>
          <OrDemarcation>
            <span>or</span>
          </OrDemarcation>
          <Form>
            <Names>
              <Input label="First Name" id="first-name" />
              <Input label="Last Name" id="last-name" />
            </Names>
            <Input label="Email" id="email" type="email" />
            <Input label="Password" id="password" type="password" />
            <Input label="Confirm Password" id="c-password" type="password" />
            <div style={{ marginTop: "0.7rem" }}>
              <Checkbox id="check">
                I agree to the <LinkStyles>Terms of Service</LinkStyles> and{" "}
                <LinkStyles>Privacy Notice</LinkStyles>
              </Checkbox>
            </div>
            <div style={{ marginTop: "1rem" }}>
              <SignUpBtn type="submit" onClick={(e) => e.preventDefault()}>
                Sign up
              </SignUpBtn>
            </div>
          </Form>
        </div>
      </Right>
    </Container>
  );
}
