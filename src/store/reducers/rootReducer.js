import { SET_TOP_GAMES } from "../constants";
const initialState = { games: { topGames: [] } };

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_TOP_GAMES:
      return { ...state, games: { ...state.games, topGames: [...payload] } };

    default:
      return state;
  }
};

export default rootReducer;
