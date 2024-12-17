import { Loader } from "@/features/shared";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useGetCoursesEnrolled } from "../../hooks";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const headers = [
  "Course Title",
  "Course Subtitle",
  "Description",
  "Category",
  "Level",
  "Actions",
];

export default function StudentCoursesTable() {
  const navigate = useNavigate();
  const StudentCourses = useGetCoursesEnrolled("studentCourses");
  const courses = StudentCourses?.data?.data || [];

  const actions = (data) => (
    <div className="flex space-x-2">
      <Button
        size="sm"
        variant="ghost"
        onClick={() => navigate(`view-lectures/${data?.course?._id}`)}
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
      <div className="rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              {headers.map((header) => (
                <TableHead key={header}>{header}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {courses?.map((item) => (
              <TableRow key={item._id}>
                <TableCell>{item.course.title}</TableCell>
                <TableCell>{item.course.subTitle}</TableCell>
                <TableCell>
                  {item.course.description ? (
                    item.course.description.length > 35 ? (
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            {`${item.course.description.substring(0, 35)}...`}
                          </TooltipTrigger>
                          <TooltipContent>
                            {item.course.description}
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ) : (
                      item.course.description
                    )
                  ) : (
                    "-"
                  )}
                </TableCell>
                <TableCell>{item.course.category.name}</TableCell>
                <TableCell>{item.course.level}</TableCell>
                <TableCell>{actions(item)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
