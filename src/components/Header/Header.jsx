import { useNavigate } from "react-router-dom";
import logo from "../../../public/Logo.png";
import { auth } from "../../utils/firebase.js";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addUser, removeUser } from "../../store/userSlice.js";
import { SUPPORTED_LANGUAGES } from "../../utils/constant.js";
import { togglePilotSearchView } from "../../store/pilotSlice.js";
import { BiLogOut, BiSearch } from "react-icons/bi";
import { changeLanguage } from "../../store/appConfigSlice.js";
import { FaHome } from "react-icons/fa";
import {} from "react-icons/cg";

const Header = ({ Flex }) => {
  const navigate = useNavigate();

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
    <>
      <div
        className={`absolute px-16 max-md:px-8 max-sm:p-4   py-8 flex ${
          Flex === "true" ? "max-sm:flex-row" : "max-sm:flex-col "
        } max-sm:gap-5 
      justify-between mx-auto items-center z-[20] w-full max-w-[80rem] `}
      >
        <img src={logo} alt="logo" className="w-[150px] sm:w-[200px]  " />

        <div className="flex flex-row  gap-5 items-center max-sm:w-full max-sm:justify-end ">
          {/* <h1 className="">{user?.name}</h1> */}
          <div className="cursor-pointer font-semibold text-2xl text-red-500">
            {user?.photoURL && (
              <div className="flex flex-row gap-3  items-center">
                {showPilotSearch && (
                  <select
                    className="border-none max-sm:hidden outline-none w-[100px] text-center h-[40px] text-sm rounded-lg bg-black bg-opacity-80"
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
                  className="py-2 px-4 max-sm:p-0 text-white  rounded-md text-3xl font-bold"
                  onClick={handleSearch}
                >
                  {showPilotSearch ? <FaHome /> : <BiSearch />}
                </button>

                <button
                  onClick={handlSignOut}
                  className="text-2xl  py-3 max-sm:p-0 rounded-md text-center px-4  text-white"
                >
                  <BiLogOut />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
