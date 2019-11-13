import {
  SET_TOP_GAMES,
  SET_GAME_STREAMS,
  SET_FILTER,
  REMOVE_FILTER,
  SET_GAME_FETCH_LOADING
} from "../constants";
const initialState = {
  search: { filters: [] },
  games: { topGames: [], isLoading: false },
  streams: {}
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_GAME_FETCH_LOADING:
      return { ...state, games: { ...state.games, isLoading: payload } };

    case SET_FILTER:
      return {
        ...state,
        search: { ...state.search, filters: [...state.search.filters, payload] }
      };

    case REMOVE_FILTER:
      const filteredFilters = state.search.filters.filter(
        filter => filter !== payload
      );
      return {
        ...state,
        search: { ...state.search, filters: [...filteredFilters] }
      };

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
