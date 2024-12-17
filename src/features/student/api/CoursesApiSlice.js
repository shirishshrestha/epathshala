import { createAxiosInstance } from "@/features/shared/utils/instance";

const instance = createAxiosInstance();

export const getCoursesEnrolled = async () => {
  try {
    const response = await instance.get("/course/enroll");
    return response.data;
  } catch (error) {
    throw error;
  }
};
