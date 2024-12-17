import { useQuery } from "@tanstack/react-query";
import { getCoursesEnrolled } from "../../api/CoursesApiSlice";

export const useGetCoursesEnrolled = (key) => {
  const { data, isPending, isError } = useQuery({
    queryKey: [key],
    queryFn: getCoursesEnrolled,
  });
  return { data, isPending, isError };
};
