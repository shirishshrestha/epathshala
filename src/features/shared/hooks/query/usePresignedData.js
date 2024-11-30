import { useQuery } from "@tanstack/react-query";
import { getPresignedUrlForImage } from "../../api";

export const useGetPresignedData = (folder) => {
  const PresignedData = useQuery({
    queryKey: ["presignedData"],
    queryFn: () => getPresignedUrlForImage(folder),
    refetchInterval: 3600 * 1000,
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false,
    refetchOnMount: false,
  });

  return PresignedData;
};
