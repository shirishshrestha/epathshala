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
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Modal } from "@/features/shared";
import { SignUpFormSchema } from "../schema/authSchema";

export default function SignupForm() {
  const {
    showPassword,
    togglePassword,
    showConfirmPassword,
    toggleConfirmPassword,
  } = useTogglePassword();

  const methods = useForm({
    resolver: zodResolver(SignUpFormSchema),
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const SignupFormSubmit = (data) => {
    console.log(data);
  };

  return (
    <Card className="mx-auto w-[33%] bg-secondary">
      <CardHeader className="text-center pb-[0.8rem]">
        <CardTitle className="text-4xl font-bold text-foreground tracking-tight">
          Join <span className="text-highlight">EPathshala</span> Today!
        </CardTitle>
        <CardDescription className=" text-foreground">
          Sign up now to unlock a world of learning opportunities
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FormProvider {...methods}>
          <form
            className="space-y-4 "
            onSubmit={handleSubmit(SignupFormSubmit)}
          >
            <div className="space-y-2">
              <Label htmlFor="full_name" className="text-foreground">
                Full name
              </Label>
              <Input
                id="full_name"
                name="fullName"
                placeholder={Modal.fullName.placeholder}
                errors={errors}
                required
              />
            </div>
            <div className="space-y-2">
              <Label className="text-foreground" htmlFor={Modal.email.name}>
                Email
              </Label>
              <Input
                id={Modal.email.name}
                name={Modal.email.name}
                type={Modal.email.type}
                placeholder={Modal.email.placeholder}
                errors={errors}
                required
              />
            </div>
            <div className="space-y-2">
              <Label className="text-foreground" htmlFor="password">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  errors={errors}
                  required
                />
                <Button
                  type="button"
                  size="icon"
                  variant="link"
                  onClick={togglePassword}
                  className="absolute inset-y-0 right-0 flex items-center border-none bg-transparent hover:bg-transparent "
                  required
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
              <Label className="text-foreground" htmlFor="confirm_password">
                Confirm Password
              </Label>
              <div className="relative">
                <Input
                  id="confirm_password"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Enter confirm password"
                  errors={errors}
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
            <Button className="w-full mt-6">Register</Button>
            <div className="mt-4 text-center text-destructive-foreground text-sm ">
              Already have an account?{" "}
              <Link to="/login" className="underline text-highlight">
                Login
              </Link>
            </div>
          </form>
        </FormProvider>
      </CardContent>
    </Card>
  );
}
