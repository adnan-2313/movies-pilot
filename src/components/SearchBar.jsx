import { BiSearch } from "react-icons/bi";
import { lang } from "../utils/languageConstant";
import { useSelector } from "react-redux";

const SearchBar = () => {
  const langKey = useSelector((store) => store.appConfig?.lang);

  return (
    <div className="flex items-center justify-center pt-[100px] ">
      <form
        action=""
        className="w-[33%]   justify-center py-3 rounded-md   flex "
      >
        <input
          type="text"
          placeholder={lang[langKey].placeholder}
          className="w-[330px] rounded-l-md p-[15px]"
        />
        <button className="p-[19px]  rounded-r-md  bg-red-700 text-white rounded-sm">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
