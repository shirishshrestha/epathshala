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
import { Link, useSearchParams } from "react-router-dom";
import { useGetAllCourses } from "../../hooks";
import { Loader, Pagination, useGetCategory } from "@/features/shared";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useCallback, useMemo } from "react";

export default function AllCourses() {
  const {
    handleSubmit,
    formState: { isDirty },
    setValue,
    watch,
    reset,
  } = useForm({
    defaultValues: {
      level: "",
      category: "",
      rating: "",
    },
  });
  const [searchParams, setSearchParams] = useSearchParams();

  const currentRating = useMemo(
    () => searchParams.get("rating") || "",
    [searchParams]
  );

  const currentPage = useMemo(
    () => parseInt(searchParams.get("page") || 1, 10),
    [searchParams]
  );

  const currentLevel = useMemo(
    () => searchParams.get("level") || "",
    [searchParams]
  );

  const currentCategory = useMemo(
    () => searchParams.get("category") || "",
    [searchParams]
  );

  const { data: AllCourses, isPending: isCoursesPending } = useGetAllCourses(
    5,
    "/courses",
    currentPage,
    currentLevel,
    currentCategory,
    currentRating
  );
  const GetCategory = useGetCategory();

  const updatePageNumber = useCallback(
    (newPageNumber) => {
      const updatedParams = new URLSearchParams(searchParams);
      updatedParams.set("page", newPageNumber.toString());
      setSearchParams(updatedParams);
    },
    [searchParams, setSearchParams]
  );

  const paginationProps = useMemo(
    () => ({
      pageNumber: currentPage,
      lastPage: AllCourses?.data?.pageStats?.totalPage || 1,
      nextClick: () => updatePageNumber(currentPage + 1),
      prevClick: () => updatePageNumber(currentPage - 1),
    }),
    [currentPage, AllCourses, updatePageNumber]
  );

  const filterSubmit = (data) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("page", "1");

    if (data.level) {
      newParams.set("level", data.level);
    } else {
      newParams.delete("level");
    }

    if (data.category) {
      newParams.set("category", data.category);
    } else {
      newParams.delete("category");
    }

    if (data.rating) {
      newParams.set("rating", data.rating);
    } else {
      newParams.delete("rating");
    }

    setSearchParams(newParams);
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
                value={watch("level")}
                className="bg-accent"
                onValueChange={(value) => {
                  setValue("level", value, { shouldDirty: true });
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Level" />
                </SelectTrigger>
                <SelectContent>
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
                value={watch("category")}
                className="bg-accent"
                onValueChange={(value) => {
                  setValue("category", value, { shouldDirty: true });
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
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

              <div className="flex flex-col gap-4 mb-4">
                <h3 className="text-lg font-semibold">Rating:</h3>
                <Select
                  value={watch("rating")}
                  className="bg-accent"
                  onValueChange={(value) => {
                    setValue("rating", value, { shouldDirty: true });
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Rating" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button
              disabled={!isDirty}
              className="disabled:bg-gray-400 mr-4 "
              type="submit"
            >
              Submit
            </Button>
            <Button
              disabled={!isDirty}
              className="disabled:bg-gray-400 "
              type="button"
              variant="ghost"
              onClick={() => {
                const newParams = new URLSearchParams(searchParams);

                // Remove filter-related parameters
                newParams.delete("level");
                newParams.delete("category");
                newParams.delete("rating");
                newParams.set("page", "1"); // Reset pagination to the first page

                // Update searchParams
                setSearchParams(newParams);

                // Reset form state
                reset({
                  level: "", // Empty value to reset the Select component
                  category: "",
                  rating: "",
                });
              }}
            >
              Clear
            </Button>
          </form>

          <div className="flex flex-col gap-4 w-full">
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
            {AllCourses?.data?.pageStats?.totalPage > 1 && (
              <div className="my-[1rem] flex items-center justify-end">
                <Pagination {...paginationProps} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
