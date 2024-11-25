import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { LogOut } from "lucide-react";
import { useDispatch } from "react-redux";
import { logout as authLogout } from "@/features/auth/redux/authSlice";
import { useCrossTabLogout } from "../hooks";

function Logout({ setLoading }) {
  const dispatch = useDispatch();
  const broadcastLogout = useCrossTabLogout();

  const handleLogoutClick = () => {
    setLoading(true);
    setTimeout(() => {
      dispatch(authLogout());
      broadcastLogout("logout");
      setLoading(false);
    }, 2000);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button
          className="display flex items-center gap-3 py-1  w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <LogOut /> Logout
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Confirm <span className="font-bold text-highlight">Logout</span>
          </AlertDialogTitle>
          <AlertDialogDescription>
            You&apos;re about to log out. Do you want to proceed?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Stay Logged In</AlertDialogCancel>
          <AlertDialogAction onClick={handleLogoutClick}>
            Log Out
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default Logout;
