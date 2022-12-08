import React from "react";
import { FilterBar, SortBar } from "./FilterBar";
import PropTypes from "prop-types";
import { ResultsNavBarWrapper } from "./resultsnavbar.styled";

const ResultsNavBar = ({handleFetch}) => {
  return (
    <ResultsNavBarWrapper>
      <h2 className="header">Vip</h2>

      <div className="filters__container">
        <FilterBar handleFetch={handleFetch} />
        <SortBar handleFetch={handleFetch} />
      </div>
    </ResultsNavBarWrapper>
  );
};

export default ResultsNavBar;


ResultsNavBar.propTypes = {
   handleFetch:PropTypes.func.isRequired,
 };
