import React from "react";
import { Outlet } from "react-router-dom";
import { PagesWrapper } from "./pages.styles";

const Pages = () => {
  return (
    <PagesWrapper>
      <Outlet />
    </PagesWrapper>
  );
};

export default Pages;
