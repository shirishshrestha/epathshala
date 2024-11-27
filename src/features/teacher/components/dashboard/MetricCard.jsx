import { BookOpen, School } from "lucide-react";

import { Card } from "@/components/ui/card";
import { PiStudentFill } from "react-icons/pi";

function MetricCard({ value, label, icon, color }) {
  return (
    <Card className="p-6 bg-secondary relative overflow-hidden">
      <div className="flex items-start justify-between text-foreground">
        <div>
          <h3 className="text-3xl font-bold mb-1">{value}</h3>
          <p className="">{label}</p>
        </div>
        <div className={`${color} p-3 rounded-full`}>{icon}</div>
      </div>
    </Card>
  );
}

export default function TeacherDashboardMetrics() {
  const metrics = [
    {
      value: "155+",
      label: "Total Organizations ",
      icon: <School className="h-6 w-6 text-white" />,
      color: "bg-blue-500",
    },
    {
      value: "39+",
      label: "Total Courses ",
      icon: <BookOpen className="h-6 w-6 text-white" />,
      color: "bg-emerald-500",
    },
    {
      value: "25+",
      label: "Enrolled Students",
      icon: <PiStudentFill className="h-6 w-6 text-white" />,
      color: "bg-orange-500",
    },
  ];

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
     gap-4"
    >
      {metrics.map((metric, index) => (
        <MetricCard
          key={index}
          value={metric.value}
          label={metric.label}
          icon={metric.icon}
          color={metric.color}
        />
      ))}
    </div>
  );
}
