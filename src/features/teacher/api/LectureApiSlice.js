import { createAxiosInstance } from "@/features/shared/utils/instance";

const instance = createAxiosInstance();

export const uploadLecture = async (lectureData) => {
  const formData = new FormData();
  formData.append("title", lectureData.title);
  formData.append("description", lectureData.description);
  formData.append("video", lectureData.video[0]);
  formData.append("course", "674ad061d137eb2801c8f1f4");

  try {
    const response = await instance.post("videos", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
