import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../store/moviesSlice";
import { options } from "../utils/constant";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const PopularMovies = useSelector((store) => store.movies.popularMovies);

  const getPopularMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      options
    );
    const json = await data.json();

    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    !PopularMovies && getPopularMovie();
  }, []);
};

export default useUpcomingMovies;
