import { useQuery } from "@tanstack/react-query";
import { get2FaStatus } from "../../api/UserApiSlice";

export const useGetTwoFactor = (key, ProfileData) => {
  const { data, isPending } = useQuery({
    queryKey: [key],
    queryFn: () => get2FaStatus(),
    enabled: !ProfileData?.data?.use2fa,
  });

  return { data, isPending };
};
