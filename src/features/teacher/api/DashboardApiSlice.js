import { createAxiosInstance } from "@/features/shared/utils/instance";

const instance = createAxiosInstance();

export const getTeacherDashboardData = async () => {
  try {
    const response = await instance.get("/dashboard/teacher");
    return response.data;
  } catch (error) {
    throw error;
  }
};
