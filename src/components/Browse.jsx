import Header from "./Header";
import useFetchMovies from "../Hooks/useFetchMovies.js";
import MainContainer from "./MainContainer.jsx";
import SecondaryContainer from "./SecondaryContainer.jsx";
import usePopularMovies from "../Hooks/usePopularMovies.js";

import Search from "./PilotSearch.jsx";
import { useSelector } from "react-redux";
import useTopRatedMovies from "../Hooks/useTopRatedMovies.js";
import useUpcomingMovies from "../Hooks/useUpcomingMovies.js";
const Browse = () => {
  const showPilotSearch = useSelector((store) => store.pilot.showPilotSearch);

  useFetchMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className="font-DMSANS">
      <Header />
      {showPilotSearch ? (
        <Search />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
      {/* 
      MainContainer
        -VideoBackground
        -VideoTitle
      SecondaryContainer
       - MoviesList *n
          - cards *n  
      */}
    </div>
  );
};

export default Browse;
