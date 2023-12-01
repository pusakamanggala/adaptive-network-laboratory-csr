import ShofiaNaningImg from "../img/dr-shofia-naning.svg";
export const Quote = () => {
  return (
    <section className="pt-20">
      <div className="flex justify-center mx-5 bg-blue-main rounded-2xl">
        <div className="flex container flex-col items-center justify-end gap-3 lg:flex-row lg:h-[270px] h-[340px] xl:w-2/3 2xl:w-3/5">
          <img
            src={ShofiaNaningImg}
            alt="Dr. Sofia Naning Hertiana, Ir., M.T."
            className="h-auto lg:self-end w-60 md:w-72 lg:w-96"
          />
          <div className="m-3 text-center text-white space-y-7">
            <blockquote>
              <p className="text-base lg:text-xl md:text-lg">
                “Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus.”
              </p>
            </blockquote>
            <p className="text-lg lg:text-2xl md:text-xl">
              Dr. Sofia Naning Hertiana, Ir., M.T.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
