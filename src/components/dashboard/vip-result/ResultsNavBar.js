import React from "react";
import SearchBar from "./components/SearchBar";
import { ResultsNavBarWrapper } from "./ResultsNavBar.styled";
const ResultsNavBar = () => {
  return (
    <ResultsNavBarWrapper>
      <h2>Vip</h2>

      <div className="">
        <SearchBar />
      </div>
    </ResultsNavBarWrapper>
  );
};

export default ResultsNavBar;
