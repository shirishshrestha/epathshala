import { useQuery } from "@tanstack/react-query";
import { getComments } from "../../api/CommentApiSlice";

export const useGetComments = (key, comment_on_ref) => {
  const { data, isFetching } = useQuery({
    queryKey: [key, comment_on_ref],
    queryFn: () => getComments(comment_on_ref),
    enabled: !!comment_on_ref,
  });

  return { data, isFetching };
};
