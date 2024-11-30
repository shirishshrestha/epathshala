import { ChevronDown, Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";
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
import { Link } from "react-router-dom";
import { useGetAllCourses } from "../../hooks";
import { Loader } from "@/features/shared";

const category = [
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
  const { data: AllCourses, isPending: isCoursesPending } = useGetAllCourses();

  return (
    <div className="p-8">
      {isCoursesPending && <Loader />}
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4">All Development courses</h1>

        <Card className="p-4 mb-8 flex items-center gap-2 bg-foreground">
          <Info className="h-5 w-5 text-muted-foreground" />
          <p className="text-muted-foreground">
            Not sure? All courses have a 30-day money-back guarantee
          </p>
        </Card>

        <div className="flex gap-8 ">
          <div className="w-96 h-fit overflow-y-scroll flex-shrink-0 p-[1rem] rounded-lg shadow-lg filter__section bg-secondary">
            <h3 className="mb-6 font-semibold text-[1.2rem]">Filter by</h3>
            <div className="flex  gap-4 mb-8">
              {/* <Button variant="outline" className="w-full ">
                Filter
              </Button> */}
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
                  <h3 className="text-lg font-semibold">Category</h3>
                  <ChevronDown className="h-4 w-4" />
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-2 mt-2">
                  {category.map((topic) => (
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
                  {/* {subcategories.map((subcategory) => (
                    <label
                      key={subcategory.name}
                      className="flex items-center gap-2"
                    >
                      <Checkbox />
                      <span className="flex-1">{subcategory.name}</span>
                    </label>
                  ))} */}
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
              {AllCourses?.data?.filteredCourse.map((course) => (
                <Card
                  key={course._id}
                  className="flex gap-4 p-4 shadow-lg bg-secondary text-foreground"
                >
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="rounded-lg w-[240px] h-[155px] object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">{course.title}</h3>
                    <h6 className="text-[1.05rem] font-bold mb-1">
                      {course.subTitle}
                    </h6>
                    <p className="text-sm  mb-2">
                      {course.description &&
                        (course.description.length > 80
                          ? `${course.description.substring(0, 80)}...`
                          : course.description)}
                    </p>
                    <p className="text-sm  mb-2">
                      <Badge
                        className={`${
                          course.level === "Intermediate"
                            ? "bg-violet-500"
                            : course.level === "Beginner"
                            ? "bg-accent"
                            : ""
                        }`}
                      >
                        {course.level}
                      </Badge>
                    </p>
                    <p className="text-sm  mb-2">{course.creator.username}</p>
                  </div>
                  <div className="flex flex-col items-end justify-between">
                    <span className="text-xl font-bold">
                      Rs. {course.price}
                    </span>
                    {/* {course.bestseller && (
                      <Badge
                        variant="secondary"
                        className="bg-highlight text-primary"
                      >
                        Bestseller
                      </Badge>
                    )} */}
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
