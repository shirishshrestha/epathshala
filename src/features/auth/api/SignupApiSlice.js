
import { createAxiosInstance } from "@/features/shared/utils/instance";

export const signupUser = async (data) => {
  const instance = createAxiosInstance();
  try {
    const signup = await instance.post("users/register", {
      fullname: data.fullName,
      username: data.username,
      email: data.email,
      password: data.password,
      userType: data.user_role,
    });

    return signup.data;
  } catch (error) {
    throw new Error(error);
  }
};
