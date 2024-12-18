import { createAxiosInstance } from "@/features/shared/utils/instance";

const instance = createAxiosInstance();

export const toggleLikeOnVideo = async (video_id, likeAction) => {
  try {
    const response = await instance.post(`/likes/video/${video_id}`, {
      action: likeAction,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
