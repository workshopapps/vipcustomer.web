import React from "react";
import { PropTypes } from "prop-types";

// eslint-disable-next-line react/prop-types
const PrivacyCard = ({ plist }) => {
  // eslint-disable-next-line react/prop-types
  const { title, body } = plist;
  return (
    <div>
      <h2>{title}</h2>
      <p className="pbody">{body}</p>
    </div>
  );
};

PrivacyCard.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string
};

export default PrivacyCard;
