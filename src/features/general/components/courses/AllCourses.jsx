import { Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";
import { useGetAllCourses } from "../../hooks";
import { Loader, useGetCategory } from "@/features/shared";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

export default function AllCourses() {
  const {
    handleSubmit,

    formState: { isDirty },
    setValue,
  } = useForm();

  const { data: AllCourses, isPending: isCoursesPending } = useGetAllCourses();
  const GetCategory = useGetCategory();

  const handleLevelChange = (value) => {
    setValue("level", value, { shouldDirty: true });
  };

  const handleCategoryChange = (value) => {
    setValue("category", value, { shouldDirty: true });
  };

  const filterSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="p-8">
      {isCoursesPending && <Loader />}
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4">All EPathshala courses</h1>

        <Card className="p-4 mb-8 flex items-center gap-2 bg-foreground">
          <Info className="h-5 w-5 text-muted-foreground" />
          <p className="text-muted-foreground">
            Not sure? All courses have a 30-day money-back guarantee
          </p>
        </Card>

        <div className="flex gap-8 ">
          <form
            onSubmit={handleSubmit(filterSubmit)}
            className="w-96 h-fit overflow-y-scroll flex-shrink-0 p-[1rem] rounded-lg shadow-lg filter__section bg-secondary"
          >
            <h3 className="mb-6 font-semibold text-[1.2rem]">Filter by</h3>
            <div className="flex flex-col gap-4 mb-4">
              {/* <Button variant="outline" className="w-full ">
                Filter
              </Button> */}
              <h3 className="text-lg font-semibold">Level:</h3>
              <Select
                defaultValue="Select Level"
                className="bg-accent"
                onValueChange={handleLevelChange}
              >
                <SelectTrigger>
                  <SelectValue placeholder="level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Select Level" disabled>
                    Select Level
                  </SelectItem>
                  <SelectItem value="Beginner">Beginner</SelectItem>
                  <SelectItem value="Intermediate">Intermediate</SelectItem>
                  <SelectItem value="Advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-4 mb-4">
              {/* <Button variant="outline" className="w-full ">
                Filter
              </Button> */}
              <h3 className="text-lg font-semibold">Category: </h3>
              <Select
                defaultValue="Select Category"
                className="bg-accent"
                onValueChange={handleCategoryChange}
              >
                <SelectTrigger>
                  <SelectValue placeholder="category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Select Category" disabled>
                    Select Category
                  </SelectItem>
                  {GetCategory?.isPending ? (
                    <SelectItem value="loading" disabled>
                      Loading categories...
                    </SelectItem>
                  ) : GetCategory?.isError ? (
                    <SelectItem value="error" disabled>
                      Error loading categories
                    </SelectItem>
                  ) : (
                    GetCategory?.data?.data.map((category) => (
                      <SelectItem key={category._id} value={category._id}>
                        {category.name}
                      </SelectItem>
                    ))
                  )}
                </SelectContent>
              </Select>
            </div>

            <Button
              disabled={!isDirty}
              className="disabled:bg-gray-400 "
              type="submit"
            >
              Submit
            </Button>
          </form>

          <div className="flex flex-col gap-4">
            {AllCourses?.data?.filteredCourse.map((course) => (
              <Link
                key={course._id}
                to={`/course-details/${course._id}`}
                className="space-y-6  "
              >
                <Card className="flex gap-4 p-4 shadow-lg bg-secondary text-foreground">
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
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
