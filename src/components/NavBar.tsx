import { useEffect, useState } from "react";
import ANLogo from "../img/an-logo.svg";
import { Link } from "react-router-dom";

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
    <header
      className={`fixed w-full z-50 transition-colors duration-300 ease-in-out ${
        isScrolled && !navbar && "bg-blue-main text-white"
      } `}
    >
      <div
        className={`container mx-auto ${
          navbar &&
          "h-[100dvh] min-[1080px]:h-auto bg-blue-main text-white mx-auto"
        }   min-[1080px]:flex min-[1080px]:items-center min-[1080px]:justify-between py-3`}
      >
        <div className="min-[1080px]:flex min-[1080px]:justify-between px-4">
          <div className="flex items-center justify-between min-[1080px]:block">
            <Link to={"/"} className="flex items-center gap-2">
              <img src={ANLogo} alt="" className="h-10 md:h-16 aspect-square" />
              <h1 className="lg:text-xl md:text-lg line-clamp-1">
                Adaptive Network Laboratory
              </h1>
            </Link>
            <button
              className="min-[1080px]:hidden"
              onClick={() => setNavbar(!navbar)}
              type="button"
              title={navbar ? "Close" : "Open Menu"}
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
            <li className="relative group">
              <button
                className="flex items-center gap-2"
                type="button"
                title="About"
              >
                <a href="#" className="line-clamp-1">
                  About Us
                </a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 transition-all duration-200 ease-linear group-active:translate-y-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
              <ul className="absolute right-0 z-10 invisible w-48 p-3 space-y-2 transition-all rounded-md shadow-md opacity-0 text-blue-main bg-blue-4 top-10 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1">
                <li>
                  <Link
                    to="/about/profile"
                    onClick={() => {
                      setNavbar(false);
                    }}
                    className="hover:underline"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => {
                      setNavbar(false);
                    }}
                    to="/about/member"
                    className="hover:underline"
                  >
                    Member
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => {
                      setNavbar(false);
                    }}
                    to="/about/alumni"
                    className="hover:underline"
                  >
                    Alumni
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                onClick={() => {
                  setNavbar(false);
                }}
                to="/program"
                className="hover:underline"
              >
                Program
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  setNavbar(false);
                }}
                to="/borrow-item"
                className="hover:underline"
              >
                Borrow item
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  setNavbar(false);
                }}
                to="/practicum"
                className="hover:underline"
              >
                Practicum
              </Link>
            </li>
            <li>
              <Link
                onClick={() => {
                  setNavbar(false);
                }}
                to="/research"
                className="hover:underline"
              >
                Research
              </Link>
            </li>
            <li className="relative group">
              <button className="flex items-center gap-2">
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
              </button>
              <ul className="absolute right-0 z-10 invisible w-48 p-3 space-y-2 transition-all rounded-md shadow-md opacity-0 text-blue-main bg-blue-4 top-10 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1">
                <li>
                  <Link
                    onClick={() => {
                      setNavbar(false);
                    }}
                    to="/login"
                    className="hover:underline"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => {
                      setNavbar(false);
                    }}
                    to="/certificate-verification"
                    className="hover:underline"
                  >
                    Verifikasi sertifikat
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
