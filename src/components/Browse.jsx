import Header from "./Header";
import useFetchMovies from "../Hooks/useFetchMovies.js";
import MainContainer from "./MainContainer.jsx";
import SecondaryContainer from "./SecondaryContainer.jsx";
import usePopularMovies from "../Hooks/usePopularMovies.js";
import Search from "./PilotSearch.jsx";
import { useSelector } from "react-redux";
const Browse = () => {
  const showPilotSearch = useSelector((store) => store.pilot.showPilotSearch);

  useFetchMovies();
  usePopularMovies();

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
