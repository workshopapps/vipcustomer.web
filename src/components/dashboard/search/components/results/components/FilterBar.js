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
const FilterBar = ({handleFetch}) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selected, setSelected] = useState("");

  const _options = ["Gold vip", "Silver vip", "Bronze vip"];



  const handleSelectOption = (text) => {
    setSelected(text);
    switch(text){
      case "Gold vip":
        console.log('hello');
        break;
        case "Silver vip":
          console.log('hey');
          break;
        case "Bronze vip":
          console.log('he');
          break;
          default:
          return text
    }
  };

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
                onClick={() => handleSelectOption(option)}
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

const SortBar = ({handleFetch}) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selected, setSelected] = useState("");

  const _options = ["Ascending order", "Descending order"];

  const handleSelectOption = (text) => {
    setShowOptions(true);
    setSelected(text);
    console.log(text)
    switch(text){
      case "Ascending order":
        console.log('hello');
        break;
        case "Descending order":
          console.log('hey');
          break;
          default:
          return text
    }
  };

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
              onClick={() => handleSelectOption(option)}
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
  handleFetch:PropTypes.func.isRequired,
};
SortBar.propTypes = {
  handleFetch:PropTypes.func.isRequired,
};
