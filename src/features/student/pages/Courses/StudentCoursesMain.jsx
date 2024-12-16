import { MdPaid } from "react-icons/md";
import { BookCheck } from "lucide-react";
import { MetricsComp } from "@/features/shared";
import { StudentCoursesTable } from "../../components";

const metrics = [
  {
    value: "39+",
    label: "Total Paid Courses ",
    icon: <MdPaid className="h-6 w-6 text-white" />,
    color: "bg-emerald-500",
  },
  {
    value: "4",
    label: "Total Free Courses",
    icon: <BookCheck className="h-6 w-6 text-white" />,
    color: "bg-blue-500",
  },
];

const StudentCoursesMain = () => {
  return (
    <div className="wrapper">
      <div className="grid grid-cols-[1.2fr,1fr] gap-[2rem]">
        <div className="flex justify-between gap-[1.5rem] items-center">
          <MetricsComp metrics={metrics} />
        </div>
        <div>Swiper</div>
      </div>
      <div className="pt-[1rem]">
        <StudentCoursesTable />
      </div>
    </div>
  );
};

export default StudentCoursesMain;
