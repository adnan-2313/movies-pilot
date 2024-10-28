import { useNavigate } from "react-router-dom";
import logo from "../assets/Logo.png";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constant";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  // console.log(user.photoURL);
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
  return (
    <div className="absolute px-16 py-8 flex justify-between z-10 w-full max-w-[80rem]">
      <img src={logo} alt="logo" className="w-36" />
      <div className="flex flex-row gap-5 items-center">
        <h1 className="">{user?.name}</h1>
        <div
          onClick={handlSignOut}
          className="cursor-pointer font-semibold text-2xl text-red-500"
        >
          {user?.photoURL && (
            <div className="flex flex-row gap-3">
              <img
                src={user.photoURL}
                alt={USER_AVATAR}
                className="w-10 h-10" // optional styling
              />
              <button className="text-sm" onMouseEnter={}>🔽</button>
            </div>
          )}
          {/* Sign Out */}
        </div>
      </div>
    </div>
  );
};

export default Header;
