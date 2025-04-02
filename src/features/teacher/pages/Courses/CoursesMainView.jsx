import { MdPaid } from "react-icons/md";
import { BookCheck } from "lucide-react";
import { Loader, MetricsComp } from "@/features/shared";
import { TeacherCoursesTable } from "../../components";
import { useGetTeacherDashboardData } from "../../hooks";

const CoursesMainView = () => {
  const { data: TeacherDashboardData, isPending: TeacherDashboardDataPending } =
    useGetTeacherDashboardData();

  const metrics = [
    {
      value: TeacherDashboardData?.data?.paid?.length,
      label: "Total Paid Courses ",
      icon: <MdPaid className="h-6 w-6 text-white" />,
      color: "bg-emerald-500",
    },
    {
      value: TeacherDashboardData?.data?.free?.length,
      label: "Total Free Courses",
      icon: <BookCheck className="h-6 w-6 text-white" />,
      color: "bg-blue-500",
    },
  ];
  return (
    <div className="wrapper">
      {TeacherDashboardDataPending && <Loader />}
      <div className="">
        <div className="flex justify-between gap-[1.5rem] items-center">
          <MetricsComp metrics={metrics} />
        </div>
      </div>
      <div className="pt-[1rem]">
        <TeacherCoursesTable />
      </div>
    </div>
  );
};

export default CoursesMainView;
