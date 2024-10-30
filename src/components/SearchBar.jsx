import React from "react";

const SearchBar = () => {
  return (
    <div className="">
      <form action="pt" className="bg-black pt-20 mx-auto">
        <input
          type="text"
          placeholder="what would you like today"
          className="py-4 px-8 my-4"
        />
        <button className="py-2 my-4  bg-red-700 text-white rounded-sm">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
