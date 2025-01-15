import { createAxiosInstance } from "../utils/instance";

const instance = createAxiosInstance();

export const getComments = async (comment_on_ref) => {
  try {
    const response = await instance.get(
      `comments?comment_on_ref=${comment_on_ref}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addComment = async (data) => {
  try {
    const response = await instance.post("comments", {
      content: data.comment,
      comment_on: data.comment_on,
      comment_on_ref: data.comment_on_ref,
      parent_comment_ref: data.parent_comment_ref || null,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
