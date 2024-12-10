import { useMutation } from "@tanstack/react-query";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { queryClient } from "@/features/shared";
import { editCourse } from "../../api/CourseApiSlice";

export const useEditCourse = (key, course_id) => {
  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationFn: (updatedCourseData) => editCourse(updatedCourseData, course_id),
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Course updated successfully!",
        variant: "success",
        duration: 3000,
      });
      queryClient.invalidateQueries(key);
      setTimeout(() => {
        navigate(`/teacher/courses`);
      }, 2000);
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

  return {
    mutate,
    isPending,
  };
};
