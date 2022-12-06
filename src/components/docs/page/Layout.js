import React from "react";
import { Outlet } from "react-router-dom";
import DocsOverview from "../components/DocsOverview";
import "../components/document.css";

const Layout = () => {
  return (
    <div className="layouts-div">
      <DocsOverview />

      <div className="docs-main">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
