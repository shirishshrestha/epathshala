import { SignupForm } from "../components";

const SignupPage = () => {
  return (
    <>
      <div className="flex w-full h-[100vh] justify-center items-center flex-col">
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
    </>
  );
};

export default SignupPage;
