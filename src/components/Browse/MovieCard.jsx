import { IMG_CDN } from "../../utils/constant";

const MovieCard = ({ path }) => {
  if (!path) return;
  return (
    <div className="w-[160px] max-sm:w-[130px] hover:scale-105 hover:transition-all transition-all">
      <img src={IMG_CDN + path} alt="Movies Card" className="" />
    </div>
  );
};

export default MovieCard;
