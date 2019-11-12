import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Game from "./Game";
import { getTopGamesAction } from "../../store/actions/twitch";

const streams = [
  {
    title: "League of legends #1",
    counter: 3000
  },
  {
    title: "League of legends #2",
    counter: 3000
  },
  {
    title: "League of legends #3",
    counter: 3000
  },
  {
    title: "League of legends League of legends League of legends #4",
    counter: 3000
  },
  {
    title: "League of legends League of legends League of legends #4",
    counter: 3000
  }
];

function GamesSection() {
  const games = useSelector(state => state.games.topGames);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopGamesAction());
  }, []);

  const gamesList = games.map(data => (
    <Game title={data.game.name} streams={streams} />
  ));

  console.log(gamesList);

  return <div className="games-section full-width">{gamesList}</div>;
}

export default GamesSection;
