import { instance } from "@/features/shared";

export const getAllCourses = async (limit) => {
  try {
    const response = await instance.get(
      `course/search?coursesPerPage=${limit}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
