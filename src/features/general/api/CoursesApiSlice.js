import { createAxiosInstance } from "@/features/shared/utils/instance";

const axiosInstance = createAxiosInstance();

export const getAllCourses = async (limit) => {
  try {
    const response = await axiosInstance.get(
      `course/search?coursesPerPage=${limit}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getCourseById = async (id) => {
  try {
    const response = await axiosInstance.get(`course/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addRating = async (star, courseId) => {
  try {
    const response = await axiosInstance.post(`rating`, {
      star: star,
      course: courseId,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
