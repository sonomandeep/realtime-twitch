import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Game from "./Game";
import { getTopGamesAction, setSearchError } from "../../store/actions/twitch";
import uuid from "uuid/v4";
import GamesLoading from "./GamesLoading";
import { isObjectEmpty } from "../../helpers";
import { SearchedGame, GameNotFound } from "../search";

function GamesSection() {
  const [showError, setShowError] = useState(false);
  const games = useSelector(state => state.games.topGames);
  const searchedGame = useSelector(state => state.games.searchedGame);
  const isLoading = useSelector(state => state.games.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopGamesAction());
  }, []);

  useEffect(() => {
    setShowError(searchedGame.error);
  }, [searchedGame.error]);

  const getContent = () => {
    if (isLoading) return <GamesLoading />;
    if (!isObjectEmpty(searchedGame.game)) return <SearchedGame />;
    return gamesList;
  };

  const cancelGameNotFoundPopup = () => {
    setShowError(false);
    dispatch(setSearchError(false));
  };

  const gamesList = games.map(data => (
    <Game title={data.name} id={data.id} key={uuid()} />
  ));

  return (
    <div className="games-section full-width">
      {showError && <GameNotFound cancel={cancelGameNotFoundPopup} />}
      {getContent()}
    </div>
  );
}

export default GamesSection;
