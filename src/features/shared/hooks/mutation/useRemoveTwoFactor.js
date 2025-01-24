import { useMutation } from "@tanstack/react-query";
import { remove2FaStatus } from "../../api/UserApiSlice";
import { queryClient } from "../../utils";
import { toast } from "@/hooks/use-toast";

export const useRemoveTwoFactor = (key, setRemoveTwofa) => {
  const { mutate, isPending } = useMutation({
    mutationFn: (otp) => remove2FaStatus(otp),
    onSuccess: () => {
      setRemoveTwofa(false);
      queryClient.invalidateQueries(key);
      toast({
        title: "Success",
        description: "Two factor authentication disabled",
        variant: "success",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description:
          "Failed to disable two factor authentication. Please try again",
        variant: "destructive",
      });
    },
  });
  return { mutate, isPending };
};
