import { eLearning, logoLight } from "@/assets";
import { LoginForm } from "../components";

const LoginPage = () => {
  return (
    <section className="w-full min-h-[100vh]  bg-mild flex flex-col items-center justify-center">
      <div className="grid grid-cols-[1fr,1.2fr] bg-white rounded-lg overflow-hidden w-[55%] shadow-lg">
        <figure className="relative">
          <div className="bg-muted-foreground/90 h-full w-full absolute z-10 flex flex-col gap-[1rem] justify-center items-center text-center px-[2rem] ">
            <img
              src={logoLight}
              loading="lazy"
              alt="logo"
              className="w-[200px]"
            />
            <figcaption className=" text-white text-[1.2rem] font-bold">
              <span className="text-white  block text-[1.4rem]">
                Empowering
              </span>{" "}
              learning through technology.
            </figcaption>
            <div className="text-mild font-[600] text-[1rem] leading-[150%]">
              <p>
                Explore, learn, and grow with EPathshala—your gateway to endless
                educational resources and interactive learning experiences.
              </p>
            </div>
          </div>
          <img
            src={eLearning}
            alt="Person using e-learning platform"
            loading="lazy"
            className=" h-full rounded-l-lg object-cover "
          />
        </figure>
        <LoginForm />
      </div>
      <div className="text-[12px] text-center mt-[1.5rem] text-primary">
        <p>
          Please contact the admin at{" "}
          <a
            href="mailto:admin@epathshala.com.np"
            target="_blank"
            className="text-accent"
          >
            admin@epathshala.com.np
          </a>{" "}
          for help.
        </p>
      </div>
    </section>
  );
};

export default LoginPage;
