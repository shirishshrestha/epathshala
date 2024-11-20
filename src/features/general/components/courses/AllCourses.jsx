import { ChevronDown, Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { WebDev } from "@/assets";
import { Link } from "react-router-dom";

const topics = [
  { name: "Python" },
  { name: "JavaScript" },
  { name: "Java" },
  { name: "Web Development" },
  { name: "WordPress" },
  { name: "C# (programming language)" },
  { name: "HTML" },
  { name: "PHP (programming language)" },
  { name: "React JS" },
  { name: "Machine Learning" },
  { name: "Android Development" },
  { name: "SQL" },
  { name: "Data Science" },
  { name: "Google Flutter" },
];

const subcategories = [
  { name: "Web Development" },
  { name: "Programming Languages" },
  { name: "Data Science" },
  { name: "Mobile Development" },
  { name: "Game Development" },
  { name: "Software Engineering" },
  { name: "Database Design & Development" },
  { name: "Software Development Tools" },
  { name: "Software Testing" },
  { name: "No-Code Development" },
];
export default function AllCourses() {
  const courses = [
    {
      id: 1,
      title: "The Complete Python Bootcamp From Zero to Hero in Python",
      description:
        "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games",
      instructor: "Bikash Maharjan and team",
      price: 2999,
      duration: "15 total hours",
      lectures: "23 lectures",
      bestseller: false,
    },
    {
      id: 2,
      title: "The Complete 2024 Web Development Bootcamp",
      description:
        "Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps",
      instructor: "Sujan Shrestha",
      price: 4999,
      duration: "10 total hours",
      lectures: "37 lectures",
      bestseller: true,
    },
  ];

  return (
    <div className="p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4">All Development courses</h1>

        <Card className="p-4 mb-8 flex items-center gap-2 bg-foreground">
          <Info className="h-5 w-5 text-muted-foreground" />
          <p className="text-muted-foreground">
            Not sure? All courses have a 30-day money-back guarantee
          </p>
        </Card>

        <div className="flex gap-8">
          <div className="w-96 max-h-[600px] overflow-y-scroll flex-shrink-0 pr-[0.5rem] filter__section">
            <div className="flex  gap-4 mb-8">
              <Button variant="outline" className="w-full ">
                Filter
              </Button>
              <Select defaultValue="recent" className="bg-accent">
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Most Recent</SelectItem>
                  <SelectItem value="oldest">Oldest</SelectItem>
                  <SelectItem value="low_cost">Lowest Cost</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-6">
              <Collapsible>
                <CollapsibleTrigger className="flex items-center justify-between w-full">
                  <h3 className="text-lg font-semibold">Topic</h3>
                  <ChevronDown className="h-4 w-4" />
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-2 mt-2">
                  {topics.map((topic) => (
                    <label key={topic.name} className="flex items-center gap-2">
                      <Checkbox />
                      <span className="flex-1">{topic.name}</span>
                    </label>
                  ))}
                </CollapsibleContent>
              </Collapsible>

              <Collapsible>
                <CollapsibleTrigger className="flex items-center justify-between w-full">
                  <h3 className="text-lg font-semibold">Subcategory</h3>
                  <ChevronDown className="h-4 w-4" />
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-2 mt-2">
                  {subcategories.map((subcategory) => (
                    <label
                      key={subcategory.name}
                      className="flex items-center gap-2"
                    >
                      <Checkbox />
                      <span className="flex-1">{subcategory.name}</span>
                    </label>
                  ))}
                </CollapsibleContent>
              </Collapsible>

              <Collapsible>
                <CollapsibleTrigger className="flex items-center justify-between w-full">
                  <h3 className="text-lg font-semibold">Price</h3>
                  <ChevronDown className="h-4 w-4" />
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-2 mt-2">
                  <label className="flex items-center gap-2">
                    <Checkbox />
                    <span className="flex-1">Paid</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <Checkbox />
                    <span className="flex-1">Free</span>
                  </label>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>

          <div className="flex-1">
            <Link to="" className="space-y-6">
              {courses.map((course) => (
                <Card
                  key={course.id}
                  className="flex gap-4 p-4 bg-secondary text-foreground"
                >
                  <img
                    src={WebDev}
                    alt={course.title}
                    className="rounded-lg w-[240px] h-[155px] object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">{course.title}</h3>
                    <p className="text-sm  mb-2">{course.description}</p>
                    <p className="text-sm  mb-2">{course.instructor}</p>

                    <div className="text-sm ">
                      {course.duration} • {course.lectures}
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-between">
                    <span className="text-xl font-bold">
                      Rs. {course.price}
                    </span>
                    {course.bestseller && (
                      <Badge
                        variant="secondary"
                        className="bg-highlight text-primary"
                      >
                        Bestseller
                      </Badge>
                    )}
                  </div>
                </Card>
              ))}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
