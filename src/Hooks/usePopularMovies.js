import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../store/moviesSlice";
import { options } from "../utils/constant";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const PopularMovies = useSelector((store) => store.movies.popularMovies);

  const getPopularMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      options
    );
    const json = await data.json();

    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    !PopularMovies && getPopularMovie();
  }, []);
};

export default usePopularMovies;
