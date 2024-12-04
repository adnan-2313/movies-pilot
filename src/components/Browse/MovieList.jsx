import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 max-sm:px-2 max-w-[85rem] mx-auto">
      <h1 className="text-lg  md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex  overflow-x-scroll no-scrollbar">
        <div className="flex gap-2  px-2 py-3 max-md:py-1 max-sm:px-0 ">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} path={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default MovieList;
