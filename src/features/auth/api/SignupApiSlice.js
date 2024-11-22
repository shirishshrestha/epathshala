import { instance } from "@/features/shared";

export const signupUser = async (data) => {
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
