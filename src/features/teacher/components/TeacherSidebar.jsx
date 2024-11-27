import { logoLight } from "@/assets";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Logout } from "@/features/shared";
import { BookOpen, LayoutDashboard, Users } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const TeacherSidebar = () => {
  return (
    <div>
      <Sidebar className="p-[1rem] pr-2 border-none ">
        <SidebarHeader className="p-[1rem] flex items-center justify-center ">
          <img
            src={logoLight}
            alt="Logo"
            width={120}
            height={40}
            className=""
          />
        </SidebarHeader>
        <SidebarContent className="p-[1rem]">
          <SidebarMenu>
            <NavLink
              to="/teacher"
              className={({ isActive }) =>
                ` ${isActive && "bg-foreground text-primary"} rounded-md `
              }
            >
              <SidebarMenuItem>
                <LayoutDashboard />
                Dashboard
              </SidebarMenuItem>
            </NavLink>
            <Link href="/courses">
              <SidebarMenuItem>
                <BookOpen />
                Courses
              </SidebarMenuItem>
            </Link>
            <Link href="/organization">
              <SidebarMenuItem>
                <Users />
                Organizations
              </SidebarMenuItem>
            </Link>
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter className="p-[1rem]">
          <SidebarMenu>
            <SidebarMenuItem>
              <Logout />
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
    </div>
  );
};

export default TeacherSidebar;
