import { useNavigate } from "react-router-dom";
import logo from "../assets/Logo.png";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { SUPPORTED_LANGUAGES, USER_AVATAR } from "../utils/constant";
import { togglePilotSearchView } from "../utils/pilotSlice";
import { BiSearch } from "react-icons/bi";
import { changeLanguage } from "../utils/appConfigSlice";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

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
    <div className="absolute px-16 py-8 flex justify-between z-[20] w-full max-w-[80rem]">
      <img src={logo} alt="logo" className="w-[200px]" />
      <div className="flex flex-row gap-5 items-center">
        {/* <h1 className="">{user?.name}</h1> */}
        <div className="cursor-pointer font-semibold text-2xl text-red-500">
          {user?.photoURL && (
            <div className="flex flex-row gap-3">
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
              <button
                className="py-2 px-4 text-white text-md m-2"
                onClick={handleSearch}
              >
                <BiSearch />
              </button>
              <img
                src={user.photoURL}
                alt={USER_AVATAR}
                className="w-10 h-10" // optional styling
              />
              <button onClick={handlSignOut} className="text-sm">
                🔽
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
