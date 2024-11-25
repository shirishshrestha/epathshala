import { TriangleCircle, WebDev } from "@/assets";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { Clock, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const courses = [
  {
    id: 1,
    title: "Web Development Fundamentals",
    description: "Learn the basics of HTML, CSS, and JavaScript",
  },
  {
    id: 2,
    title: "Data Science Essentials",
    description: "Introduction to data analysis and machine learning",
  },
  {
    id: 3,
    title: "Mobile App Development",
    description: "Build cross-platform apps with React Native",
  },
];

export const PopularCourses = () => {
  return (
    <section className="w-full py-10 md:py-16 lg:py-22 relative">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl relative font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
          <motion.div
            className="absolute top-[-10%] left-[30%]"
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
          </motion.div>{" "}
          Popular Courses
        </h2>
        <div className="grid grid-cols-custom justify-center items-center gap-6">
          {courses.map((course) => (
            <Card
              key={course.id}
              className="bg-secondary text-foreground  backdrop:blur-xl"
            >
              <CardHeader>
                <CardTitle>{course.title}</CardTitle>
                <CardDescription className="text-foreground">
                  {course.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src={WebDev}
                  alt={`${course.title} thumbnail`}
                  width={400}
                  height={200}
                  className="rounded-lg object-cover w-full h-[200px]"
                />
              </CardContent>
              <CardFooter className="flex flex-col items-start">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold  ">Rs. 999</span>
                </div>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm ">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>12 weeks • 36 hours of content</span>
                  </div>
                  <div className="flex items-center text-sm ">
                    <GraduationCap className="h-4 w-4 mr-2" />
                    <span>Beginner Level • Certificate Included</span>
                  </div>
                </div>

                <Button className="w-full">Learn More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-10 text-center  flex items-center justify-center">
          <Link to="/courses">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button variant="ghost" size="lg" className="w-fit">
                View All Courses
              </Button>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
};
