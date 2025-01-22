import { useQuery } from "@tanstack/react-query";
import { getTeacherDashboardData } from "../../api/DashboardApiSlice";

export const useGetTeacherDashboardData = () => {
  const { data, isPending } = useQuery({
    queryKey: ["teacherDashboardData"],
    queryFn: () => getTeacherDashboardData(),
  });

  return { data, isPending };
};
