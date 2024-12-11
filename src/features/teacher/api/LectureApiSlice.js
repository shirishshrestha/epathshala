import { createAxiosInstance } from "@/features/shared/utils/instance";

const instance = createAxiosInstance();

export const getLectureByCourseId = async (course_id) => {
  try {
    const response = await instance.get(`videos?courseId=${course_id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const uploadLecture = async (lectureData, course_id) => {
  const formData = new FormData();
  formData.append("title", lectureData.title);
  formData.append("description", lectureData.description);
  formData.append("video", lectureData.video[0]);
  formData.append("course", course_id);

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
