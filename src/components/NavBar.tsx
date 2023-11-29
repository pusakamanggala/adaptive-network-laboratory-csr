import { useEffect, useState } from "react";
import ANLogo from "../img/an-logo.svg";

export const NavBar = () => {
  const [navbar, setNavbar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className={`w-full ${
        navbar && "h-[100dvh] min-[1080px]:h-auto bg-blue-main text-white"
      } ${
        isScrolled && !navbar && "bg-blue-main text-white"
      } fixed z-50 min-[1080px]:flex min-[1080px]:items-center min-[1080px]:justify-between py-3 md:px-20 px-5 transition-colors duration-300 ease-in-out`}
    >
      <div className="min-[1080px]:flex min-[1080px]:justify-between px-4">
        <div className="flex items-center justify-between min-[1080px]:block">
          <div className="flex items-center gap-2">
            <img src={ANLogo} alt="" className="md:h-16 h-10 aspect-square" />
            <h1 className="lg:text-xl md:text-lg">
              Adaptive Network Laboratory
            </h1>
          </div>
          <button
            className="min-[1080px]:hidden"
            onClick={() => setNavbar(!navbar)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={`${
                  navbar
                    ? "M6 18L18 6M6 6l12 12"
                    : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                }`}
              />
            </svg>
          </button>
        </div>
      </div>
      <nav
        className={`pb-3 mt-8 min-[1080px]:block min-[1080px]:pb-0 min-[1080px]:mt-0 ${
          navbar ? "block" : "hidden"
        }`}
      >
        <ul className="w-full space-y-8 flex flex-col min-[1080px]:flex-row justify-end items-end min-[1080px]:space-x-6 min-[1080px]:space-y-0 text-lg min-[1080px]:text-base pr-7 min-[1080px]:pr-0">
          <li className="flex gap-2 items-center">
            <a href="#">About Us</a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </li>
          <li>
            <a href="#">Program</a>
          </li>
          <li>
            <a href="#">Borrow item</a>
          </li>
          <li>
            <a href="#">Practicum</a>
          </li>
          <li>
            <a href="#">Research</a>
          </li>
          <li className="flex gap-2 items-center">
            <a href="#">Others</a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </li>
        </ul>
      </nav>
    </section>
  );
};
