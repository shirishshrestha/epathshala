import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useAnimatedWords } from "../../hooks";

const words = ["Future", "Success", "Growth", "Knowledge"];

export const HeroSection = () => {
  const currentWord = useAnimatedWords(words, 2000);
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h1 className="text-3xl relative font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Empower Your{" "}
            <span className="relative inline-block">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWord}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.9 }}
                  transition={{ duration: 0.8 }}
                >
                  {currentWord}
                </motion.span>
              </AnimatePresence>
            </span>{" "}
            with EPathshala
          </h1>
          <p className="mx-auto max-w-[700px] text-lg sm:text-xl">
            Unlock your potential with our cutting-edge online courses. Learn
            from industry experts and advance your career.
          </p>
          <div className="space-x-4">
            <Button
              variant="outline"
              size="lg"
              className="text-primary-foreground"
            >
              Get Started
            </Button>
            <Button variant="ghost" size="lg">
              Explore Courses
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
