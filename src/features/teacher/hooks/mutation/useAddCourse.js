import { useMutation } from "@tanstack/react-query";
import { toast } from "@/hooks/use-toast";
import { addCourse } from "../../api/CourseApiSlice";

export const useAddCourse = (setLectureAlert, setCourseId) => {
  const AddCourse = useMutation({
    mutationFn: (courseData) => addCourse(courseData),
    onSuccess: (data) => {
      setLectureAlert(true);
      setCourseId(data?.data._id);
    },
    onError: (error) => {
      toast({
        title: "Error!",
        description:
          error?.response?.data.message ||
          "Something went wrong! Please try again",
        variant: "destructive",
        duration: 3000,
      });
    },
  });

  return AddCourse;
};
