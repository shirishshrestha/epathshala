import { DataTable, Loader } from "@/features/shared";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PenBox, Plus, Trash2 } from "lucide-react";
import { useGetCourses } from "../../hooks";

const columns = [
  { header: "Course Title", accessor: "title" },
  { header: "Course Subtitle", accessor: "subTitle" },
  { header: "Description", accessor: "description" },
  { header: "Lectures", accessor: "noOfVideos" },
  { header: "Level", accessor: "level" },
];
export default function TeacherCoursesTable() {
  const navigate = useNavigate();
  const TeacherCourses = useGetCourses("teacherCourses");
  const courses = TeacherCourses?.data?.data?.filteredCourse || [];

  const actions = (data) => (
    <div className="flex space-x-2">
      <Button size="sm" onClick={() => navigate(`edit-course/${data?._id}`)}>
        <PenBox />
      </Button>
      <Button
        size="sm"
        variant="destructive"
        onClick={() => handleDelete(data._id)}
      >
        <Trash2 />
      </Button>
    </div>
  );

  const handleDelete = (courseId) => {
    console.log("Delete course:", courseId);
    // Implement delete logic
  };

  return (
    <div>
      {TeacherCourses.isPending && <Loader />}
      <div className="mb-[1rem] flex justify-end items-center">
        <h4 className="w-full text-[1.4rem] font-[700]">List of Courses</h4>

        <Link to="add-course">
          <Button variant="ghost">
            Add Course <Plus />
          </Button>
        </Link>
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
