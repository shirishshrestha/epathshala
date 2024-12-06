import { createAxiosInstance } from "@/features/shared/utils/instance";

const instance = createAxiosInstance();

export const addCourse = async (courseData) => {
  try {
    const response = await instance.post("course", {
      title: courseData.title,
      subTitle: courseData.subtitle,
      level: courseData.level,
      category: courseData.category,
      description: courseData.description,
      thumbnail: courseData.thumbnail,
      price: courseData.pricing,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getCoursesByTeacher = async () => {
  try {
    const response = await instance.get("course/mycourses?coursePerPage=7");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getCoursesByTeacherId = async (id) => {
  try {
    const response = await instance.get(`course/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
