import React from "react";
import { IoIosClose } from "react-icons/io";

function GameNotFound({ cancel }) {
  return (
    <div className="game-not-found flex row">
      <p>Gioco non trovato</p>
      <IoIosClose
        className="game-not-found-close"
        size="30px"
        onClick={cancel}
      />
    </div>
  );
}

export default GameNotFound;
