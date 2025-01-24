import { createAxiosInstance } from "@/features/shared/utils/instance";

export const loginUser = async (data) => {
  const instance = createAxiosInstance();
  try {
    const response = await instance.post("users/login", {
      usernameOrEmail: data.emailUsername,
      password: data.password,
      otp: data.otp,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
