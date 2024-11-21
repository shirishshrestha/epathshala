import { useMutation } from "@tanstack/react-query";
import { signupUser } from "../../api/SignupApiSlice";

const useSignUpForm = () => {
  const SignupUser = useMutation({
    mutationFn: (data) => signupUser(data),
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return SignupUser;
};

export { useSignUpForm };
