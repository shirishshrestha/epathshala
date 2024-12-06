import { createAxiosInstance } from "../utils/instance";

const instance = createAxiosInstance();

export const startEnrollment = async (courseId) => {
  try {
    const response = await instance.post(`course/enroll/startenroll`, {
      courses: [courseId],
      paymentMethod: "Esewa",
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
