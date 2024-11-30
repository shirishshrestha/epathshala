import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useGetAllCourses } from "../../hooks";
import { Loader } from "@/features/shared";
import { useSelector } from "react-redux";
import { toast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { useCourseEnrollment } from "@/features/shared/hooks/mutation/useCourseEnrollment";
import { useEffect, useState } from "react";

export default function CoursesLandingPage() {
  const { data, isPending } = useGetAllCourses(3);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const authStatus = useSelector((state) => state?.auth?.status);

  const { CourseEnroll, paymentData } = useCourseEnrollment();

  useEffect(() => {
    if (paymentData) {
      // Create form and submit
      const form = document.createElement("form");
      setIsSubmitting(true);
      form.method = "POST";
      form.action = "https://rc-epay.esewa.com.np/api/epay/main/v2/form";

      const fields = [
        { name: "amount", value: paymentData.data.amount },
        { name: "tax_amount", value: paymentData.data.tax_amount },
        { name: "total_amount", value: paymentData.data.total_amount },
        { name: "transaction_uuid", value: paymentData.data.transaction_uuid },
        { name: "product_code", value: paymentData.data.product_code },
        {
          name: "product_service_charge",
          value: paymentData.data.product_service_charge,
        },
        {
          name: "product_delivery_charge",
          value: paymentData.data.product_delivery_charge,
        },
        { name: "success_url", value: paymentData.data.success_url },
        { name: "failure_url", value: paymentData.data.failure_url },
        {
          name: "signed_field_names",
          value: paymentData.data.signed_field_names,
        },
        { name: "signature", value: paymentData.data.signature },
      ];

      fields.forEach((field) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = field.name;
        input.value = field.value;
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();

      setIsSubmitting(false);

      // Optional: Remove form after submission
      return () => {
        document.body.removeChild(form);
      };
    }
  }, [paymentData]);

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
    <div className="  p-8">
      {(isPending || CourseEnroll.isPending || isSubmitting) && <Loader />}
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
                className="bg-secondary text-primary-foreground overflow-hidden h-full border-0 flex flex-col justify-between"
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

                <div className="p-6 grid grid-rows-2">
                  <div className="grid grid-rows-3 mb-1">
                    <h3 className="text-xl font-bold mb-1">{course.title}</h3>
                    <h3 className="text-xl font-bold mb-1">
                      {course.subTitle}
                    </h3>
                    <p className=" text-sm">
                      {" "}
                      {course.description &&
                        (course.description.length > 60
                          ? `${course.description.substring(0, 60)}...`
                          : course.description)}
                    </p>
                  </div>
                  <div className="grid grid-rows-3">
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-sm ">
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
                      {/* {userRole === "student" && ( */}
                      <Button
                        className="w-full hover:bg-violet-600 hover:text-foreground"
                        variant="ghost"
                        onClick={() => handleBuyClick(course._id)}
                      >
                        Buy Now
                      </Button>
                      {/* )} */}
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
