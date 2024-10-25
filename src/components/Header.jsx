import logo from "../../public/black white Thunder logo (1)-Photoroom.png"
const Header = () => {
  return (
    <div className="absolute px-8 py-2  z-10 w-full">
      <img
        src={logo}
        alt="logo"
        className="w-60"
      />
    </div>
  );
};

export default Header;
