import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useTogglePassword } from "../hooks";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormSchema } from "../utils/authSchema";

export default function LoginForm() {
  const { showPassword, togglePassword } = useTogglePassword();

  const form = useForm({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      emailUsername: "",
      password: "",
    },
  });

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
        <Form {...form}>
          <form onSubmit={form.handleSubmit()} className="grid gap-4">
            <FormField
              control={form.control}
              name="emailUsername"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email or Username</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      name="emailUsername"
                      placeholder="Enter username or email"
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <div className="relative">
                    <FormControl>
                      <Input
                        {...field}
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter password"
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

            <Button type="submit" className="w-full mt-[0.3rem]">
              Login
            </Button>
          </form>
        </Form>
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
