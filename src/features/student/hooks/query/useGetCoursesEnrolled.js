import { useQuery } from "@tanstack/react-query";
import { getCoursesEnrolled } from "../../api/CoursesApiSlice";

export const useGetCoursesEnrolled = (key) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [key],
    queryFn: getCoursesEnrolled,
  });
  return { data, isLoading, isError };
};
