import { useSelector } from "react-redux";
import useFetchTrailer from "../../Hooks/useFetchTrailer";

const VideoBackground = ({ movieId }) => {
  useFetchTrailer(movieId);

  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  return (
    <div className="w-screen -mt-4 ">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&loop=1&playlist=${trailerVideo?.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
{
  /* <iframe
  width="1366"
  height="768"
  src="https://www.youtube.com/embed/0EDDtgWnSeY?list=TLGGMultgPfj7IAwNDExMjAyNA"
  title="Terrifier 3 |2024|Uncut Theatrical Trailer |Cinemas 11 October |David Howard Thornton, Lauren LaVera"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerpolicy="strict-origin-when-cross-origin"
  allowfullscreen
></iframe>; */
}
