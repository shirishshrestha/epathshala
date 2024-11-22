import { Toaster } from "@/components/ui/toaster";
import { SignupForm } from "../components";

const SignupPage = () => {
  return (
    <>
      <div className="flex w-full min-h-[100vh] justify-center items-center flex-col py-[3rem]">
        <SignupForm />
        <div className="text-[12px] text-center mt-[1.5rem] ">
          <p>
            Please contact the admin at{" "}
            <a
              href="mailto:admin@epathshala.com.np"
              target="_blank"
              className="text-highlight"
            >
              admin@epathshala.com.np
            </a>{" "}
            for help.
          </p>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default SignupPage;
