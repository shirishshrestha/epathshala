import { logoLight } from "@/assets";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Loader, Logout } from "@/features/shared";
import { BookOpen, LayoutDashboard } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const TeacherSidebar = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div>
      {loading && <Loader />}
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
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter className="p-[1rem]">
          <SidebarMenu>
            <SidebarMenuItem>
              <Logout setLoading={setLoading} />
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
    </div>
  );
};

export default TeacherSidebar;
