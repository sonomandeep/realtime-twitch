import { getGames, getGameStreams } from "../../services/api";
import { SET_TOP_GAMES, SET_GAME_STREAMS } from "../constants";

const getTopGamesAction = () => async dispatch => {
  const { data } = await getGames();
  data.data.forEach(game => dispatch(getGameStreamsAction(game.id)));
  dispatch({ type: SET_TOP_GAMES, payload: [...data.data] });
};

const getGameStreamsAction = id => async dispatch => {
  const { data } = await getGameStreams(id);
  dispatch({
    type: SET_GAME_STREAMS,
    payload: { streams: [...data.data], game_id: id }
  });
};

export { getTopGamesAction };
