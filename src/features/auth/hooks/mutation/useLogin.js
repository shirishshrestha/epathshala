import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../../api/LoginApiSlice";
import { useDispatch } from "react-redux";
import { login as authLogin } from "../../redux/authSlice";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const LoginUser = useMutation({
    mutationFn: (data) => loginUser(data),
    onSuccess: (userData) => {
      dispatch(authLogin({ userData }));
      toast({
        title: "Logged In Successfully!",
        description: "Welcome back! You have been logged in successfully.",
        variant: "success",
      });
      setTimeout(() => {
        navigate("/");
      }, 2000);
    },
    onError: () => {
      toast({
        title: "Error Logging In!",
        description: "Invalid email/username or password.",
        variant: "destructive",
      });
    },
  });

  return LoginUser;
};
