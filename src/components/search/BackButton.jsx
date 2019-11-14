import React from "react";
import { useDispatch } from "react-redux";
import { IoIosArrowRoundBack } from "react-icons/io";
import { removeSearchedGame } from "../../store/actions/twitch";

function BackButton() {
  const dispatch = useDispatch();

  const handleClick = event => {
    event.preventDefault();
    dispatch(removeSearchedGame());
  };

  return (
    <div className="back-button">
      <IoIosArrowRoundBack size="50px" onClick={handleClick} />
    </div>
  );
}

export default BackButton;
