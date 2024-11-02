import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const MovieSuggestion = () => {
  const { movieResults, movieName } = useSelector((store) => store.pilot);

  if (!movieName || !movieResults || movieName.length !== movieResults.length)
    return null;

  return (
    <div className="">
      {movieName.map((movie, index) => (
        <MovieList key={movie} title={movie} movies={movieResults[index]} />
      ))}
    </div>
  );
};

export default MovieSuggestion;
