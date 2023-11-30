import ANLogo from "../img/an-logo.svg";
import linkedinIcon from "../icons/linkedin.svg";
import lineIcon from "../icons/line.svg";
import ytIcon from "../icons/youtube.svg";
import igIcon from "../icons/instagram.svg";
import { Event } from "../pages/HomePage";

type EventData = {
  eventData: Event;
};

export const Footer = ({ eventData }: EventData) => {
  return (
    <footer className="bg-[#2D2727] px-10 md:px-20 lg:px-36 py-11 space-y-7">
      <div className="flex flex-row items-center gap-5 text-xl border-b pb-7 border-white/50">
        <img src={ANLogo} alt="" className="h-10 md:h-16 aspect-square" />
        <h1 className="font-semibold text-white">
          Adaptive Network Laboratory
        </h1>
      </div>
      <div className="flex flex-col justify-end gap-5 text-white border-b md:gap-10 md:flex-row pb-7 text-end border-white/50">
        <div>
          <h2 className="mb-2 text-xl font-bold">Location</h2>
          <a
            href="https://maps.app.goo.gl/2vimFiorkYrVqXzg6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline"
          >
            Telkom University Bandung, Gedung TULT Ruang 13.13
          </a>
        </div>
        <div>
          <h2 className="mb-2 text-xl font-bold">Let's Connect</h2>
          <ul className="flex justify-end gap-3">
            <li>
              <a
                href="https://www.youtube.com/channel/UCD6F6tTTTP3_zA7hanwdx-Q/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={ytIcon} alt="" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/adaptive-network-laboratory/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedinIcon} alt="" />
              </a>
            </li>
            <li>
              <a
                href="http://line.me/ti/p/~@qka3787h"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={lineIcon} alt="" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/adaptivenetlab/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={igIcon} alt="" />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-2 text-xl font-bold">Events</h2>
          <ul className="space-y-1 text-lg">
            {eventData.map((event) => (
              <li key={event.uid}>
                <a
                  href={event.hyperlink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {event.judul}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-2 text-xl font-bold">Laboratory</h2>
          <ul className="space-y-1 text-lg">
            <li>Profile Laboratory</li>
            <li>Member</li>
            <li>Research Activity</li>
            <li>Contributor Website</li>
          </ul>
        </div>
      </div>
      <div>
        <p className="text-white">© 2023 - Adaptive Network Laboratory.</p>
      </div>
    </footer>
  );
};
