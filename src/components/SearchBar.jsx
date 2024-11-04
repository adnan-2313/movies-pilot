import { useRef } from "react";
import { lang } from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import { GEMINI_API, options } from "../utils/constant";
// import API_OPTIONS from "../utils/API_OPTION";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { addSearchMovies } from "../store/pilotSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.appConfig?.lang);
  const searchText = useRef(null);

  const fetchMovies = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      options
    );
    const json = await data.json();
    return json.results;
  };

  const handleSearch = async () => {
    const query =
      "Act as a Movie recommendation system " +
      searchText.current.value +
      "and only give me names of 5 movies , comma separated like the example result given ahead. Example Result : Sholay,Don,Iron Man,Koi Mil gya,KGF, and if there no movies or something dont provide error just don;t provide nothing";

    const genAI = new GoogleGenerativeAI(GEMINI_API);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(query);

    if (!result.response.text()) {
      return;
    }

    const response = result.response.text();
    const getMovie = response.split(",");

    const data = getMovie.map((movie) => fetchMovies(movie));

    const TmdbResult = await Promise.all(data);

    dispatch(
      addSearchMovies({ movieName: getMovie, movieResults: TmdbResult })
    );
  };

  return (
    <div className="flex items-center justify-center pt-[100px] z-10">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-[33%] max-sm:text-[0.8rem]  justify-center py-3 rounded-md max-md:w-full max-sm:w-[80%]   flex "
      >
        <input
          type="text"
          ref={searchText}
          placeholder={lang[langKey].placeholder}
          className="w-[330px] outline-none  rounded-l-md p-[15px] max-sm:py-[10px]"
        />
        <button
          onClick={handleSearch}
          className="p-[19px] max-sm:py-[13px] w-[90px] rounded-r-md  bg-[#d62222] text-white rounded-sm"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
