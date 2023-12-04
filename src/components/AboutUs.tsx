import EditIcon from "../icons/Edit.svg";
import UserIcon from "../icons/2User.svg";
import Carousel from "./Carousel";

export const AboutUs = () => {
  const carouselDummyDataImageOnly = [
    {
      imageUrl:
        "https://img.antaranews.com/cache/1200x800/2023/11/24/jokowi-1ab.jpg.webp",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/6263568/pexels-photo-6263568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },

    {
      imageUrl:
        "https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature-1280x720.jpg",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/6263568/pexels-photo-6263568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/6263568/pexels-photo-6263568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/6263568/pexels-photo-6263568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <section className="container p-5 mx-auto space-y-20 ">
      <hgroup className="space-y-5 text-center lg:w-3/5 md:w-4/5 md:text-start">
        <h1 className="text-2xl font-semibold text-blue-main md:text-4xl">
          About Us
        </h1>
        <p className="leading-5 md:text-justify">
          Adaptive Network Laboratory adalah laboratorium yang melakukan
          eksplorasi di bidang core network. Selain aktif dalam kegiatan riset,
          lab kami juga memfasilitasi untuk kegiatan praktikum Jaringan Komputer
          dan Data.
        </p>
      </hgroup>
      <div className="grid gap-10 md:grid-cols-2">
        <div className="flex flex-col justify-between gap-5 p-5 bg-black/5 rounded-xl">
          <div>
            <img
              src={EditIcon}
              alt="praktikum_icon"
              className="w-16 aspect-square"
            />
            <h1 className="text-xl font-semibold text-blue-main">Praktikum</h1>
          </div>
          <p className="text-gray-500">
            Praktikum mata kuliah Jaringan Komputer dan Komunikasi Data.
          </p>
          <a href="" className="text-blue-3 hover:underline">
            Lanjut baca
          </a>
        </div>
        <div className="flex flex-col gap-5 p-5 bg-black/5 rounded-xl">
          <div>
            <img
              src={UserIcon}
              alt="riset_icon"
              className="w-16 aspect-square"
            />
            <h1 className="text-xl font-semibold text-blue-main">Riset</h1>
          </div>
          <p className="text-gray-500">
            Cari tau topik riset yang sedang dieksplorasi oleh asisten.
          </p>
          <a href="" className="text-blue-3 hover:underline">
            Lanjut baca
          </a>
        </div>
      </div>
      <Carousel>
        {carouselDummyDataImageOnly &&
          carouselDummyDataImageOnly.map((carousel, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-auto h-full overflow-hidden rounded slide snap-center"
            >
              <img
                className="object-cover h-full rounded-xl"
                src={carousel.imageUrl}
                alt={"image_" + index + 1}
              />
            </div>
          ))}
      </Carousel>
    </section>
  );
};
