import { useQuery } from "@tanstack/react-query";
import { getCoursesByTeacher } from "../../api/CourseApiSlice";

export const useGetCourses = (key) => {
  const TeacherCourses = useQuery({
    queryKey: [key],
    queryFn: () => getCoursesByTeacher(),
  });

  return TeacherCourses;
};
