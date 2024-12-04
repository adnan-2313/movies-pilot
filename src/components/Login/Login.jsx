import { useRef, useState } from "react";
import { EmailValidate, PasswordValidate } from "../../utils/validate";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/userSlice";
import Header from "../Header/Header";
import backgroundImage from "../../../public/background-image.jpg";
import { USER_AVATAR } from "../../utils/constant";

const Login = () => {
  const [isSignIn, setIsSign] = useState(true);
  const [emailError, setEmailError] = useState(null);
  const [PasswordError, setPasswordError] = useState(null);
  const dispatch = useDispatch();

  const nameRef = useRef(null);
  const emailRef = useRef("admin12@gmail.com");
  const passwordRef = useRef("Adnan@5426");

  const toggleSignForm = () => {
    setIsSign(!isSignIn);
  };

  const handleButtonClick = () => {
    const emailerr = EmailValidate(emailRef.current.value);

    if (!isSignIn) {
      setPasswordError(PasswordValidate(passwordRef.current.value));
    }
    setEmailError(emailerr);

    if (emailerr) return;
    // sign In sign Up logic
    if (!isSignIn) {
      // sign up logic

      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: nameRef.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  name: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {});
        })
        .catch((error) => {
          // const errorCode = error.code;
          const errorMessage = error.message;
          // if(errorMessage === "")
          setEmailError(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          // ...
        })
        .catch((error) => {
          // const errorCode = error.code;
          const errorMessage = error.message;
          setEmailError(errorMessage);
        });
    }
  };
  const handlePasswordReset = async () => {
    try {
      await sendPasswordResetEmail(auth, emailRef.current.value);
      alert("Password reset email sent!");
    } catch (error) {
      setEmailError("Error sending password reset email");
    }
  };

  return (
    <>
      <div className="flex ">
        <Header />
        <div className="fixed w-full h-full ">
          <img
            src={backgroundImage}
            alt=""
            className=" z-[-2] absolute object-cover h-screen backdrop-blur-[50px] w-full "
          />
          <div className=" z-[-2] absolute object-cover h-screen sm:bg-opacity-45  bg-black w-full max-w-full" />
        </div>
        <div className="w-full  flex   justify-center items-center   ">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="relative   z-[30] sm:w-[28.125rem] w-full  max-w-[31.25rem] rounded-md mt-[100px]  text-white flex flex-col   bg-[#000000b2] p-12 max-sm:py-8 max-sm:px-2"
          >
            <h1 className="text-3xl font-bold m-2">
              {isSignIn ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignIn && (
              <input
                type="text"
                ref={nameRef}
                placeholder="Full Name"
                className="p-4 m-2 bg-[#1010129c] border-[1px] border-gray-700 rounded-md"
              />
            )}
            <input
              ref={emailRef}
              type="email"
              defaultValue={"admin12@gmail.com"}
              placeholder="Email"
              className="p-4  m-2 bg-[#1010129c] border-[1px] border-gray-700 rounded-md"
            />
            <p className="text-red-600 px-2">{emailError}</p>
            <input
              ref={passwordRef}
              type="password"
              defaultValue={"Adnan@5426"}
              placeholder="Password"
              className="p-4 m-2 bg-[#1010129c] border-[1px] border-gray-700 rounded-md"
            />
            <p className="text-red-600 px-2">{PasswordError}</p>
            <button
              onClick={handleButtonClick}
              className="p-2 m-2  bg-[#e50914] hover:bg-red-700 transition-all hover:transition-all rounded-md"
            >
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>

            <button onClick={handlePasswordReset} className="px-2 py-1 m-2">
              Forgot Password?
            </button>
            <h1 className="mx-2 my-1 px-1">
              {/* <input type="checkbox" className="transition-all" /> Remember me */}
            </h1>
            <h1
              className="mx-2 px-1 cursor-pointer transition-all duration-1000"
              onClick={toggleSignForm}
            >
              {isSignIn ? (
                <span>New Netflix ? Sign Up</span>
              ) : (
                <span>Already Registered ? Sign In </span>
              )}
            </h1>
          </form>
        </div>
      </div>
      {/* <div className="w-full h-[30vh] -mt-10 z-[-30] bg-black"></div> */}
    </>
  );
};

export default Login;
