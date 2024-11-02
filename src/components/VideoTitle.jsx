import { IoIosPlay } from "react-icons/io";
import { IoMdInformationCircleOutline } from "react-icons/io";
const VideoTitle = ({ title, overview }) => {
  return (
    <div className="overflow-hidden w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black font-DMSANS">
      <h1 className="text-6xl font-playwrite leading-snug font-bold">{title}</h1>
      <p className="py-6 text-[1.2rem]  w-[40%] leading-tight ">{overview}</p>
      <div className="flex items-center gap-2">
        <button className="bg-white text-black transition-all hover:bg-opacity-80 hover:transition-all  px rounded-sm flex flex-row items-center gap-2 px-6 py-2">
          <IoIosPlay className="text-[1.7rem]"/>
          Play
        </button>
        <button className="bg-[#9ca3af38] hover:bg-gray-700 hover:transition-all transition-all backdrop-blur-[50px] text-white flex flex-row items-center gap-2 px-4 py-2 rounded-sm">
          <IoMdInformationCircleOutline className="text-[1.75rem]" /> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
