import { useDispatch } from "react-redux";
import { options } from "../utils/constant";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useFetchTrailer = (movieId) => {
  const dispatch = useDispatch();

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
    fetchMoviesTrailer();
  }, []);
};

export default useFetchTrailer;