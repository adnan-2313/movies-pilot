import Header from "./Header";
import useFetchMovies from "../Hooks/useFetchMovies.js";
import MainContainer from "./MainContainer.jsx";
import SecondaryContainer from "./SecondaryContainer.jsx";
const Browse = () => {
  useFetchMovies();

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
