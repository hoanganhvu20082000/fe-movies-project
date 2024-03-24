import * as Types from "../types";

const reducerMoviesInitialState = {
  NetflixOriginals: null,
  TopRate: null,
  MovieDetail: null,
  SeachResult: null,
};
const reducerMovies = (state = reducerMoviesInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case Types?.GET_NETFLIX_ORIGINAL:
      return { ...state, NetflixOriginals: payload };
    case Types?.GET_TOP_RATE:
      return { ...state, TopRate: payload };
    case Types?.SET_MOVIE_DETAIL:
      return { ...state, MovieDetail: payload };
    case Types?.SEARCH:
      return { ...state, SeachResult: payload };
    default:
      return state;
  }
};
export default reducerMovies;
