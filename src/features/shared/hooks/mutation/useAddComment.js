import { useMutation } from "@tanstack/react-query";
import { addComment } from "../../api/CommentApiSlice";
import { queryClient } from "../../utils";

export const useAddComment = (reset, key, toggleReply, resetType) => {
  const { mutate, isPending } = useMutation({
    mutationFn: (data) => addComment(data),
    onSuccess: () => {
      reset();
      queryClient.invalidateQueries(key);
      resetType === "comment" ? null : toggleReply();
    },
  });

  return { mutate, isPending };
};
