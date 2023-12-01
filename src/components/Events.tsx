import NetSchoolIcon from "../icons/Graph.svg";
import { Event } from "../hooks/useGetLandingPage";

type EventsProps = {
  eventData: Event;
};

export const Events = ({ eventData }: EventsProps) => {
  return (
    <section className="p-10 mx-5 bg-blue-main rounded-2xl md:p-14">
      <div className="container grid p-5 mx-auto md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
        <div className="flex flex-col justify-center space-y-1 text-center md:space-y-2 md:text-start">
          <h2 className="text-xl font-medium md:text-2xl text-blue-3">
            Adaptive Network
          </h2>
          <h1 className="text-3xl font-semibold text-white md:text-4xl">
            Our Event
          </h1>
          <p className="text-white">
            Cari tau kegiatan apa saja yang ada di Adaptive Network Laboratory.
          </p>
        </div>
        {eventData.map((eventData) => (
          <div
            key={eventData.uid}
            className="p-5 space-y-5 rounded-lg bg-white/10"
          >
            <div className="space-y-2">
              <img
                src={NetSchoolIcon}
                alt={eventData.judul + "_icon"}
                className="w-14 aspect-square"
              />
              <h1 className="text-xl font-medium text-white">
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
