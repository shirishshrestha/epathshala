import { useAddCourse } from "./mutation/useAddCourse";
import { useDeleteCourse } from "./mutation/useDeleteCourse";
import { useDeleteLecture } from "./mutation/useDeleteLecture";
import { useEditCourse } from "./mutation/useEditCourse";
import { useUploadLecture } from "./mutation/useUploadLecture";
import { useGetCourseById } from "./query/useGetCourseById";
import { useGetCourses } from "./query/useGetCourses";
import { useGetLectureByCourseId } from "./query/useGetLectureByCourseId";

export {
  useAddCourse,
  useGetCourses,
  useGetCourseById,
  useUploadLecture,
  useEditCourse,
  useDeleteCourse,
  useGetLectureByCourseId,
  useDeleteLecture,
};
