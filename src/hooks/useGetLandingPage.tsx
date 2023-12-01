import { useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

async function fetchLandingPage() {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}landing-page/homepage`,
    {
      headers: {
        "x-api-key": `${import.meta.env.VITE_API_KEY}`,
      },
    }
  );
  return response.data;
}

type LandingPageData = {
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

function isValidLandingPageData<T>(
  data: T | null
): data is T & LandingPageData {
  return (
    data !== null &&
    typeof data === "object" &&
    Array.isArray((data as T & LandingPageData)?.kegiatan) &&
    Array.isArray((data as T & LandingPageData)?.article) &&
    Array.isArray((data as T & LandingPageData)?.pembina) &&
    Array.isArray((data as T & LandingPageData)?.faq)
  );
}

export function useGetLandingPage() {
  const [landingPageData, setLandingPageData] =
    useState<LandingPageData | null>(null);

  const { data, isSuccess, isLoading, isError } = useQuery({
    queryKey: ["landingPage"],
    queryFn: fetchLandingPage,
    retry: 1,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (isSuccess) {
      // If the query is successful, use the fresh data
      setLandingPageData(data.data);

      // Validate the structure of the retrieved data
      if (isValidLandingPageData(data.data)) {
        localStorage.setItem("landingPageData", JSON.stringify(data.data));
      } else {
        // If the structure is invalid, delete local storage
        localStorage.removeItem("landingPageData");
      }
    } else if (isError) {
      // If there's an error, and local storage has valid data, use it
      const localStorageData = localStorage.getItem("landingPageData");

      if (localStorageData) {
        try {
          const parsedData = JSON.parse(localStorageData);
          if (isValidLandingPageData(parsedData)) {
            setLandingPageData(parsedData as LandingPageData);
          } else {
            console.error("Invalid LandingPageData structure in localStorage.");
            // If the structure is invalid, delete local storage
            localStorage.removeItem("landingPageData");
          }
        } catch (error) {
          console.error("Error parsing data from local storage:", error);
          localStorage.removeItem("landingPageData");
        }
      }
    }
  }, [data, isSuccess, isError]);

  // Return the data (either from API or local storage)
  return { data: landingPageData, isSuccess, isLoading, isError };
}
