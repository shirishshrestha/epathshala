import { useSelector } from "react-redux";
import { uploadLecture } from "../../api/LectureApiSlice";
import { useMutation } from "@tanstack/react-query";
import { toast } from "@/hooks/use-toast";

export const useUploadLecture = (
  setDisableAddLecture,
  formIndex,
  remove,
  reset
) => {

  const UploadLecture = useMutation({
    mutationFn: (lectureData) => uploadLecture(lectureData),
    onSuccess: () => {
      setDisableAddLecture(false);
      reset();
      remove(formIndex);
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
