import { Accenture, Google, Infosys, Netflix } from "@/assets";
import {
  HeroSection,
  PopularCourses,
  TestimonialsSection,
} from "../components";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <PopularCourses />

      {/* our clients section */}
      <section className="w-full  py-10 md:py-16 lg:py-22">
        <div className="container mx-auto px-4 md:px-6">
          <div className="our__clients rounded-3xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center  ">
              Companies Trusting Our Talent
            </h2>
            <div className="flex justify-evenly flex-wrap gap-[2rem]">
              <div className="bg-primary flex items-center justify-center w-fit p-[2rem] rounded-xl">
                <img
                  src={Google}
                  alt="google-logo"
                  className="w-[12rem] object-cover"
                />
              </div>
              <div className="bg-primary flex items-center justify-center w-fit p-[2rem] rounded-xl">
                <img
                  src={Netflix}
                  alt="google-logo"
                  className="w-[12rem] object-cover"
                />
              </div>
              <div className="bg-primary flex items-center justify-center w-fit p-[2rem] rounded-xl">
                <img
                  src={Infosys}
                  alt="google-logo"
                  className="w-[12rem] object-cover"
                />
              </div>
              <div className="bg-primary flex items-center justify-center w-fit p-[2rem] rounded-xl">
                <img
                  src={Accenture}
                  alt="google-logo"
                  className="w-[12rem] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* CTA */}
      <section className="w-full py-10 md:py-16 lg:py-22 cta-bg text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Start Learning?
            </h2>
            <p className="mx-auto max-w-[600px] text-lg sm:text-xl">
              Join thousands of students who are already advancing their careers
              with EPathshala.
            </p>
            <Button size="lg" variant="ghost">
              Get Started Now <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
