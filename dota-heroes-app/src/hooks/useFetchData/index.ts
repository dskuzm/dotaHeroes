// Core
import { useQuery } from "@tanstack/react-query";

const fetchData = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

const useFetchData = <T>(url: string) => {
  return useQuery<T>({
    queryKey: [url],
    queryFn: async () => await fetchData(url),
    staleTime: 1000000,
  });
};

export default useFetchData;
