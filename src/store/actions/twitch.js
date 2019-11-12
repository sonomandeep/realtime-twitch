import { getGames } from "../../services/api";
import { SET_TOP_GAMES } from "../constants";

const getTopGamesAction = () => async dispatch => {
  const { data } = await getGames();
  dispatch({ type: SET_TOP_GAMES, payload: [...data.top] });
};

export { getTopGamesAction };
