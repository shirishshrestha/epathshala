import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useGetAllCourses, useGetRecommendedCourse } from "../../hooks";
import { Loader, useEsewaPayment } from "@/features/shared";
import { useSelector } from "react-redux";
import { toast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { useCourseEnrollment } from "@/features/shared/hooks/mutation/useCourseEnrollment";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CoursesLandingPage() {
  const navigate = useNavigate();
  const userRole = useSelector(
    (state) => state?.auth?.userData?.data?.userType
  );
  const authStatus = useSelector((state) => state?.auth?.status);

  const { data, isPending } = useGetAllCourses(
    3,
    "/courses",
    1,
    "",
    "",
    "high"
  );
  const { data: RecommendedData, isPending: RecommendedDataPending } =
    useGetRecommendedCourse("recommendedCourses");

  const { CourseEnroll, paymentData } = useCourseEnrollment();

  const { isSubmitting, submitPayment } = useEsewaPayment({
    onSuccess: () => {
      toast("Payment form submitted successfully");
    },
    onError: (error) => {
      toast("Payment submission failed:", error);
    },
  });

  useEffect(() => {
    if (paymentData) {
      submitPayment(paymentData);
    }
  }, [paymentData, submitPayment]);

  const handleBuyClick = (courseId) => {
    if (!authStatus) {
      toast({
        title: "Error!",
        description: "Please login to buy course",
        variant: "destructive",
        duration: 3000,
      });
    } else {
      CourseEnroll.mutate(courseId);
    }
  };

  return (
    <div className="p-8">
      {(isPending ||
        CourseEnroll.isPending ||
        isSubmitting ||
        RecommendedDataPending) && <Loader />}
      <Toaster />
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-2">Our Courses</h1>
        <p className="text-lg mb-6">
          Explore courses from experienced, real-world experts.
        </p>

        <div defaultValue="popular" className="mb-6 flex ">
          <h5 className="text-xl font-semibold">Our popular courses</h5>
        </div>

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
                      {userRole !== "teacher" &&
                        (course.bought ? (
                          <Button
                            className="w-full hover:bg-violet-600 hover:text-foreground"
                            variant="ghost"
                            onClick={() => navigate("/student/courses")}
                          >
                            In Library
                          </Button>
                        ) : (
                          <Button
                            className="w-full hover:bg-violet-600 hover:text-foreground"
                            variant="ghost"
                            onClick={() => handleBuyClick(course._id)}
                          >
                            Buy Now
                          </Button>
                        ))}
                      <Button
                        className="w-full"
                        variant="bright"
                        onClick={() =>
                          navigate(`/course-details/${course._id}`)
                        }
                      >
                        Explore Course
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
        </div>

        {RecommendedData?.data?.length > 0 &&
          authStatus &&
          userRole === "student" && (
            <>
              <div defaultValue="popular" className="mb-6 flex mt-6 ">
                <h5 className="text-xl font-semibold">
                  Our Recommended courses
                </h5>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {RecommendedData?.data?.map((course) => (
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
                        <h3 className="text-xl font-bold mb-1">
                          {course.title}
                        </h3>
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
                          {userRole !== "teacher" &&
                            (course.bought ? (
                              <Button
                                className="w-full hover:bg-violet-600 hover:text-foreground"
                                variant="ghost"
                                onClick={() => navigate("/student/courses")}
                              >
                                In Library
                              </Button>
                            ) : (
                              <Button
                                className="w-full hover:bg-violet-600 hover:text-foreground"
                                variant="ghost"
                                onClick={() => handleBuyClick(course._id)}
                              >
                                Buy Now
                              </Button>
                            ))}
                          <Button
                            className="w-full"
                            variant="bright"
                            onClick={() =>
                              navigate(`/course-details/${course._id}`)
                            }
                          >
                            Explore Course
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </>
          )}
      </div>
    </div>
  );
}
