import { useMutation } from "@tanstack/react-query";
import { addCourse } from "../../api";
import { toast } from "@/hooks/use-toast";
import { useSelector } from "react-redux";

export const useAddCourse = () => {
  const token = useSelector((state) => state.auth?.userData?.data.token);

  const AddCourse = useMutation({
    mutationFn: (courseData) => addCourse(courseData, token),
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Course added successfully. ",
        variant: "success",
        duration: 3000,
      });
    },
    onError: (error) => {
      console.log(error);
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
