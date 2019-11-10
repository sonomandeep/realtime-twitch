import React, { useState } from "react";
import PropTypes from "prop-types";

const Filter = ({ title }) => {
  const [isActive, setActive] = useState(false);

  const handleClick = () => {
    setActive(!isActive);
  };

  return (
    <div
      className={isActive ? "filter filter-active" : "filter"}
      onClick={() => handleClick()}
    >
      {title}
    </div>
  );
};

Filter.propTypes = {
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool
};

Filter.defaultProps = {
  isActive: false
};

export default Filter;
