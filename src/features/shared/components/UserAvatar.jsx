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
import { User } from "lucide-react";
import { useSelector } from "react-redux";
import { useState } from "react";

function UserAvatar() {
  const userName = useSelector((state) => state.auth.userData.data.username);
  const [logoutLoading, setLogoutLoading] = useState(false);

  const getInitials = (name) => {
    const parts = name.split(" ");
    return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
  };
  return (
    <div>
      {logoutLoading && <Loader />}
      <DropdownMenu className="mr-[2rem]">
        <DropdownMenuTrigger asChild>
          <Avatar className="cursor-pointer  ">
            <AvatarImage src={""} />
            <AvatarFallback>{getInitials(userName)}</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" sideOffset={10} className="w-[200px]">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
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
