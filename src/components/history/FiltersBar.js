import React, { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { BsCheck } from "react-icons/bs";
import {
  FilterBarWrapper,
  SortBarWrapper,
  OptionsCard,
  Overlay
} from "./filtersBar.styled";

// Filter Bar
const FilterBar = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [selected, setSelected] = useState("");

  const _options = ["Today", "Past Week", "Past Month"];

  const handleSelectOption = (text) => {
    setSelected(text);
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

export { FilterBar };
