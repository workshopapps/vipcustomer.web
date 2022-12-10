import React, { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { BsCheck } from "react-icons/bs";
import PropTypes from "prop-types";
import {
  FilterBarWrapper,
  SortBarWrapper,
  OptionsCard,
  Overlay
} from "./filtersBar.styled";

// Filter Bar
const FilterBar = ({filterHandle,selected}) => {


  const [showOptions, setShowOptions] = useState(false);

  const _options = ["All","Gold vip", "Silver vip", "Bronze vip"];


  return (
    <>
      <FilterBarWrapper>
        <div onClick={() => setShowOptions(!showOptions)} className="bar">
          <span>Filter By</span>

          {showOptions ? (
            <span className="f fcenter">
              <FaAngleUp />
            </span>
          ) : (
            <span className="f fcenter">
              <FaAngleDown />
            </span>
          )}
        </div>

        <OptionsCard showOptions={showOptions}>
          {_options.map((option, index) => {
            return (
              <div
                onClick={() => filterHandle(option)}
                key={index}
                className="options__select">
                <span
                  className={`checkbox ${selected === option ? "check" : ""}`}>
                  <p className="tick">
                    <BsCheck />
                  </p>
                </span>
                <small className="text">{option}</small>
              </div>
            );
          })}
        </OptionsCard>
      </FilterBarWrapper>

      <Overlay
        onClick={() => setShowOptions(false)}
        showOptions={showOptions}
      />
    </>
  );
};

const SortBar = ({sortHandle,selected}) => {
  const [showOptions, setShowOptions] = useState(false);
  

  const _options = ["Ascending order", "Descending order"];

  // app
  return (
    <SortBarWrapper>
      <div onClick={() => setShowOptions(!showOptions)} className="bar">
        <span>Sort By</span>

        {showOptions ? (
          <span className="f fcenter">
            <FaAngleUp />
          </span>
        ) : (
          <span className="f fcenter">
            <FaAngleDown />
          </span>
        )}
      </div>

      <OptionsCard showOptions={showOptions}>
        {_options.map((option, index) => {
          return (
            <div
              onClick={() => sortHandle(option)}
              key={index}
              className="options__select">
              <span
                className={`checkbox ${option === selected ? "check" : ""}`}>
                <p className="tick">
                  <BsCheck />
                </p>
              </span>
              <small className="text">{option}</small>
            </div>
          );
        })}
      </OptionsCard>

      <Overlay
        onClick={() => setShowOptions(false)}
        showOptions={showOptions}
      />
    </SortBarWrapper>
  );
};

export { FilterBar, SortBar };


FilterBar.propTypes = {
  filterHandle:PropTypes.func.isRequired,
  selected:PropTypes.string.isRequired,
};
SortBar.propTypes = {
  sortHandle:PropTypes.func.isRequired,
  selected:PropTypes.string,
};
