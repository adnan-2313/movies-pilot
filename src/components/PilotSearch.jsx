import SearchBar from "./SearchBar";
import Suggestion from "./Suggestion";
import backgroundImage from "../assets/background-image.jpg"
const Search = () => {
  return (
    <div className="relative bg-black h-[100vh] bg-opacity-50">
      <img
        src={backgroundImage}
        alt=""
        className="absolute  z-[-1] h-[100vh] backdrop-blur-[50px] w-full max-w-full"
      />
      <SearchBar />
      <Suggestion />
    </div>
  );
};

export default Search;
