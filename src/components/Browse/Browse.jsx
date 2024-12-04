import Header from "../Header/Header";
import useFetchMovies from "../../Hooks/useFetchMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../../Hooks/usePopularMovies";
import Search from "../Pilot Search/PilotSearch";
import { useSelector } from "react-redux";
import useTopRatedMovies from "../../Hooks/useTopRatedMovies";
import useUpcomingMovies from "../../Hooks/useUpcomingMovies";

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
      <div className="nfLoader flex flex-col text-white gap-5 text-xl justify-center  bg-black items-center fixed inset-0">
        <div
          className="w-20 h-20 bg-center bg-no-repeat bg-contain animate-spin-slow"
          style={{
            backgroundImage:
              "url(https://assets.nflxext.com/en_us/pages/wiplayer/site-spinner.png)",
          }}
        ></div>
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
