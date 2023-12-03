import { AboutUs } from "../components/AboutUs";
import { Achievements } from "../components/Achievements";
import { History } from "../components/History";
import { VisionAndMission } from "../components/VisionAndMission";

export const Profile = () => {
  return (
    <>
      <AboutUs />
      <VisionAndMission />
      <History />
      <Achievements />
    </>
  );
};
