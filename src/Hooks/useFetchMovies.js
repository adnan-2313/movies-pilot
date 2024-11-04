import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../store/moviesSlice";
import { options } from "../utils/constant";
import { useEffect } from "react";

const useFetchMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );
  const getNowPlayingMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      options
    );
    const json = await data.json();

    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovie();
  }, []);
};

export default useFetchMovies;
