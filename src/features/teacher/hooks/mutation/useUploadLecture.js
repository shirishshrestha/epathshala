import { uploadLecture } from "../../api/LectureApiSlice";
import { useMutation } from "@tanstack/react-query";
import { toast } from "@/hooks/use-toast";
import { useParams } from "react-router-dom";
import { queryClient } from "@/features/shared";

export const useUploadLecture = (
  setDisableAddLecture,
  formIndex,
  remove,
  reset
) => {
  const { course_id } = useParams();

  const UploadLecture = useMutation({
    mutationFn: (lectureData) => uploadLecture(lectureData, course_id),
    onSuccess: () => {
      setDisableAddLecture(false);
      reset();
      remove(formIndex);
      queryClient.invalidateQueries("courseGetLecture");
      toast({
        title: "Success!",
        description:
          "Lecture uploaded successfully! Add more by clicking on the Add Lecture button",
        variant: "success",
        duration: 3000,
      });
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

  return UploadLecture;
};
