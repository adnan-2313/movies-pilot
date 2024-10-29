import { IMG_CDN } from "../utils/constant";

const MovieCard = ({ path }) => {
  return (
    <div className="w-[160px]">
      <img
        src={IMG_CDN + path}
        alt="Movies Card"
        className=""
      />
    </div>
  );
};

export default MovieCard;
