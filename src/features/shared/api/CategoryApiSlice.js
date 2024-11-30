import { instance } from "../utils";

export const fetchCategories = async () => {
  try {
    const response = await instance.get("category");
    return response.data;
  } catch (error) {
    throw error;
  }
};
