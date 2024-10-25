import logo from "../../public/logo.png";
const Header = () => {
  return (
    <div className="absolute px-16 py-8  z-10 w-full max-w-[80rem]">
      <img src={logo} alt="logo" className="w-60" />
    </div>
  );
};

export default Header;
