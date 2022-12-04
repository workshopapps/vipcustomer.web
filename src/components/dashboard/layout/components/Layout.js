import React, { useState } from "react";
import SideBar from "./SideBar";
import Pages from "./Pages";
import { Navbar } from "components/general";
import LayoutsWrapper from "./layout.styled";

// app
const Layout = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  // jsx
  return (
    <>
      <Navbar />
      <LayoutsWrapper>
        <SideBar setSideBarOpen={setSideBarOpen} sideBarOpen={sideBarOpen} />

        <Pages setSideBarOpen={setSideBarOpen} />
      </LayoutsWrapper>
    </>
  );
};

export default Layout;
