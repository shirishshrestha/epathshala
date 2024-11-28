import { BookOpen } from "lucide-react";
import { TeacherDashboardMetrics } from "../components";
import { PiStudentFill } from "react-icons/pi";
import { FaMoneyBill } from "react-icons/fa";

const metrics = [
  {
    value: "39+",
    label: "Total Courses ",
    icon: <BookOpen className="h-6 w-6 text-white" />,
    color: "bg-blue-500",
  },
  {
    value: "Rs. 7.5k",
    label: "Total Revenue",
    icon: <FaMoneyBill className="h-6 w-6 text-white" />,
    color: "bg-emerald-500",
  },
  {
    value: "25+",
    label: "Enrolled Students",
    icon: <PiStudentFill className="h-6 w-6 text-white" />,
    color: "bg-orange-500",
  },
];

const TeacherDashboard = () => {
  return (
    <div className="p-[1rem] pt-2">
      <div className="bg-none rounded-lg ">
        <div className="grid grid-cols-[1.6fr,0.6fr] gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <TeacherDashboardMetrics metrics={metrics} />
          </div>
          <div>Doughnut</div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
