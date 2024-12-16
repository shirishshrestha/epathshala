import { DataTable, Loader } from "@/features/shared";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useGetCoursesEnrolled } from "../../hooks";

const columns = [
  { header: "Course Title", accessor: "title" },
  { header: "Course Subtitle", accessor: "subTitle" },
  { header: "Description", accessor: "description" },
  { header: "Lectures", accessor: "noOfVideos" },
  { header: "Level", accessor: "level" },
];

export default function StudentCoursesTable() {
  const navigate = useNavigate();
  const StudentCourses = useGetCoursesEnrolled("studentCourses");
  const courses = StudentCourses?.data?.data?.filteredCourse || [];

  const actions = (data) => (
    <div className="flex space-x-2">
      <Button
        size="sm"
        variant="ghost"
        onClick={() => navigate(`add-lectures/${data?._id}`)}
      >
        View Lectures
      </Button>
    </div>
  );

  return (
    <div>
      {StudentCourses?.isPending && <Loader />}
      <div className="mb-[1rem] flex justify-end items-center">
        <h4 className="w-full text-[1.4rem] font-[700]">List of Courses</h4>
      </div>
      <DataTable
        data={courses}
        columns={columns}
        actions={actions}
        category={true}
      />
    </div>
  );
}
