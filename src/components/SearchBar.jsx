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
          className="w-[330px] outline-none  rounded-l-md p-[15px]"
        />
        <button className="p-[19px] w-[90px] rounded-r-md  bg-[#d62222] text-white rounded-sm">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
