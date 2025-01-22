import { useQuery } from "@tanstack/react-query";
import { getRecommendedCourse } from "../../api/CoursesApiSlice";

export const useGetRecommendedCourse = (key) => {
  const { data, isPending } = useQuery({
    queryKey: [key],
    queryFn: () => getRecommendedCourse(),
  });

  return { data, isPending };
};
