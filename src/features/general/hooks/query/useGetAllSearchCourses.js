import { useQuery } from "@tanstack/react-query";
import { getAllSearchCourses } from "../../api/CoursesApiSlice";

export const useGetAllSearchCourses = (
  limit = 5,
  page = 1,
  searchItem = ""
) => {
  const { data, isFetching } = useQuery({
    queryKey: ["searchCourses", page, searchItem],
    queryFn: () => getAllSearchCourses(limit, page, searchItem),
    enabled: !!searchItem,
  });

  return { data, isFetching };
};
