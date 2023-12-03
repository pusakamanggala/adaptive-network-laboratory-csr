import { Link } from "react-router-dom";
import NotFoundImg from "../img/undraw_taken.svg";

export const PageNotFound = () => {
  return (
    <section className="h-[100dvh] flex md:flex-row flex-col items-center justify-center container p-5 text-center md:text-start md:gap-x-5 mx-auto">
      <img src={NotFoundImg} alt="" className="w-64 lg:w-96 aspect-square" />
      <hgroup>
        <h1 className="mb-2 text-5xl font-bold text-blue-main">404</h1>
        <h2 className="text-2xl font-medium text-blue-1">Page Not Found</h2>
        <p className="text-blue-1">
          The page you are looking for doesn't exist or an other error occured,{" "}
        </p>
        <p className="text-blue-1">
          go back to {""}
          <span>
            <Link to={"/"} className="underline ">
              home page
            </Link>
          </span>
        </p>
      </hgroup>
    </section>
  );
};
