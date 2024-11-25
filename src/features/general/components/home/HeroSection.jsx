import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useAnimatedWords } from "../../hooks";
import { Search } from "lucide-react";
import { Triangle, Triangle2, TriangleCircle } from "@/assets";
import { BackgroundBlur } from "../BackgroundBlur";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const words = ["Future", "Success", "Growth", "Knowledge"];

export const HeroSection = () => {
  const currentWord = useAnimatedWords(words, 2000);
  const authStatus = useSelector((state) => state.auth.status);

  return (
    <>
      <section className="relative min-h-[90vh] mx-auto w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-primary/80 text-primary-foreground overflow-hidden flex justify-center items-center">
        <BackgroundBlur
          className="bg-accent -right-[10%] top-[-5%] w-72 h-72"
          initialPosition={{ x: "-10%", y: "-10%" }}
          animate={{ x: "0%", y: "0%" }}
        />
        <BackgroundBlur
          className="bg-chart-4 w-64 h-64 top-0 left-0"
          initialPosition={{ x: "-50%", y: "-50%" }}
          animate={{ x: "-45%", y: "-45%" }}
        />

        <div className="container mx-auto pt-[4.5rem] px-4 md:px-6 ">
          <div className="flex flex-col items-center space-y-4 text-center relative z-10">
            <motion.div
              className="absolute top-[-10%] left-[5%]"
              animate={{
                y: [0, 10, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 4,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            >
              <img src={TriangleCircle} alt="triangle-circle" />
            </motion.div>
            <motion.div
              className="absolute bottom-[-10%] right-[5%]"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 8,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              <img src={Triangle} alt="triangle-circle" />
            </motion.div>
            <motion.div
              className="absolute bottom-[-40%] right-[40%]"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 8,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              <img src={Triangle2} alt="triangle-circle" />
            </motion.div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Empower Your{" "}
              <span className="relative inline-block text-highlight">
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
              with EPathshala{" "}
              <span className="text-highlight text-[2rem]">●</span>
            </h1>

            <p className="mx-auto max-w-[700px] text-lg sm:text-xl">
              Unlock your potential with our cutting-edge online courses. Learn
              from industry experts and advance your career.
            </p>
            <div className="w-[40%] mx-auto flex gap-2 bg-white rounded-full p-2">
              <Input
                className="rounded-2xl border-0 focus-visible:ring-0 text-primary"
                placeholder="Find & Choose your perfect course"
              />
              <Button className="bg-accent hover:bg-violet-600 rounded-full ">
                <Search className="h-4 w-4 " />
                Search
              </Button>
            </div>

            <div className="space-x-4 flex pt-[1rem]">
              {!authStatus && (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="ghost"
                    size="lg"
                    className="text-primary-foreground "
                  >
                    Get Started
                  </Button>
                </motion.div>
              )}
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/courses">
                  <Button variant="ghost" size="lg" className="bg-violet-600">
                    Explore Courses
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <BackgroundBlur
        className="bg-chart-2 w-96 h-96 "
        initialPosition={{ x: "80%", y: "80%" }}
        animate={{ x: "100%", y: "100%" }}
      />
    </>
  );
};
