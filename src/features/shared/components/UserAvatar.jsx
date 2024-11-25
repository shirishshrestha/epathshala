import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Loader, Logout } from ".";
import { LayoutDashboard, User } from "lucide-react";
import { useSelector } from "react-redux";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

function UserAvatar() {
  const userData = useSelector((state) => state.auth?.userData.data);
  const navigate = useNavigate();
  const [logoutLoading, setLogoutLoading] = useState(false);

  const getInitials = useMemo(
    () => (name) => {
      const parts = name.split(" ");
      return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
    },
    []
  );

  return (
    <div>
      {logoutLoading && <Loader />}
      <DropdownMenu className="mr-[2rem]">
        <DropdownMenuTrigger asChild>
          <Avatar className="cursor-pointer  ">
            <AvatarImage src={""} />
            <AvatarFallback>{getInitials(userData.fullname)}</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" sideOffset={10} className="w-[200px]">
          <DropdownMenuLabel>{userData.fullname}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <button
              className="display flex items-center justify-center gap-3 py-1"
              onClick={() =>
                userData.userType === "teacher"
                  ? navigate("/teacher/dashboard")
                  : navigate("/student/dashboard")
              }
            >
              <LayoutDashboard />
              Dashboard
            </button>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div className="display flex items-center justify-center gap-3 py-1">
              <User />
              Profile
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Logout setLoading={setLogoutLoading} />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default UserAvatar;
