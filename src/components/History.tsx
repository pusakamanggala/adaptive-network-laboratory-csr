import CoreNetworkImg from "../img/core_network.svg";
import DatacommImg from "../img/datacomm.svg";
import ANLabImg from "../img/an-lab.svg";

export const History = () => {
  return (
    <section className="container p-5 mx-auto space-y-10">
      <hgroup className="space-y-2 text-center md:text-start">
        <h1 className="text-2xl font-semibold md:text-4xl text-blue-3">
          Sejarah
        </h1>
        <h3>Adaptive Netwok Laboratory</h3>
      </hgroup>
      <div className="relative grid px-5 md:px-12 md:grid-cols-2 gap-x-10 gap-y-20">
        <div className="absolute left-0 h-full border-2 border-blue-3 md:left-1/2"></div>
        <div className="hidden md:block">
          {/* empty div to skip the grid */}
        </div>
        <div className="space-y-5">
          <h3 className="px-10 bg-gray-200 rounded-md w-fit">2015</h3>
          <p>
            Dengan nama Core Network Laboratory, berfokus pada penelitian
            tentang Network Function Virtualization.
          </p>
          <img
            src={DatacommImg}
            alt="datacomm_research_group"
            className="w-auto h-32 mx-auto"
          />
        </div>
        <div className="space-y-5">
          <h3 className="px-10 bg-gray-200 rounded-md md:ml-auto w-fit">
            2017
          </h3>
          <p className="md:text-end">
            Dengan nama Core Network Laboratory, berfokus pada penelitian
            tentang Network Function Virtualization.
          </p>
          <img
            src={CoreNetworkImg}
            alt="core_network"
            className="w-auto h-32 mx-auto"
          />
        </div>
        <div className="hidden md:block">
          {/* empty div to skip the grid */}
        </div>
        <div className="hidden md:block">
          {/* empty div to skip the grid */}
        </div>
        <div className="space-y-5">
          <h3 className="px-10 bg-gray-200 rounded-md w-fit">2019</h3>
          <p>
            Terjadi pergantian dan peresmian nama menjadi Adaptive Network
            Laboratory, yang berfokus pada perkembangan future network.
          </p>
          <img
            src={ANLabImg}
            alt="adaptive_network_laboratory"
            className="w-auto h-32 mx-auto"
          />
        </div>
      </div>
    </section>
  );
};
