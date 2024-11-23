import { useMutation } from "@tanstack/react-query";
import { signupUser } from "../../api/SignupApiSlice";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const useSignUpForm = (reset) => {
  const navigate = useNavigate();
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
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    },
    onError: () => {
      toast({
        title: "Error Signing Up!",
        description: "User already exists with this email or username.",
        variant: "destructive",
      });
    },
  });

  return SignupUser;
};

export { useSignUpForm };
