import { useSelector } from "react-redux";
import useFetchTrailer from "../Hooks/useFetchTrailer";

const VideoBackground = ({ movieId }) => {
  useFetchTrailer(movieId);

  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-[16/9]"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
