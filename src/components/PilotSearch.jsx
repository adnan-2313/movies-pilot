import SearchBar from "./SearchBar";
import Suggestion from "./Suggestion";
import backgroundImage from "../assets/background-image.jpg"
const Search = () => {
  return (
    <div>
      <img
        src={backgroundImage}
        alt=""
        className="absolute  z-[-1] backdrop-blur-[50px] w-full max-w-full"
      />
      <SearchBar />
      <Suggestion />
    </div>
  );
};

export default Search;
