import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Game from "./Game";
import { getTopGamesAction } from "../../store/actions/twitch";
import uuid from "uuid/v4";
import GamesLoading from "./GamesLoading";
import { isObjectEmpty } from "../../helpers";
import { SearchedGame } from "../search";

function GamesSection() {
  const games = useSelector(state => state.games.topGames);
  const searchedGame = useSelector(state => state.games.searchedGame);
  const isLoading = useSelector(state => state.games.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopGamesAction());
  }, []);

  const getContent = () => {
    if (!isObjectEmpty(searchedGame)) return <SearchedGame />;
    if (isLoading) return <GamesLoading />;
    else return gamesList;
  };

  const gamesList = games.map(data => (
    <Game title={data.name} id={data.id} key={uuid()} />
  ));

  return <div className="games-section full-width">{getContent()}</div>;
}

export default GamesSection;
