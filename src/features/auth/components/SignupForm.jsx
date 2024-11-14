import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTogglePassword } from "../hooks";
import { IoEye, IoEyeOff } from "react-icons/io5";

export default function SignupForm() {
  const {
    showPassword,
    togglePassword,
    showConfirmPassword,
    toggleConfirmPassword,
  } = useTogglePassword();

  return (
    <Card className="mx-auto w-[33%] bg-foreground">
      <CardHeader className="text-center pb-[0.8rem]">
        <CardTitle className="text-4xl font-bold text-primary tracking-tight">
          Join <span className="text-accent">EPathshala</span> Today!
        </CardTitle>
        <CardDescription className=" text-muted-foreground">
          Sign up now to unlock a world of learning opportunities
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="full_name">Full name</Label>
          <Input id="full_name" placeholder="John Doe" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="me@example.com"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
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
        <div className="space-y-2">
          <Label htmlFor="confirm_password">Confirm Password</Label>
          <div className="relative">
            <Input
              id="confirm_password"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Enter confirm password"
              required
            />
            <Button
              type="button"
              size="icon"
              variant="link"
              onClick={toggleConfirmPassword}
              className="absolute inset-y-0 right-0 flex items-center border-none bg-transparent hover:bg-transparent "
            >
              {showConfirmPassword ? (
                <IoEye className="h-5 w-5 text-gray-500" />
              ) : (
                <IoEyeOff className="h-5 w-5 text-gray-500" />
              )}
            </Button>
          </div>
        </div>
        <Button className="w-full">Register</Button>
        <div className="mt-4 text-center text-sm ">
          Already have an account?{" "}
          <Link to="/login" className="underline text-accent">
            Login
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
