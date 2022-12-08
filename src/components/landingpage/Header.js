import React from "react";
import { Link } from "react-router-dom";

import {
  HeaderContentWrapper,
  HeaderWrapper,
  Heading,
  Span,
  SubHeading,
  HeaderButton
} from "./header.styled";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContentWrapper>
        <SubHeading>
          Let’s Identify your <Span>VIP’s</Span> and convert them to High paying{" "}
          <Span>Customers</Span>
        </SubHeading>
        <Heading>
          Star Finder identifies very important personas that visit your website
          and converts them to high paying leads.
        </Heading>
        <HeaderButton>
          <Link to="/demo">Try Our Demo</Link>
        </HeaderButton>
      </HeaderContentWrapper>
    </HeaderWrapper>
  );
};
export default Header;
