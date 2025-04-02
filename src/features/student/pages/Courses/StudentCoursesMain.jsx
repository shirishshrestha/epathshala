import { MdPaid } from "react-icons/md";
import { BookCheck } from "lucide-react";
import { Loader, MetricsComp } from "@/features/shared";
import { StudentCoursesTable } from "../../components";
import { useGetStudentDashboardData } from "../../hooks";

const StudentCoursesMain = () => {
  const { data: StudentDashboardData, isPending: StudentDashboardDataPending } =
    useGetStudentDashboardData();

  const metrics = [
    {
      value: StudentDashboardData?.data?.totalCoursePaid,
      label: "Total Paid Courses ",
      icon: <MdPaid className="h-6 w-6 text-white" />,
      color: "bg-emerald-500",
    },
    {
      value: StudentDashboardData?.data?.totalCourseFree,
      label: "Total Free Courses",
      icon: <BookCheck className="h-6 w-6 text-white" />,
      color: "bg-blue-500",
    },
  ];
  return (
    <div className="wrapper">
      {StudentDashboardDataPending && <Loader />}
      <div className="">
        <div className="flex justify-between gap-[1.5rem] items-center">
          <MetricsComp metrics={metrics} />
        </div>
      </div>
      <div className="pt-[1rem]">
        <StudentCoursesTable />
      </div>
    </div>
  );
};

export default StudentCoursesMain;
