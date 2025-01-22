import { createAxiosInstance } from "@/features/shared/utils/instance";

const instance = createAxiosInstance();

export const getDashboardData = async () => {
  try {
    const response = await instance.get("/dashboard/student");
    return response.data;
  } catch (error) {
    throw error;
  }
};
