import { createAxiosInstance } from "../utils/instance";

const axiosInstance = createAxiosInstance();

export const getUserDetails = async () => {
  try {
    const response = await axiosInstance.get("/users");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const get2FaStatus = async () => {
  try {
    const response = await axiosInstance.get("/users/2fa/getqr");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const set2FaStatus = async (data) => {
  try {
    const response = await axiosInstance.post("/users/2fa/set2fa", {
      otp: data.set_otp,
      secretToken: data.secretToken,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const remove2FaStatus = async (otp) => {
  try {
    const response = await axiosInstance.post("/users/2fa/remove2fa", {
      otp: otp,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
