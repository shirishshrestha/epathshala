import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { FaChalkboardTeacher } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useSignUpForm, useTogglePassword } from "../hooks";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpFormSchema } from "../utils/authSchema";
import { Loader, Modal } from "@/features/shared";

export default function SignupForm() {
  const {
    showPassword,
    togglePassword,
    showConfirmPassword,
    toggleConfirmPassword,
  } = useTogglePassword();

  const form = useForm({
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      fullName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      user_role: "teacher",
    },
  });

  const signup = useSignUpForm(form.reset);

  const SignupFormSubmit = (data) => {
    console.log("Form Submitted: ", data);
    signup.mutate(data);
  };

  return (
    <Card className="mx-auto w-[40%] bg-secondary">
      {signup.isPending && <Loader />}
      <CardHeader className="text-center pb-[0.8rem]">
        <CardTitle className="text-4xl font-bold text-foreground tracking-tight">
          Join <span className="text-highlight">EPathshala</span> Today!
        </CardTitle>
        <CardDescription className=" text-foreground">
          Sign up now to unlock a world of learning opportunities
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(SignupFormSubmit)}
            className="space-y-4"
          >
            {/* Full Name */}
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">Full Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder={Modal.fullName.placeholder}
                      type={Modal.fullName.type}
                      name={Modal.fullName.name}
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Username */}
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">Username</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder={Modal.username.placeholder}
                      type={Modal.username.type}
                      name={Modal.username.name}
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      name={Modal.email.name}
                      type={Modal.email.type}
                      placeholder={Modal.email.placeholder}
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">Password</FormLabel>
                  <div className="relative">
                    <FormControl>
                      <Input
                        {...field}
                        name={Modal.password.name}
                        type={showPassword ? "text" : "password"}
                        placeholder={Modal.password.placeholder}
                        required
                      />
                    </FormControl>
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
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Confirm Password */}
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">
                    Confirm Password
                  </FormLabel>
                  <div className="relative">
                    <FormControl>
                      <Input
                        {...field}
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        required
                      />
                    </FormControl>
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
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* User Role */}
            <FormField
              control={form.control}
              name="user_role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">Sign up as</FormLabel>
                  <FormControl>
                    <RadioGroup
                      name="user_role"
                      onValueChange={field.onChange}
                      value={field.value}
                      className="flex text-foreground gap-6"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="teacher" id="teacher" />
                        <label
                          htmlFor="teacher"
                          className="flex gap-2 items-center text-[1rem] cursor-pointer"
                        >
                          <FaChalkboardTeacher className="text-[1rem]" />{" "}
                          Teacher
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="student" id="student" />
                        <label
                          htmlFor="student"
                          className="flex gap-2 items-center text-[1rem] cursor-pointer"
                        >
                          <PiStudentFill className="text-[1rem]" /> Student
                        </label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button type="submit" className="w-full">
              Register
            </Button>

            <div className="mt-4 text-center text-destructive-foreground text-sm">
              Already have an account?{" "}
              <Link to="/login" className="underline text-highlight">
                Login
              </Link>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
