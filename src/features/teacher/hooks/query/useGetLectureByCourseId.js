import { useQuery } from "@tanstack/react-query";
import { getLectureByCourseId } from "../../api/LectureApiSlice";

export const useGetLectureByCourseId = (
  key = "courseGetLecture",
  course_id
) => {
  const { data, isPending } = useQuery({
    queryKey: [key, course_id],
    queryFn: () => getLectureByCourseId(course_id),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });

  return { data, isPending };
};
