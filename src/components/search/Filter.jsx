import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import {
  setFilterAction,
  removeFilterAction
} from "../../store/actions/twitch";

const Filter = ({ title, filter }) => {
  const [isActive, setActive] = useState(false);
  const dispatch = useDispatch();

  const handleClick = () => {
    setActive(!isActive);
  };

  useEffect(() => {
    isActive
      ? dispatch(setFilterAction(filter))
      : dispatch(removeFilterAction(filter));
  }, [isActive]);

  return (
    <input
      className={isActive ? "filter filter-active" : "filter"}
      onClick={handleClick}
      type="button"
      value={title}
    />
  );
};

Filter.propTypes = {
  title: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired
};

export default Filter;
