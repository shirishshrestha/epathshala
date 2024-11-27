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
import { BookOpen, LayoutDashboard, School } from "lucide-react";
import { NavLink } from "react-router-dom";

const TeacherSidebar = () => {
  return (
    <div>
      <Sidebar className="p-[1rem] pr-2 border-none ">
        <SidebarHeader className="p-[1rem] flex items-center justify-center ">
          <img src={logoLight} alt="Logo" width={140} className="" />
        </SidebarHeader>
        <SidebarContent className="p-[1rem]">
          <SidebarMenu>
            <NavLink
              to="/teacher"
              end
              className={({ isActive }) =>
                ` ${isActive && "bg-foreground text-primary"} rounded-md `
              }
            >
              <SidebarMenuItem>
                <LayoutDashboard />
                Dashboard
              </SidebarMenuItem>
            </NavLink>
            <NavLink
              to="/teacher/courses"
              className={({ isActive }) =>
                ` ${isActive && "bg-foreground text-primary"} rounded-md `
              }
            >
              <SidebarMenuItem>
                <BookOpen />
                My Courses
              </SidebarMenuItem>
            </NavLink>
            <NavLink
              to="/teacher/organizations"
              className={({ isActive }) =>
                ` ${isActive && "bg-foreground text-primary"} rounded-md `
              }
            >
              <SidebarMenuItem>
                <School />
                My Organizations
              </SidebarMenuItem>
            </NavLink>
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
