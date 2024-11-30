import { instance } from "@/features/shared";

/* eslint-disable no-useless-catch */
export const addCourse = async (courseData, token) => {
  try {
    const response = await instance.post(
      "course",
      {
        title: courseData.title,
        subTitle: courseData.subtitle,
        level: courseData.level,
        category: "6748462d6e31dc4935015ee7",
        description: courseData.description,
        thumbnail: "https://picsum.photos/500/300",
        price: courseData.pricing,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
