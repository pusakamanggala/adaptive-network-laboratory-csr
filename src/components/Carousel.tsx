import { useRef, useEffect, useState } from "react";

type CarouselProps = {
  children: React.ReactNode;
};

const Carousel = ({ children }: CarouselProps) => {
  const slidesContainerRef = useRef<HTMLDivElement>(null);
  const [slideWidth, setSlideWidth] = useState<number | undefined>(undefined);

  const handleNext = () => {
    if (slidesContainerRef.current && slideWidth !== undefined) {
      slidesContainerRef.current.scrollLeft += slideWidth;
    }
  };

  const handlePrev = () => {
    if (slidesContainerRef.current && slideWidth !== undefined) {
      slidesContainerRef.current.scrollLeft -= slideWidth;
    }
  };

  useEffect(() => {
    const updatedSlideWidth =
      slidesContainerRef.current?.querySelector(".slide")?.clientWidth;
    if (updatedSlideWidth !== undefined) {
      setSlideWidth(updatedSlideWidth);
    }
  }, []);

  return (
    <div className="relative">
      <div
        ref={slidesContainerRef}
        className="slides-container h-72 flex snap-x snap-mandatory overflow-hidden overflow-x-auto space-x-5 rounded scroll-smooth before:w-[45vw] before:shrink-0 after:w-[45vw] after:shrink-0 md:before:w-0 md:after:w-0"
      >
        {/* {carouselData &&
          carouselData.map((carousel) => (
            <div
              className={`flex-shrink-0 h-full overflow-hidden rounded slide snap-center ${
                carousel.desc && carousel.title && "w-[900px]"
              } `}
            >
              <div className="flex h-full">
                {carousel.desc && carousel.title && (
                  <article className="space-y-4">
                    <h1 className="w-1/3 text-2xl font-bold text-blue-3">
                      {carousel.title}
                    </h1>
                    <p>{carousel.desc}</p>
                  </article>
                )}
                <img
                  className={`object-cover h-full rounded-xl ${
                    carousel.desc && carousel.title && "w-2/3"
                  }`}
                  src={carousel.imageUrl}
                />
              </div>
            </div>
          ))} */}
        {children}
      </div>
      <div className="absolute top-0 items-center hidden h-full -left-4 md:flex">
        <button
          onClick={handlePrev}
          className="px-2 py-2 rounded-full bg-neutral-100 text-neutral-900 group"
          type="button"
          title="previous"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 transition-all duration-200 ease-linear group-active:-translate-x-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
      </div>
      <div className="absolute top-0 items-center hidden h-full -right-4 md:flex">
        <button
          onClick={handleNext}
          className="px-2 py-2 rounded-full bg-neutral-100 text-neutral-900 group"
          type="button"
          title="next"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 transition-all duration-200 ease-linear group-active:-translate-x-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
