import { useMutation } from "@tanstack/react-query";
import { signupUser } from "../../api/SignupApiSlice";
import { toast } from "@/hooks/use-toast";

const useSignUpForm = (reset) => {
  const SignupUser = useMutation({
    mutationFn: (data) => signupUser(data),
    onSuccess: () => {
      reset();
      toast({
        title: "Successfully Signed Up!",
        description:
          "Welcome aboard! Your account has been created successfully.",
        variant: "success",
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return SignupUser;
};

export { useSignUpForm };
