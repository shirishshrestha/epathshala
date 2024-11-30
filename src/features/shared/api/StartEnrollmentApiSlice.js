import { instance } from "../utils";

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
