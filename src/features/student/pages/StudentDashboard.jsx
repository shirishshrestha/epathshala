import { BookOpen } from "lucide-react";
import { PiStudentFill } from "react-icons/pi";
import { FaMoneyBill } from "react-icons/fa";
import { Loader, MetricsComp } from "@/features/shared";
import { useGetStudentDashboardData } from "../hooks";
import { useSelector } from "react-redux";
import { logoLight } from "@/assets";

const StudentDashboard = () => {
  const { data: StudentDashboardData, isPending: StudentDashboardDataPending } =
    useGetStudentDashboardData();

  const name = useSelector((state) => state?.auth?.userData?.data?.fullname);

  const metrics = [
    {
      value: StudentDashboardData?.data?.courses.length,
      label: "Total Bought Courses",
      icon: <BookOpen className="h-6 w-6 text-white" />,
      color: "bg-blue-500",
    },
    {
      value: StudentDashboardData?.data?.totalCoursePaid,
      label: "Total Paid Course",
      icon: <FaMoneyBill className="h-6 w-6 text-white" />,
      color: "bg-emerald-500",
    },
    {
      value: StudentDashboardData?.data?.totalCourseFree,
      label: "Total Free Courses",
      icon: <PiStudentFill className="h-6 w-6 text-white" />,
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="p-[1rem] pt-2">
      {StudentDashboardDataPending && <Loader />}
      <div className="bg-none rounded-lg ">
        <div className="">
          <div>
            <div className="p-6 bg-secondary rounded-lg shadow-md mb-4 flex justify-between items-center">
              <h2>
                Welcome! <span className="capitalize font-bold">{name}</span>
              </h2>
              <div>
                <img src={logoLight} alt="logo" className="w-[150px]" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <MetricsComp metrics={metrics} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
