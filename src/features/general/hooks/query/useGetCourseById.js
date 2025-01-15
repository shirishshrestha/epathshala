import { useQuery } from "@tanstack/react-query";
import { getCourseById } from "../../api/CoursesApiSlice";

export const useGetCourseById = (id) => {
  const { data, isPending } = useQuery({
    queryKey: ["course-details"],
    queryFn: () => getCourseById(id),
  });

  return { data, isPending };
};
