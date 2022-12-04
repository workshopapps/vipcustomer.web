import React from "react";
import PropTypes from "prop-types";
import LoadingWraper from "./loadin.styled";

const Loading = ({ loading }) => {
  return (
    <LoadingWraper>
      <div className={`loading ${loading ? "" : "stop"}`}>
        <div className={`spinner ${loading ? "" : "stop"}`}></div>

        <p>please wait...</p>
      </div>
    </LoadingWraper>
  );
};

Loading.propTypes = {
  loading: PropTypes.bool
};

export default Loading;
