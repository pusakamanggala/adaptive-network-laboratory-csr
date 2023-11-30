import ShofiaNaningImg from "../img/dr-shofia-naning.svg";
export const Quote = () => {
  return (
    <section className="pt-20">
      <div className="flex lg:flex-row flex-col gap-3 items-center justify-end bg-blue-main px-4 xl:px-36 md:mx-10 lg:mx-14 xl:mx-20 rounded-2xl lg:h-[270px] h-[340px]">
        <img
          src={ShofiaNaningImg}
          alt="Dr. Sofia Naning Hertiana, Ir., M.T."
          className="h-auto lg:self-end w-60 md:w-72 lg:w-96"
        />
        <div className="m-3 text-center text-white space-y-7">
          <blockquote>
            <p className="text-base lg:text-xl md:text-lg">
              “Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus
              mus.”
            </p>
          </blockquote>
          <p className="text-lg lg:text-2xl md:text-xl">
            Dr. Sofia Naning Hertiana, Ir., M.T.
          </p>
        </div>
      </div>
    </section>
  );
};
