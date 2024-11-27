import { TeacherDashboardMetrics } from "../components";

const TeacherDashboard = () => {
  return (
    <div className="p-[1rem] pt-2  ">
      <div className="bg-none  rounded-lg ">
        <div className="grid grid-cols-[1.6fr,0.6fr] gap-4">
          <div>
            <TeacherDashboardMetrics />
          </div>
          <div>Doughnut</div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
