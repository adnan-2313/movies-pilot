import SearchBar from "./SearchBar";
import MovieSuggestion from "./MovieSuggestion";
import backgroundImage from "../assets/background-image.jpg"
const Search = () => {
  return (
    <div className="relative bg-black h-[100%] bg-opacity-50">
      
      <img
        src={backgroundImage}
        alt=""
        className="fixed z-[-1] h-[100vh] backdrop-blur-[50px] w-full max-w-full"
      />
      <SearchBar />
      <MovieSuggestion/>
    </div>
  );
};

export default Search;
