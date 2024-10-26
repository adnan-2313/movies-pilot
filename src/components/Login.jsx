import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";

const Login = () => {
  const [isSignIn, setIsSign] = useState(true);
  const [error, setError] = useState(null);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const toggleSignForm = () => {
    setIsSign(!isSignIn);
  };

  const handleButtonClick = () => {
    const val = checkValidateData(
      emailRef.current.value,
      passwordRef.current.value
    );
    setError(val);
  };

  return (
    <>
      <div className="flex justify-center bg-[#00000088] h-[100vh]">
        <Header />
        <div className="">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_medium.jpg"
            alt=""
            className="absolute h-full z-[-1] backdrop-blur-[50px] w-full max-w-full"
          />
        </div>
        <div className="w-full  flex justify-center items-center">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="relative w-[28.125rem] max-w-[31.25rem] rounded-md mt-[100px]  text-white flex flex-col   bg-[#000000b2] p-12"
          >
            <h1 className="text-3xl font-bold m-2">
              {isSignIn ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignIn && (
              <input
                type="text"
                placeholder="Full Name"
                className="p-4 m-2 bg-[#1010129c] border-[1px] border-gray-700 rounded-md"
              />
            )}
            <input
              ref={emailRef}
              type="email"
              placeholder="Email"
              className="p-4  m-2 bg-[#1010129c] border-[1px] border-gray-700 rounded-md"
            />
            <input
              ref={passwordRef}
              type="password"
              placeholder="Password"
              className="p-4 m-2 bg-[#1010129c] border-[1px] border-gray-700 rounded-md"
            />
            <p className="text-red-600 px-2">{error}</p>
            <button
              onClick={handleButtonClick}
              className="p-2 m-2  bg-red-600 hover:bg-red-700 transition-all hover:transition-all rounded-md"
            >
              Sign In
            </button>

            <button className="px-2 py-1 m-2">Forgot Password?</button>
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
      {/* <div className="w-full h-[100px] bg-black"></div> */}
    </>
  );
};

export default Login;
