import Header from "./Header";
import useFetchMovies from "../Hooks/useFetchMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../Hooks/usePopularMovies";
import Search from "./PilotSearch";
import { useSelector } from "react-redux";
import useTopRatedMovies from "../Hooks/useTopRatedMovies";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";

const Browse = () => {
  const showPilotSearch = useSelector((store) => store.pilot.showPilotSearch);

  // Fetch movie data
  useFetchMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  const loader = useSelector((store) => store.movies.nowPlayingMovies);
  if (!loader)
    return (
      <div className="flex items-center justify-center h-screen bg-black">
        <div className="relative w-16 h-16 border-4 border-red-500 border-opacity-50 rounded-full animate-spin">
          <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-red-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        </div>
      </div>
    );

  return (
    <div className="font-DMSANS">
      <Header Flex="true" />
      {showPilotSearch ? (
        <Search />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
