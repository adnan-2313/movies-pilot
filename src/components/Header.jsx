import { useNavigate } from "react-router-dom";
import logo from "../assets/Logo.png";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handlSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute px-16 py-8 flex justify-between z-10 w-full max-w-[80rem]">
      <img src={logo} alt="logo" className="w-36" />
      <div
        onClick={handlSignOut}
        className="cursor-pointer font-semibold text-2xl text-red-500"
      >
        {/* <img src={user.photoURL} alt="" className="" /> */}
        Sign Out
      </div>
    </div>
  );
};

export default Header;
