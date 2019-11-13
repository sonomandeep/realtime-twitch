import { getGames, getGameStreams } from "../../services/api";
import {
  SET_TOP_GAMES,
  SET_GAME_STREAMS,
  SET_FILTER,
  REMOVE_FILTER,
  SET_GAME_FETCH_LOADING
} from "../constants";

const setGamesFetchLoading = isLoading => dispatch => {
  dispatch({ type: SET_GAME_FETCH_LOADING, payload: isLoading });
};

const setFilterAction = filter => (dispatch, getState) => {
  const state = getState();
  dispatch({ type: SET_FILTER, payload: filter });
  state.games.topGames.forEach(game => dispatch(getGameStreamsAction(game.id)));
};

const removeFilterAction = filter => dispatch => {
  dispatch({ type: REMOVE_FILTER, payload: filter });
};

const getTopGamesAction = () => async dispatch => {
  const { data } = await getGames();
  data.data.forEach(game => dispatch(getGameStreamsAction(game.id)));
  dispatch({ type: SET_TOP_GAMES, payload: [...data.data] });
};

const getGameStreamsAction = id => async (dispatch, getState) => {
  const state = getState();
  dispatch(setGamesFetchLoading(true));
  const { data } = await getGameStreams(id, state.search.filters);
  dispatch({
    type: SET_GAME_STREAMS,
    payload: { streams: [...data.data], game_id: id }
  });
  dispatch(setGamesFetchLoading(false));
};

export { getTopGamesAction, setFilterAction, removeFilterAction };
