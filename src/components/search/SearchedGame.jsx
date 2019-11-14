import React from "react";
import { useSelector } from "react-redux";
import { Game } from "../games";

function SearchedGame() {
  const searchedGame = useSelector(state => state.games.searchedGame.game);

  return <Game title={searchedGame.name} id={searchedGame.id} />;
}

export default SearchedGame;
