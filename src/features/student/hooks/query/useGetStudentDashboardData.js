import { useQuery } from "@tanstack/react-query";
import { getDashboardData } from "../../api/DashboardApiSlice";

export const useGetStudentDashboardData = () => {
  const { data, isPending } = useQuery({
    queryKey: ["studentDashboardData"],
    queryFn: () => getDashboardData(),
  });

  return { data, isPending };
};
