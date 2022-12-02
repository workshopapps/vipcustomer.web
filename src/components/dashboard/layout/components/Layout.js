import React from "react";
import SideBar from "./SideBar";
import Pages from "./Pages";
import { Navbar } from "components/general";
import LayoutsWrapper from "./layout.styled";

// app
const Layout = () => {
  // jsx
  return (
    <>
      <Navbar />
      <LayoutsWrapper>
        <SideBar />
        <Pages />
      </LayoutsWrapper>
    </>
  );
};

export default Layout;
