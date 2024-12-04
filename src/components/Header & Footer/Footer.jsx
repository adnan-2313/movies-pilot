const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bottom-0 font-DMSANS w-full h-18 py-5 z-[100] bg-[rgba(0,0,0,0.95)] text-center text-white">
      <h3 className="sm:text-md font-bold text-gray-400">
        <div>
          Built by <span className="text-white">Adnan Khan </span> ©{" "}
          {currentYear}
        </div>
        <div>
          The source code is available on{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/adnan-2313/movies-pilot"
            className="text-white underline"
          >
            adnan-2313/movies
          </a>
        </div>
      </h3>
    </footer>
  );
};

export default Footer;
