import React from "react";
import NavWrapper from "./nav.styled";
import PropTypes from "prop-types";
const _tabs = ["Quick search", "multi search", "upload a csv"];

// app
const Nav = ({ tab, setTab }) => {
  return (
    <NavWrapper>
      <h2 className="heading">Choose a search type</h2>

      <div className="nav">
        {_tabs.map((title, index) => {
          return (
            <p
              onClick={() => setTab(index)}
              key={index}
              className={tab === index ? "current" : ""}>
              {title}
            </p>
          );
        })}
      </div>
    </NavWrapper>
  );
};

Nav.propTypes = {
  tab: PropTypes.number,
  setTab: PropTypes.func
};

export default Nav;
