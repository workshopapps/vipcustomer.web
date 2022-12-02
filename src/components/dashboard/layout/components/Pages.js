import React from "react";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import { PagesWrapper } from "./pages.styles";
import { AiOutlineMenuUnfold } from "react-icons/ai";
const Pages = ({ setSideBarOpen }) => {
  return (
    <PagesWrapper>
      <button onClick={() => setSideBarOpen(true)} className="open__sidebar">
        <AiOutlineMenuUnfold />
      </button>

      <Outlet />
    </PagesWrapper>
  );
};

Pages.propTypes = {
  setSideBarOpen: PropTypes.func
};

export default Pages;
