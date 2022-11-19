import React from "react";
import { Link } from "react-router-dom";
import LOGO from "../assests/icons/logo.svg";
import PropTypes from "prop-types";

import {
  FooterContainer,
  FooterWrapper,
  FooterHeader,
  FooterText,
  SectionWrapper,
  LogoWrapper
} from "./footer.styled";

const Footer = ({ mobile, tablet }) => {
  return (
    <FooterContainer>
      <FooterWrapper tablet={tablet}>
        <SectionWrapper logo>
          <Link>
            {" "}
            <LogoWrapper tablet={tablet} mobile={mobile}>
              <img src={LOGO} alt="axeapi logo" />
            </LogoWrapper>
          </Link>
        </SectionWrapper>
        <div className="wrapper">
          <SectionWrapper>
            <FooterHeader tablet={tablet} mobile={mobile}>
              <Link>Features</Link>
            </FooterHeader>
            <FooterText tablet={tablet} mobile={mobile}>
              <Link>AXE API Feature</Link>
            </FooterText>
            <FooterText tablet={tablet} mobile={mobile}>
              <Link>How it works</Link>
            </FooterText>
          </SectionWrapper>
          <SectionWrapper>
            <FooterHeader tablet={tablet} mobile={mobile}>
              <Link>Help & Support</Link>
            </FooterHeader>
            <FooterText tablet={tablet} mobile={mobile}>
              <Link>FAQ</Link>
            </FooterText>
            <FooterText tablet={tablet} mobile={mobile}>
              <Link>Help center</Link>
            </FooterText>
          </SectionWrapper>
          <SectionWrapper>
            <FooterHeader tablet={tablet} mobile={mobile}>
              <Link>Terms &amp; condition</Link>
            </FooterHeader>
            <FooterText tablet={tablet} mobile={mobile}>
              <Link>Privacy</Link>
            </FooterText>
          </SectionWrapper>
          <SectionWrapper>
            <FooterHeader tablet={tablet} mobile={mobile}>
              <Link>Company</Link>
            </FooterHeader>
            <FooterText tablet={tablet} mobile={mobile}>
              <Link>About Us</Link>
            </FooterText>
            <FooterText tablet={tablet} mobile={mobile}>
              <Link>Meet Our Team</Link>
            </FooterText>
            <FooterText tablet={tablet} mobile={mobile}>
              <Link>Vision and Mission</Link>
            </FooterText>
          </SectionWrapper>
        </div>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;

Footer.propTypes = {
  mobile: PropTypes.bool.isRequired,
  tablet: PropTypes.bool.isRequired
};
