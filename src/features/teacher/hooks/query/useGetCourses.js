import { useQuery } from "@tanstack/react-query";
import { getCoursesByTeacher } from "../../api/CourseApiSlice";

export const useGetCourses = () => {
  const TeacherCourses = useQuery({
    queryKey: ["teacherCourses"],
    queryFn: () => getCoursesByTeacher(),
  });

  return TeacherCourses;
};
