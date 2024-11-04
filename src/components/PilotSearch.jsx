import SearchBar from "./SearchBar";
import MovieSuggestion from "./MovieSuggestion";
import backgroundImage from "../assets/background-image.jpg"
const Search = () => {
  return (
    <div className="fixed w-full">
      
      <img
        src={backgroundImage}
        alt=""
        className="z-[-1] absolute object-cover h-screen backdrop-blur-[50px] w-full max-w-full"
      />
      <div
        className="z-[-1] absolute object-cover h-screen bg-opacity-20 bg-black w-full max-w-full"
      />
      <SearchBar />
      <MovieSuggestion/>
    </div>
  );
};

export default Search;
