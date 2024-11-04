import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/constant";
import { addTrailerVideo } from "../store/moviesSlice";
import { useEffect } from "react";

const useFetchTrailer = (movieId) => {
  const dispatch = useDispatch();
  const movieTrailer = useSelector((store) => store.movies.trailerVideo);

  const fetchMoviesTrailer = async () => {
    if (!movieId) return;
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      options
    );

    const json = await data.json();
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length === 0 ? json.results[0] : filterData[0];

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    !movieTrailer && fetchMoviesTrailer();
  }, []);
};

export default useFetchTrailer;
