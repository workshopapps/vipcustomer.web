import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Paginate = ({
  paginateFn,
  array,
  itemsPerPage,
  currentBtn,
  handlePaginate
}) => {
  return (
    <Wrapper>
      {paginateFn(array, itemsPerPage).buttonArray.map((val) => {
        return (
          <button
            className={`f fcenter ${currentBtn === val ? "active" : ""}`}
            onClick={() => {
              handlePaginate(val);
            }}
            key={val}>
            {val + 1}
          </button>
        );
      })}
    </Wrapper>
  );
};

Paginate.propTypes = {
  paginateFn: PropTypes.func.isRequired,
  array: PropTypes.array.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  currentBtn: PropTypes.number.isRequired,
  handlePaginate: PropTypes.func.isRequired
};

export default Paginate;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  padding-bottom: 10px;
  text-align: center;
  margin-top: 10px;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 5px;
    height: 20px;
    width: 20px;
    padding: 10px;
    border-radius: 50%;
    border: 2px solid var(--color-darkBlue);
  }
  button.active {
    background-color: #f05d23;
    border: 2px solid #f05d23;
    color: white;
  }
`;
