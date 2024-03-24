import React, { useEffect } from "react";
import MoviesRow from "./MoviesRow";
import { useDispatch, useSelector } from "react-redux";
import { getNFOriginal, getTopRate } from "../store/actions";

function Content(props) {
  const dispatch = useDispatch();

  const { NetflixOriginals, TopRate } = useSelector(
    (state) => state?.infoMovies
  );
  useEffect(() => {
    dispatch(getNFOriginal());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getTopRate());
  }, [dispatch]);
  return (
    <div>
      <MoviesRow
        movies={NetflixOriginals}
        title="Now Playing"
        isNetFlix={true}
      />
      <MoviesRow movies={TopRate} title="TopRate" />
    </div>
  );
}

export default Content;
