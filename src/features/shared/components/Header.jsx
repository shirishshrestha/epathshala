import { logoLight } from "@/assets";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { UserAvatar } from ".";

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);

  return (
    <header className="absolute   top-0 z-50 px-[2rem] py-[1rem] w-full  bg-transparent shadow-xl">
      <div className="container mx-auto  flex items-center ">
        <Link href="/" className="flex items-center space-x-2">
          <img src={logoLight} alt="logo" className="w-[150px] object-cover" />
        </Link>
        <nav className="ml-auto flex gap-[2rem] sm:gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${
                isActive ? "border-b-[5px] border-accent shadow-xl " : ""
              } rounded-lg px-4 py-2 text-foreground font-[600] transition-all hover:border-b-[5px] hover:border-accent hover:shadow-xl `
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/courses"
            className={({ isActive }) =>
              `${
                isActive ? "border-b-[5px] border-accent shadow-xl" : ""
              } rounded-lg px-4 py-2 text-foreground font-[600] transition-all hover:border-b-[5px] hover:border-accent hover:shadow-xl`
            }
          >
            Courses
          </NavLink>
          <NavLink
            to="/organizations"
            className={({ isActive }) =>
              `${
                isActive ? "border-b-[5px] border-accent shadow-xl" : ""
              } rounded-lg px-4 py-2 text-foreground font-[600] transition-all hover:border-b-[5px] hover:border-accent hover:shadow-xl`
            }
          >
            Organizations
          </NavLink>
        </nav>
        {!authStatus ? (
          <div className="ml-4 space-x-2 flex gap-[0.5rem]">
            <Link to="/login">
              <Button
                variant="link"
                className="text-foreground border-b-[5px] font-[600] text-[16px]"
              >
                Login
              </Button>
            </Link>

            <Link to="/signup">
              <Button variant="ghost" className="font-[600] text-[16px]">
                Sign Up
              </Button>
            </Link>
          </div>
        ) : (
          <div className="pl-[1rem]">
            <UserAvatar />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
