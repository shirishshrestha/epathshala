import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";
import { StudentAppbar, StudentSidebar } from "./components";

const StudentLayout = () => {
  return (
    <SidebarProvider className="flex ">
      <StudentSidebar />
      <div className="w-full">
        <StudentAppbar />
        <Outlet />
      </div>
    </SidebarProvider>
  );
};

export default StudentLayout;
