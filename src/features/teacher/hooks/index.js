import { useAddCourse } from "./mutation/useAddCourse";
import { useDeleteCourse } from "./mutation/useDeleteCourse";
import { useEditCourse } from "./mutation/useEditCourse";
import { useUploadLecture } from "./mutation/useUploadLecture";
import { useGetCourseById } from "./query/useGetCourseById";
import { useGetCourses } from "./query/useGetCourses";

export {
  useAddCourse,
  useGetCourses,
  useGetCourseById,
  useUploadLecture,
  useEditCourse,
  useDeleteCourse,
};
