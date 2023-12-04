import { useState } from "react";
import Carousel from "./Carousel";

export const Achievements = () => {
  const [selectedYear, setSelectedYear] = useState(2021);

  const handleSelectYear = (year: number) => {
    setSelectedYear(year);
  };

  const yearsDummyData = [
    {
      year: 2017,
    },
    {
      year: 2018,
    },
    {
      year: 2019,
    },
    {
      year: 2020,
    },
    {
      year: 2021,
    },
  ];

  const carouselDummyData = [
    {
      imageUrl:
        "https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature-1280x720.jpg",
      title: "Juara 1",
      desc: "Huawei ICT Competition Southern Pacific Regional Level 2019 Malaysia",
    },
    {
      imageUrl:
        "https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature-1280x720.jpg",
      title: "mountain_image2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      imageUrl:
        "https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature-1280x720.jpg",
      title: "mountain_image3",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
  ];

  return (
    <section className="container p-5 mx-auto space-y-20">
      <hgroup className="space-y-2 text-center">
        <h1 className="text-2xl font-bold md:text-4xl">Achievement 🎖️</h1>
        <h3>Apresiasi kepada asisten atas usahanya yang luar biasa.</h3>
      </hgroup>
      <div className="grid grid-cols-5 mx-5 md:mx-20">
        {yearsDummyData.map((year, index) => (
          <button
            className="space-y-3 group"
            onClick={() => handleSelectYear(year.year)}
            type="button"
            title="Select year"
            key={index}
          >
            <p
              className={`text-center text-sm nd:text-base transition-all duration-500 ease-in-out ${
                year.year === selectedYear
                  ? "text-black font-semibold scale-150"
                  : "text-gray-500 group-hover:scale-125"
              }`}
            >
              {year.year}
            </p>
            <div className="relative flex items-center justify-center">
              <div
                className={`z-10 md:w-3 w-2 rounded-full aspect-square transition-all duration-300 ease-in-out  ${
                  year.year === selectedYear
                    ? "scale-150 bg-black"
                    : "group-hover:scale-125 bg-gray-400"
                }`}
              ></div>
              <div className="absolute z-0 w-full bg-gray-400 border md:border-2 bottom-1/2"></div>
            </div>
          </button>
        ))}
      </div>
      <Carousel>
        {carouselDummyData &&
          carouselDummyData.map((carousel, index) => (
            <div
              key={index}
              className="flex-shrink-0 h-full overflow-hidden rounded slide snap-center w-[900px]"
            >
              <div className="flex h-full">
                <article className="space-y-4">
                  <h1 className="w-1/3 text-xl font-bold md:text-3xl text-blue-3">
                    {carousel.title}
                  </h1>
                  <p>{carousel.desc}</p>
                </article>
                <img
                  className="object-cover w-2/3 h-full rounded-xl"
                  src={carousel.imageUrl}
                  alt={carousel.title}
                />
              </div>
            </div>
          ))}
      </Carousel>
    </section>
  );
};
