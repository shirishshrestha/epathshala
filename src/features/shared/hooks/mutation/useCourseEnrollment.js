import { useMutation } from "@tanstack/react-query";
import { startEnrollment } from "../../api/StartEnrollmentApiSlice";
import { useState } from "react";
import EsewaPaymentRedirect from "../../components/EsewaPayment";

export const useCourseEnrollment = () => {
  const [paymentData, setPaymentData] = useState(null);
  const CourseEnroll = useMutation({
    mutationFn: (courseId) => startEnrollment(courseId),
    onSuccess: (data) => {
      // toast({
      //     title: "Success!",
      //     description: "Course enrolled successfully",
      //     variant: "success",
      //     duration: 3000
      // })
      setPaymentData(data);
    },
    onError: (error) => {
      // toast({
      //     title: "Error!",
      //     description: error?.response?.data.message || "Something went wrong! Please try again",
      //     variant: "destructive",
      //     duration: 3000
      // })
    },
  });

  return { CourseEnroll, paymentData };
};
