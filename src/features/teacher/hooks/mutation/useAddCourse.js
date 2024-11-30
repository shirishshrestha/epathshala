import { useMutation } from "@tanstack/react-query";
import { toast } from "@/hooks/use-toast";
import { useSelector } from "react-redux";
import { addCourse } from "../../api/CourseApiSlice";

export const useAddCourse = (setLectureAlert) => {

  const AddCourse = useMutation({
    mutationFn: (courseData) => addCourse(courseData),
    onSuccess: () => {
      setLectureAlert(true);
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
