import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;

  let num = Math.floor(Math.random() * 20);
  const mainMovie = movies[0];

  if (!mainMovie) return null;

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="overflow-hidden relative">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
