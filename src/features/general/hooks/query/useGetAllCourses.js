import { useQuery } from "@tanstack/react-query";
import { getAllCourses } from "../../api/CoursesApiSlice";
import { useLocation } from "react-router-dom";

export const useGetAllCourses = (
  limit = 5,
  path = "/courses",
  page = "",
  level = "",
  category = "",
  rating = "",
  searchItem = ""
) => {
  const location = useLocation();

  const { data, isPending } = useQuery({
    queryKey: ["allcourses", page, level, category, rating, searchItem],
    queryFn: () =>
      getAllCourses(limit, page, level, category, rating, searchItem),
    enabled: location.pathname === path,
  });

  return { data, isPending };
};
