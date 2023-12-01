import { Events } from "../components/Events";
import { HeroSection } from "../components/HeroSections";
import { useGetLandingPage } from "../hooks/useGetLandingPage";
import { VideoProfile } from "../components/VideoProfile";
import { LearningMaterial } from "../components/LearningMaterial";
import { Quote } from "../components/Quote";
import { FrequentlyAskedQuestions } from "../components/FrequentlyAskedQuestions";
import ErrorImage from "../img/undraw_bug_fixing.svg";

export const HomePage = () => {
  const { data: landingPageData, isError } = useGetLandingPage();
  const LoadingSkeleton = () => {
    return (
      <section className="container p-5 mx-auto space-y-20 md:space-y-0 hero-section animate-pulse">
        <div className="grid items-center pt-28 md:grid-cols-2 gap-7 md:py-40 lg:h-[100dvh] 2xl:h-auto">
          <div className="flex items-center justify-center">
            <div className="md:w-[550px] w-full h-[400px] bg-gray-300 rounded-md"></div>
          </div>
          <div className="text-center md:text-left">
            <div className="h-16 mb-5 bg-gray-300 rounded-md"></div>
            <div className="h-5 mb-2 bg-gray-300 rounded-md"></div>
            <div className="w-3/4 h-5 mb-5 bg-gray-300 rounded-md"></div>
            <div className="h-10 bg-gray-300 rounded-md w-36"></div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-8 md:flex-row">
          <div className="flex flex-col items-center md:items-start">
            <div className="h-12 mb-3 bg-gray-300 rounded-md w-36"></div>
            <div className="h-5 mb-2 bg-gray-300 rounded-md md:w-96 w-72"></div>
            <div className="h-5 bg-gray-300 rounded-md w-52"></div>
          </div>
          <div className="grid w-full gap-8 md:grid-cols-3 md:gap-4">
            {/* map card 3 array */}
            {[...Array(3)].map((_, index) => (
              <div
                className="flex flex-col items-center gap-2 text-center"
                key={index}
              >
                <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                <div className="w-24 h-4 bg-gray-300 rounded-md"></div>
                <div className="h-2 bg-gray-300 rounded-md w-52 md:w-full"></div>
                <div className="w-32 h-2 bg-gray-300 rounded-md"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  return (
    <>
      {!landingPageData &&
        // if there is no data from api and localstorage
        (isError ? (
          <div className="h-[100dvh] flex flex-col items-center justify-center">
            <img src={ErrorImage} alt="" className="w-64 mb-5" />
            <h1 className="text-xl font-bold text-blue-main">
              An error occurred :(
            </h1>
            <p>Please contact admin or try again later</p>
          </div>
        ) : (
          // if landingPageData is still null
          LoadingSkeleton()
        ))}
      {landingPageData && (
        <>
          <HeroSection />
          <Events eventData={landingPageData.kegiatan} />
          <VideoProfile />
          <LearningMaterial learningMaterialData={landingPageData.article} />
          <Quote quoteData={landingPageData.pembina} />
          <FrequentlyAskedQuestions
            frequentlyAskedQuestionsData={landingPageData.faq}
          />
        </>
      )}
    </>
  );
};
