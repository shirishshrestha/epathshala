import { useMutation } from "@tanstack/react-query";
import { toggleLikeOnVideo } from "../../api/VideoApiSlice";
import { queryClient } from "@/features/shared";

export const useToggleLikeOnVideo = (key) => {
  const { mutate, isPending } = useMutation({
    mutationFn: (data) => toggleLikeOnVideo(data.video_id, data.likeAction),
    onSuccess: () => {
      queryClient.invalidateQueries(key);
    },
  });

  return {
    mutate,
    isPending,
  };
};
