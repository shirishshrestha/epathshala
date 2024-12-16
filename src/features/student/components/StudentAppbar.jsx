import { SidebarTrigger } from "@/components/ui/sidebar";
import { UserAvatar } from "@/features/shared";
import { Link } from "react-router-dom";

const StudentAppbar = () => {
  return (
    <div className="p-[1rem] ">
      <div className="flex justify-between items-center rounded-md bg-secondary shadow-xl p-4 ">
        <SidebarTrigger />
        <nav className=" flex gap-[2rem] sm:gap-6">
          <Link
            to="/"
            className={({ isActive }) =>
              `${
                isActive ? "border-b-[5px] border-accent shadow-xl " : ""
              } rounded-lg px-4 py-2 text-foreground font-[600] transition-all hover:border-b-[5px] hover:border-accent hover:shadow-xl `
            }
          >
            Home
          </Link>
          <Link
            to="/courses"
            className={({ isActive }) =>
              `${
                isActive ? "border-b-[5px] border-accent shadow-xl" : ""
              } rounded-lg px-4 py-2 text-foreground font-[600] transition-all hover:border-b-[5px] hover:border-accent hover:shadow-xl`
            }
          >
            Explore Courses
          </Link>
        </nav>
        <div>
          <UserAvatar>
            <UserAvatar.Profile />
          </UserAvatar>
        </div>
      </div>
    </div>
  );
};

export default StudentAppbar;
