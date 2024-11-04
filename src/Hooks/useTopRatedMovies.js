import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovie } from "../store/moviesSlice";
import { options } from "../utils/constant";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const PopularMovies = useSelector((store) => store.movies.popularMovies);

  const getPopularMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      options
    );
    const json = await data.json();

    dispatch(addTopRatedMovie(json.results));
  };

  useEffect(() => {
    !PopularMovies && getPopularMovie();
  }, []);
};

export default useTopRatedMovies;
