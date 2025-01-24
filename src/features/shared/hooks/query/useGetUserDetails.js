import { useQuery } from "@tanstack/react-query";
import { getUserDetails } from "../../api/UserApiSlice";

export const useGetUserDetails = (key) => {
  const { data, isPending } = useQuery({
    queryKey: [key],
    queryFn: () => getUserDetails(),
  });

  return { data, isPending };
};
