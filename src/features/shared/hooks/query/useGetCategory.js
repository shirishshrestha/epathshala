import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../../api";

export const useGetCategory = () => {
  const GetCategory = useQuery({
    queryKey: ["category"],
    queryFn: fetchCategories,
    refetchInterval: 3600 * 1000,
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false,
    refetchOnMount: false,
  });

  return GetCategory;
};
