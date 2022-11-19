import React from "react";
import Header from "./Header";
import LandingCta from "./LandingCta";
import Footer from "../general/footer/Footer";
import { Navbar } from "../general/navbar";
import Image from "./Image";
import LandingVideo from "./LandingVideo";

const LandingPage = () => {
  return (
    <>
      <Header />
      <LandingVideo />
      <Image />
      <LandingCta />
    </>
  );
};
export default LandingPage;
