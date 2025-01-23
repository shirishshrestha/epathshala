import { useQuery } from "@tanstack/react-query";
import { getRecommendedCourse } from "../../api/CoursesApiSlice";

export const useGetRecommendedCourse = (key) => {
  const { data, isPending } = useQuery({
    queryKey: [key],
    queryFn: () => getRecommendedCourse(),
    retry: 1,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });

  return { data, isPending };
};
