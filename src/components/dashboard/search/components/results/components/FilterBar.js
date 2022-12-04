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

  const _options = ["Gold vip", "Silver vip", "Bronze vip"];

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

const SortBar = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [selected, setSelected] = useState("");

  const _options = ["Last updated", "Ascending order", "Descending order"];

  const handleSelectOption = (text) => {
    setShowOptions(true);
    setSelected(text);
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
