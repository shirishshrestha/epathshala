import { logout as authLogout } from "@/features/auth/redux/authSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const useCrossTabLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const channel = new BroadcastChannel("auth-channel");

    channel.onmessage = (message) => {
      if (message.data === "logout") {
        dispatch(authLogout());
        navigate("/");
      }
    };

    return () => {
      channel.close();
    };
  }, [dispatch, navigate]);

  return (action) => {
    const channel = new BroadcastChannel("auth-channel");
    channel.postMessage(action);
    channel.close();
  };
};

export default useCrossTabLogout;
