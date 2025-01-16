import { queryClient } from "@/features/shared";
import { useMutation } from "@tanstack/react-query";
import { addRating } from "../../api/CoursesApiSlice";
import { toast } from "@/hooks/use-toast";

export const useRateCourse = (key, courseId) => {
  const { mutate, isPending } = useMutation({
    mutationFn: (star) => addRating(star, courseId),
    onSuccess: () => {
      queryClient.invalidateQueries(key);
      toast({
        title: "Success!",
        description: "Rating added successfully",
        variant: "success",

        duration: 3000,
      });
    },
  });

  return { mutate, isPending };
};
