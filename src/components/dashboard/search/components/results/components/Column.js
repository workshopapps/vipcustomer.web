import React from "react";
import PropTypes from "prop-types";

const Column = ({ name, value }) => {
  return (
    <div className="row">
      <span>{name}</span>
      <p>{value}</p>
    </div>
  );
};

Column.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ])
};
export default Column;
