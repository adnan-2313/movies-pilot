import SearchBar from "./SearchBar";
import MovieSuggestion from "../Browse/MovieSuggestion";
import backgroundImage from "../../../public/background-image.jpg";
const Search = () => {
  return (
    <>
      <div className="fixed w-full grid-bg">
        <img
          src={backgroundImage}
          alt=""
          className="z-[-2] absolute object-cover h-screen backdrop-blur-[50px] w-full max-w-full"
        />
        <div className="z-[-1] absolute object-cover h-screen bg-[rgba(0,0,0,0.46)]  w-full max-w-full" />
        <SearchBar />
        <MovieSuggestion />
        
      </div>
    </>
  );
};

export default Search;
