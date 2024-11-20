import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { WebDev } from "@/assets";

const courses = [
  {
    id: 1,
    title: "Frontend React Mastery: Build Stunning Interfaces",
    description:
      "Learn to create dynamic and responsive web applications using React. Build stunning user interfaces tailored for Nepal's digital economy.",
    instructor: "Sujan Shrestha",
    price: 2999,
    tags: ["Frontend", "React", "Web Development"],
    badge: "INDEPTH",
  },
  {
    id: 2,
    title: "Java & DSA Mastery for Tech Enthusiasts",
    description:
      "Excel in coding interviews with a deep understanding of Java and Data Structures, tailored for Nepal's software industry.",
    instructor: "Prakash Adhikari",
    price: 4499,
    tags: ["Programming", "Problem Solving"],
    badge: "INDEPTH",
  },
  {
    id: 3,
    title: "Backend Development: Build Scalable Solutions",
    description:
      "Learn to create efficient and scalable backend systems using popular tools and technologies, empowering Nepal's digital transformation.",
    instructor: "Bikash Maharjan",
    price: 2999,
    tags: ["Web Development", "API Integration", "Databases"],
    badge: "INDEPTH",
  },
];

export default function CoursesLandingPage() {
  return (
    <div className="  p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-2">Our Courses</h1>
        <p className="text-lg mb-6">
          Explore courses from experienced, real-world experts.
        </p>

        <div defaultValue="popular" className="mb-6 flex ">
          <h5 className="text-xl font-semibold">Our popular courses</h5>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card
              key={course.id}
              className="bg-secondary text-primary-foreground overflow-hidden h-full border-0 flex flex-col justify-between"
            >
              <div className="relative">
                <img
                  src={WebDev}
                  alt={course.title}
                  className="w-full h-60 object-cover"
                />
                <Badge className="absolute top-4 right-4 bg-primary text-accent-foreground">
                  {course.badge}
                </Badge>
              </div>

              <div className="p-6 grid grid-rows-2">
                <div className="grid grid-rows-2 mb-3">
                  <h3 className="text-xl font-bold mb-1">{course.title}</h3>
                  <p className=" text-sm">{course.description}</p>
                </div>
                <div className="grid grid-rows-3">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {course.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-muted text-secondary-foreground"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex justify-between items-center mb-4">
                    <div className="text-sm ">
                      By
                      <span className="text-highlight pl-1">
                        {course.instructor}
                      </span>
                    </div>
                    <div className="text-xl font-bold">Rs. {course.price}</div>
                  </div>

                  <div className="flex gap-2 justify-between">
                    <Button
                      className="w-full hover:bg-violet-600 hover:text-foreground"
                      variant="ghost"
                    >
                      Buy Now
                    </Button>
                    <Button className="w-full" variant="bright">
                      Explore Course
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
