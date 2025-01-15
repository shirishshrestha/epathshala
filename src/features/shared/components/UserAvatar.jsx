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
import { createContext, useContext, useMemo, useState } from "react";
import { Link } from "react-router-dom";

const UserAvatarContext = createContext();
const useUserAvatarContext = () => {
  const context = useContext(UserAvatarContext);
  if (!context) {
    throw new Error(
      "useUserAvatarContext must be used within a DrawerProvider"
    );
  }
  return context;
};

function UserAvatar({ children }) {
  const userData = useSelector((state) => state.auth?.userData?.data);

  const [logoutLoading, setLogoutLoading] = useState(false);

  const getInitials = useMemo(
    () => (name) => {
      const parts = name.split(" ");
      return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
    },
    []
  );

  return (
    <UserAvatarContext.Provider value={{ userData }}>
      <div>
        {logoutLoading && <Loader />}
        <DropdownMenu className="mr-[2rem]">
          <DropdownMenuTrigger asChild>
            <Avatar className="cursor-pointer  ">
              <AvatarImage src={""} />
              <AvatarFallback>{getInitials(userData?.fullname)}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            sideOffset={10}
            className="w-[200px] px-[0.8rem] py-[0.5rem]"
          >
            <DropdownMenuLabel>
              <div>{userData?.fullname}</div>
              <div className="mt-1">{userData?.email}</div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {children}
            <DropdownMenuItem>
              <Logout setLoading={setLogoutLoading} />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </UserAvatarContext.Provider>
  );
}

export default UserAvatar;

UserAvatar.Dashboard = function UserAvatarDashboard() {
  const { userData } = useUserAvatarContext();

  return (
    <Link to={`/${userData.userType}`}>
      <DropdownMenuItem>
        <button className="display flex items-center justify-center gap-3 py-1">
          <LayoutDashboard />
          Dashboard
        </button>
      </DropdownMenuItem>
    </Link>
  );
};

UserAvatar.Profile = function UserAvatarProfile() {
  return (
    <DropdownMenuItem>
      <div className="display flex items-center justify-center gap-3 py-1">
        <User />
        Profile Settings
      </div>
    </DropdownMenuItem>
  );
};
