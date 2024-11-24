import { instance } from "@/features/shared";

export const loginUser = async (data) => {
  try {
    const response = await instance.post("users/login", {
      usernameOrEmail: data.emailUsername,
      password: data.password,
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
