import NetSchoolIcon from "../icons/Graph.svg";
import { Event } from "../pages/HomePage";

type EventsProps = {
  eventData: Event;
};

export const Events = ({ eventData }: EventsProps) => {
  return (
    <section className="bg-blue-main md:p-20 md:mx-10 lg:mx-14 xl:mx-20 p-10 rounded-2xl">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
        <div className="space-y-3 text-center md:text-start flex flex-col justify-center">
          <h2 className="text-blue-3 text-2xl font-medium">Adaptive Network</h2>
          <h1 className="text-white text-4xl font-semibold">Our Event</h1>
          <p className="text-white">
            Cari tau kegiatan apa saja yang ada di Adaptive Network Laboratory.
          </p>
        </div>
        {eventData.map((eventData) => (
          <div
            key={eventData.uid}
            className="p-5 bg-white/10 rounded-lg space-y-5"
          >
            <div className="space-y-2">
              <img
                src={NetSchoolIcon}
                alt={eventData.judul + "_icon"}
                className="w-14 aspect-square"
              />
              <h1 className="text-white text-xl font-medium">
                {eventData.judul}
              </h1>
            </div>
            <div>
              <p className="text-white line-clamp-2">{eventData.descSingkat}</p>
              <button
                className="text-blue-3 hover:underline"
                type="button"
                title="read more"
              >
                Lanjut baca
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
