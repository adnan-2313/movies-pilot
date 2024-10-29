import Header from "./Header";
import useFetchMovies from "../Hooks/useFetchMovies.js";
import MainContainer from "./MainContainer.jsx";
import SecondaryContainer from "./SecondaryContainer.jsx";
import usePopularMovies from "../Hooks/usePopularMovies.js";
const Browse = () => {
  useFetchMovies();
  usePopularMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
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
