import { queryClient } from "@/features/shared";
import { toast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { deleteCourse } from "../../api/CourseApiSlice";

export const useDeleteCourse = (setDeleteAlert) => {
  const { mutate, isPending } = useMutation({
    mutationFn: (course_id) => deleteCourse(course_id),
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Course deleted successfully!",
        variant: "success",
        duration: 3000,
      });
      setDeleteAlert(false);
      queryClient.invalidateQueries("teacherCourses");
    },
  });

  return {
    mutate,
    isPending,
  };
};
