import { useQuery } from "@tanstack/react-query";
import { getAllCourses } from "../../api/CoursesApiSlice";
import { useLocation } from "react-router-dom";

export const useGetAllCourses = (limit = 5, path = "/courses") => {
  const location = useLocation();

  const { data, isPending } = useQuery({
    queryKey: ["allcourses"],
    queryFn: () => getAllCourses(limit),
    enabled: location.pathname === path,
  });

  return { data, isPending };
};
