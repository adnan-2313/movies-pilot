import Header from "./Header";

const Login = () => {
  return (
    <div className="flex justify-center bg-[#00000088] h-[100vh]">
      <Header />
      <div className="">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_medium.jpg"
          alt=""
          className="absolute z-[-1] backdrop-blur-[50px]"
        />
      </div>
      <div className="w-full  flex justify-center items-center">
        <form className="relative w-[34%] rounded-md mt-[100px]  text-white flex flex-col   bg-[#000000b2] p-12">
          <h1 className="text-3xl font-bold m-2">Sign In</h1>
          <input
            type="text"
            placeholder="Email or mobile number "
            className="p-4  m-2 bg-[#000000c9] border-[1px] border-gray-700 rounded-md"
          />
          <input
            type="text"
            placeholder="Password"
            className="p-4 m-2 bg-[#000000c9] border-[1px] border-gray-700 rounded-md"
          />
          <button className="p-2 m-2  bg-red-600 hover:bg-red-700 transition-all hover:transition-all rounded-md">Sign In</button>
          <h1 className="p-2 m-2 mx-auto">OR</h1>
          <button className="p-2 m-2  bg-[#ffffff56] rounded-md">
            Use a sign in code
          </button>
          <button className="p-2 m-2">Forgot Password?</button>
          <h1 className="m-2 p-1">
            <input type="checkbox" className="transition-all" /> Remember me
          </h1>
          <h1 className="m-2 p-1">
            {" "}
            <span className="text-gray-500">New Netflix ? </span> Sign up now
          </h1>
        </form>
      </div>
    </div>
  );
};

export default Login;
