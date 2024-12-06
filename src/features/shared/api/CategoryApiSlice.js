import { createAxiosInstance } from "../utils/instance";

const instance = createAxiosInstance();

export const fetchCategories = async () => {
  try {
    const response = await instance.get("category");
    return response.data;
  } catch (error) {
    throw error;
  }
};
