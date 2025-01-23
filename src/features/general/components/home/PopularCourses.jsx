import { TriangleCircle } from "@/assets";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useGetAllCourses } from "../../hooks";
import { Loader } from "@/features/shared";
import { Badge } from "@/components/ui/badge";

export const PopularCourses = () => {
  const navigate = useNavigate();

  const { data, isPending } = useGetAllCourses(3, "/", 1, "", "", "high");
  return (
    <section className="w-full py-10 md:py-16 lg:py-22 relative">
      {isPending && <Loader />}
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data?.data?.filteredCourse?.length > 0 &&
            data?.data?.filteredCourse?.map((course) => (
              <Card
                key={course._id}
                className="bg-secondary text-primary-foreground overflow-hidden h-full border-0 flex flex-col "
              >
                <div className="relative">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-60 object-cover"
                  />
                  <Badge className="absolute top-4 right-4 bg-primary text-accent-foreground">
                    INDEPTH
                  </Badge>
                </div>

                <div className="p-6 flex flex-col gap-4">
                  <div className="flex flex-col gap-2 mb-1">
                    <h3 className="text-xl font-bold mb-1">{course.title}</h3>
                    <h3 className="text-lg font-semibold mb-1">
                      {course.subTitle}
                    </h3>
                    <p className=" text-sm h-fit p-truncate">
                      {course.description &&
                        (course.description.length > 60
                          ? `${course.description.substring(0, 60)}...`
                          : course.description)}
                    </p>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-sm">
                        By
                        <span className="text-highlight pl-1">
                          {course.creator.username}
                        </span>
                      </div>
                      <div className="text-xl font-bold">
                        Rs. {course.price}
                      </div>
                    </div>

                    <div className="flex gap-2 justify-between">
                      <Button
                        className="w-full"
                        variant="bright"
                        onClick={() =>
                          navigate(`/course-details/${course._id}`)
                        }
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
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
