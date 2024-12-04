import { useQuery } from "@tanstack/react-query";
import { getCoursesByTeacherId } from "../../api/CourseApiSlice";

export const useGetCourseById = (key, id) => {
  const TeacherCourses = useQuery({
    queryKey: [key, id],
    queryFn: () => getCoursesByTeacherId(id),
  });

  return TeacherCourses;
};
