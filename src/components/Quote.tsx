import { Pembina } from "../hooks/useGetLandingPage";

type QuoteProps = {
  quoteData: Pembina;
};

export const Quote = ({ quoteData }: QuoteProps) => {
  return (
    <section className="pt-20">
      <div className="flex justify-center mx-5 bg-blue-main rounded-2xl">
        <div className="flex container flex-col items-center justify-end gap-3 lg:flex-row lg:h-[270px] h-[340px] xl:w-2/3 2xl:w-3/5">
          <img
            src={quoteData[0].imageUrl}
            alt="Dr. Sofia Naning Hertiana, Ir., M.T."
            className="h-auto lg:self-end w-60 md:w-72 lg:w-96"
          />
          <div className="m-3 text-center text-white space-y-7">
            <blockquote>
              <p className="text-base lg:text-xl md:text-lg">
                "{quoteData[0].isi}"
              </p>
            </blockquote>
            <p className="text-lg lg:text-2xl md:text-xl">
              {quoteData[0].namaPembina}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
