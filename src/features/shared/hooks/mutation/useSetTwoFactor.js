import { useMutation } from "@tanstack/react-query";
import { set2FaStatus } from "../../api/UserApiSlice";
import { queryClient } from "../../utils";
import { toast } from "@/hooks/use-toast";

export const useSetTwoFactor = (key, setDisplayQr) => {
  const { mutate, isPending } = useMutation({
    mutationFn: (data) => set2FaStatus(data),
    onSuccess: () => {
      setDisplayQr(false);
      toast({
        title: "Success",
        description: "Two factor authentication enabled",
        variant: "success",
      });
      queryClient.invalidateQueries(key);
    },
    onError: () => {
      toast({
        title: "Error",
        description:
          "Failed to enable two factor authentication. Please try again",
        variant: "destructive",
      });
    },
  });

  return { mutate, isPending };
};
