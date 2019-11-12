import { SET_TOP_GAMES, SET_GAME_STREAMS } from "../constants";
const initialState = { games: { topGames: [] }, streams: {} };

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_TOP_GAMES:
      return { ...state, games: { ...state.games, topGames: [...payload] } };

    case SET_GAME_STREAMS:
      return {
        ...state,
        streams: { ...state.streams, [payload.game_id]: payload.streams }
      };

    default:
      return state;
  }
};

export default rootReducer;
