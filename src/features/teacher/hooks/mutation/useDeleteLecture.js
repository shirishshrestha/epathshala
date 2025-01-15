import { queryClient } from "@/features/shared";
import { useMutation } from "@tanstack/react-query";
import { deleteLecture } from "../../api/LectureApiSlice";
import { toast } from "@/hooks/use-toast";

export const useDeleteLecture = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: (lecture_id) => deleteLecture(lecture_id),
    onSuccess: () => {
      queryClient.invalidateQueries("courseGetLecture");
      toast({
        title: "Lecture Deleted!",
        description: "Lecture has been successfully deleted.",
        variant: "success",
      });
    },
  });

  return { mutate, isPending };
};
