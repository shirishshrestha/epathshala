import { Outlet } from "react-router-dom";
import { TeacherAppbar, TeacherSidebar } from "./components";
import { SidebarProvider } from "@/components/ui/sidebar";

const TeacherLayout = () => {
  return (
    <SidebarProvider className="flex ">
      <TeacherSidebar />
      <div className="w-full">
        <TeacherAppbar />
        <Outlet />
      </div>
    </SidebarProvider>
  );
};

export default TeacherLayout;
