import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useTogglePassword } from "../hooks";

export default function LoginForm() {
  const { showPassword, togglePassword } = useTogglePassword();

  return (
    <Card className="mx-auto w-full px-[0.5rem] bg-secondary text-foreground ">
      <CardHeader className=" text-center ">
        <CardDescription className="font-semibold text-foreground text-[1rem]">
          Welcome To
        </CardDescription>
        <CardTitle className="text-2xl text-center  font-[700]">
          EPathshala
        </CardTitle>
        <CardDescription className="text-foreground">
          Ready to elevate your learning? Log in to access your journey with
          EPathshala.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="Enter username or email" required />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
            </div>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                required
              />
              <Button
                type="button"
                size="icon"
                variant="link"
                onClick={togglePassword}
                className="absolute inset-y-0 right-0 flex items-center border-none bg-transparent hover:bg-transparent "
              >
                {showPassword ? (
                  <IoEye className="h-5 w-5 text-gray-500" />
                ) : (
                  <IoEyeOff className="h-5 w-5 text-gray-500" />
                )}
              </Button>
            </div>
          </div>
          <Button type="submit" className="w-full mt-[0.3rem]">
            Login
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="underline text-highlight">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
