import { useMemo } from "react";
import { Events } from "../components/Events";
import { HeroSection } from "../components/HeroSections";
import { useGetLandingPage } from "../hooks/useGetLandingPage";
import { VideoProfile } from "../components/VideoProfile";
import { LearningMaterial } from "../components/LearningMaterial";
import { Quote } from "../components/Quote";
import { FrequentlyAskedQuestions } from "../components/FrequentlyAskedQuestions";

export type LandingPageData = {
  kegiatan: {
    uid: string;
    judul: string;
    descSingkat: string;
    hyperlink: string;
  }[];
  article: {
    judul: string;
    caption: string;
    hyperlink: string;
  }[];
  pembina: {
    uid: string;
    judul: string;
    isi: string;
    namaPembina: string;
    imageUrl: string;
  }[];
  faq: {
    uid: string;
    judul: string;
    isi: string;
  }[];
};

// export type for article
export type Article = LandingPageData["article"];

// export type for event
export type Event = LandingPageData["kegiatan"];

// export type for faq
export type FAQ = LandingPageData["faq"];

export const HomePage = () => {
  const { data, isSuccess, isError } = useGetLandingPage();

  const landingPageData = useMemo<LandingPageData | null>(() => {
    if (isSuccess) {
      // If the query is successful, use the fresh data
      return data.data;
    } else if (isError) {
      // If there's an error, retrieve data from local storage
      const localStorageData = localStorage.getItem("landingPageData");
      return localStorageData ? JSON.parse(localStorageData) : null;
    }
    // Default value if the query is error and there's no data in local storage
    return null;
  }, [data, isSuccess, isError]);

  return (
    <>
      {!landingPageData &&
        // if there is no data from api and localstorage
        (isError ? (
          <div className="h-[100dvh] flex items-center justify-center">
            <h1>Error...</h1>
          </div>
        ) : (
          // if landingPageData is still null
          <div className="h-[100dvh] flex items-center justify-center">
            <h1>Loading...</h1>
          </div>
        ))}
      {landingPageData && (
        <>
          <HeroSection />
          <Events eventData={landingPageData.kegiatan} />
          <VideoProfile />
          <LearningMaterial learningMaterialData={landingPageData.article} />
          <Quote />
          <FrequentlyAskedQuestions
            frequentlyAskedQuestionsData={landingPageData.faq}
          />
        </>
      )}
    </>
  );
};
