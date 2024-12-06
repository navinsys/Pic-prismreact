const Footer = () => {
  return (
    <footer className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-4 mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-8 h-8 text-white p-1 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl text-white">Picprism</span>
        </div>
        <p className="text-sm">
          © 2024 PICPRISM —{" "}
          <a
            href="https://x.com/NavinSingh43356"
            className="text-gray-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            @NAVIN
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
