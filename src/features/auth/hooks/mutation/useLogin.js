import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../../api/LoginApiSlice";
import { useDispatch } from "react-redux";
import { login as authLogin } from "../../redux/authSlice";
import { toast } from "@/hooks/use-toast";

export const useLogin = () => {
  const dispatch = useDispatch();
  const LoginUser = useMutation({
    mutationFn: (data) => loginUser(data),
    onSuccess: (userData) => {
      dispatch(authLogin({ userData }));
    },
    onError: (error) => {
      toast({
        title: "Error Logging In!",
        description:
          error?.response?.data?.message ||
          "Invalid email/username or password.",
        variant: "destructive",
      });
    },
  });

  return LoginUser;
};
