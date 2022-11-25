import React from "react";
import { Link } from "react-router-dom";
import { CtaHeader, CtaSubtext, LandingCtaWraper } from "./landingcta.styled";
import Button from "../general/Button";
import { AuthStore } from "store/contexts/AuthContext";

const LandingCta = () => {
  const { user } = AuthStore();
  return (
    <LandingCtaWraper>
      <CtaHeader>Ready to identify your website VIP’s?</CtaHeader>
      <CtaSubtext>
        Sign up today and view all very important personalities on your website
      </CtaSubtext>
      {user ? (
        <Link to="/dashboard">
          <Button
            text="Go to Dashboard"
            style={{
              padding: "16px 51px",
              width: "max-content",
              height: "56px",
              color: "#121212",
              border: "1px solid #333333",
              borderRadius: "4px"
            }}
          />
        </Link>
      ) : (
        <Link to="/login">
          <Button
            text="Get Started"
            style={{
              padding: "16px 51px",
              width: "max-content",
              height: "56px",
              color: "#121212",
              border: "1px solid #333333",
              borderRadius: "4px"
            }}
          />
        </Link>
      )}
    </LandingCtaWraper>
  );
};
export default LandingCta;
