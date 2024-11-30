import { DataTable, Loader } from "@/features/shared";
import { useGetCourses } from "../../hooks/query/useGetCourses";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PenBox, Plus, Trash2 } from "lucide-react";

const columns = [
  { header: "Course Title", accessor: "title" },
  { header: "Course Subtitle", accessor: "subTitle" },
  { header: "Description", accessor: "description" },
  { header: "Level", accessor: "level" },
];
export default function TeacherCoursesTable() {
  const TeacherCourses = useGetCourses();
  const courses = TeacherCourses?.data?.data?.filteredCourse || [];

  const actions = (row) => (
    <div className="flex space-x-2">
      <Button size="sm" onClick={() => handleEdit(row)}>
        <PenBox />
      </Button>
      <Button
        size="sm"
        variant="destructive"
        onClick={() => handleDelete(row._id)}
      >
        <Trash2 />
      </Button>
    </div>
  );

  const handleEdit = (course) => {
    console.log("Edit course:", course);
    // Implement edit logic
  };

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
      <DataTable data={courses} columns={columns} actions={actions} />
    </div>
  );
}
