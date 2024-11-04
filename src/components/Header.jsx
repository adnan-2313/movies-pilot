import { useNavigate } from "react-router-dom";
import logo from "../assets/Logo.png";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addUser, removeUser } from "../store/userSlice.js";
import { SUPPORTED_LANGUAGES } from "../utils/constant";
import { togglePilotSearchView } from "../store/pilotSlice.js";
import { BiCross, BiLogOut, BiSearch } from "react-icons/bi";
import { changeLanguage } from "../store/appConfigSlice";
import { FaBars, FaCross, FaHome } from "react-icons/fa";
import { CgClose } from "react-icons/cg";

const Header = () => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const showPilotSearch = useSelector((store) => store.pilot.showPilotSearch);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            name: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handlSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleSearch = () => {
    dispatch(togglePilotSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="absolute px-16 max-sm:px-8 py-8 flex justify-between items-center z-[20] w-full max-w-[80rem] sm:">
      <img src={logo} alt="logo" className="w-[200px] max-sm:w-[150px]" />
      <div
        className="sm:hidden text-3xl text-red-500"
        onClick={() => setMenu(!menu)}
      >
        {menu ? <FaBars /> : <CgClose />}
      </div>
      <div className="flex flex-row gap-5 items-center max-sm:hidden">
        {/* <h1 className="">{user?.name}</h1> */}
        <div className="cursor-pointer font-semibold text-2xl text-red-500">
          {user?.photoURL && (
            <div className="flex flex-row gap-3 items-center">
              {showPilotSearch && (
                <select
                  className="border-none outline-none w-[100px] text-center h-[40px] text-sm rounded-lg bg-black bg-opacity-80"
                  name=""
                  id=""
                  onChange={handleLanguageChange}
                >
                  {SUPPORTED_LANGUAGES.map((lang) => {
                    return (
                      <option
                        key={lang.identifier}
                        className="border-none outline-none bg-black bg-opacity-70 rounded-md w-[100px] text-sm"
                        value={lang.identifier}
                      >
                        {lang.name}
                      </option>
                    );
                  })}
                </select>
              )}
              <button
                className="py-2 px-4 text-white bg-[#d62222] rounded-md text-3xl font-bold"
                onClick={handleSearch}
              >
                {showPilotSearch ? <FaHome /> : <BiSearch />}
              </button>

              <button
                onClick={handlSignOut}
                className="text-2xl bg-[#d62222] py-3 rounded-md text-center px-4  text-white"
              >
                <BiLogOut />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
