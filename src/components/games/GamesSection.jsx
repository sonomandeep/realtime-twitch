import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Game from "./Game";
import { getTopGamesAction } from "../../store/actions/twitch";
import uuid from "uuid/v4";

function GamesSection() {
  const games = useSelector(state => state.games.topGames);
  const isLoading = useSelector(state => state.games.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopGamesAction());
  }, []);

  const gamesList = games.map(data => (
    <Game title={data.name} id={data.id} key={uuid()} />
  ));

  return <div className="games-section full-width">{gamesList}</div>;
}

export default GamesSection;
