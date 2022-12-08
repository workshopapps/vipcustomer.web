import React from "react";
import { FilterBar, SortBar } from "./FilterBar";
import PropTypes from "prop-types";
import { ResultsNavBarWrapper } from "./resultsnavbar.styled";

const ResultsNavBar = ({filterHandle,sortSelected,sortHandle,filterSelected}) => {
 
  return (
    <ResultsNavBarWrapper>
      <h2 className="header">Vip</h2>
      <div className="filters__container">
        <FilterBar filterHandle={filterHandle} selected={filterSelected} />
        <SortBar sortHandle={sortHandle} selected={sortSelected} />
      </div>
    </ResultsNavBarWrapper>
  );
};

export default ResultsNavBar;


ResultsNavBar.propTypes = {
   filterHandle:PropTypes.func.isRequired,
   filterSelected:PropTypes.string.isRequired,
   sortHandle:PropTypes.func.isRequired,
   sortSelected:PropTypes.string.isRequired,
 };
