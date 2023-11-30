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

export function useGetLandingPage() {
  const { data, isSuccess, isLoading, isError } = useQuery({
    queryKey: ["landingPage"],
    queryFn: fetchLandingPage,
    retry: 1,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (isSuccess) {
      localStorage.setItem("landingPageData", JSON.stringify(data.data)); // This serves as backup data if the request failed
    }
  }, [data, isSuccess]);

  return { data, isSuccess, isLoading, isError };
}
