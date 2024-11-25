import { logout as authLogout } from "@/features/auth/redux/authSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useCrossTabLogout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const channel = new BroadcastChannel("auth-channel");

    channel.onmessage = (message) => {
      if (message.data === "logout") {
        dispatch(authLogout());
      }
    };

    return () => {
      channel.close();
    };
  }, [dispatch]);

  return (action) => {
    const channel = new BroadcastChannel("auth-channel");
    channel.postMessage(action);
    channel.close();
  };
};

export default useCrossTabLogout;
