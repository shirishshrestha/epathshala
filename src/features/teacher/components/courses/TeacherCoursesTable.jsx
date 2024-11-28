import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/features/shared";
import { createColumnHelper } from "@tanstack/react-table";
import { Edit, Eye, Trash2 } from "lucide-react";

const COURSE_DATA = [
  {
    id: "C001",
    title: "Complete Web Development Bootcamp",
    subtitle: "Zero to Full Stack Hero",
    description:
      "Comprehensive course covering frontend, backend, and deployment strategies for modern web development.",
    category: "Web Development",
    isFree: false,
    price: 49.99,
    instructor: "John Doe",
    duration: "48 hours",
    skillLevel: "Advanced",
  },
  {
    id: "C002",
    title: "Docker & Kubernetes Mastery",
    subtitle: "DevOps Engineering Essentials",
    description:
      "Deep dive into container orchestration, deployment, and cloud-native architecture.",
    category: "DevOps",
    isFree: false,
    price: 79.99,
    instructor: "Sarah Jenkins",
    duration: "35 hours",
    skillLevel: "Intermediate",
  },
  {
    id: "C003",
    title: "Machine Learning Fundamentals",
    subtitle: "Data Science Path",
    description:
      "Comprehensive introduction to machine learning algorithms, neural networks, and practical implementations.",
    category: "Machine Learning",
    isFree: true,
    price: 0,
    instructor: "Alex Rodriguez",
    duration: "25 hours",
    skillLevel: "Beginner",
  },
  {
    id: "C004",
    title: "React.js Advanced Techniques",
    subtitle: "Modern Frontend Frameworks",
    description:
      "Advanced state management, performance optimization, and enterprise-level React applications.",
    category: "Web Development",
    isFree: false,
    price: 59.99,
    instructor: "Emily Chen",
    duration: "30 hours",
    skillLevel: "Intermediate ",
  },
  {
    id: "C005",
    title: "Python for Data Science",
    subtitle: "Analytics & Machine Learning",
    description:
      "Practical Python programming for data analysis, visualization, and machine learning projects.",
    category: "Machine Learning",
    isFree: false,
    price: 69.99,
    instructor: "Michael Wong",
    duration: "40 hours",
    skillLevel: "Intermediate",
  },
  {
    id: "C006",
    title: "Cloud Computing Fundamentals",
    subtitle: "AWS & Azure Certification Prep",
    description:
      "Comprehensive cloud computing course covering major platforms, architectures, and best practices.",
    category: "DevOps",
    isFree: true,
    price: 0,
    instructor: "David Kim",
    duration: "22 hours",
    skillLevel: "Beginner",
  },
];

const columnHelper = createColumnHelper();

const courseColumns = [
  columnHelper.accessor("id", {
    header: "Course Id",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("title", {
    header: "Title",
    cell: (info) => (
      <div className="font-medium">
        {info.getValue()}
        {/* <div className="text-xs text-foreground/80">
          {info.row.original.subtitle}
        </div> */}
      </div>
    ),
  }),
  columnHelper.accessor("category", {
    header: "Category",
    cell: (info) => <Badge variant="outline">{info.getValue()}</Badge>,
  }),
  columnHelper.accessor("isFree", {
    header: "Type",
    cell: (info) => (
      <Badge
        variant={"secondary"}
        className={
          info.getValue()
            ? "bg-blue-500 hover:bg-blue-500"
            : "bg-emerald-500 hover:bg-emerald-500"
        }
      >
        {info.getValue() ? "Free" : "Paid"}
      </Badge>
    ),
  }),
  columnHelper.accessor("price", {
    header: "Price",
    cell: (info) => (
      <span>{info.row.original.isFree ? "Free" : `$${info.getValue()}`}</span>
    ),
  }),
  columnHelper.accessor("skillLevel", {
    header: "Level",
    cell: (info) => <Badge variant="outline">{info.getValue()}</Badge>,
  }),
  columnHelper.display({
    id: "actions",
    header: "Actions",
    cell: () => (
      <div className="flex space-x-3">
        <Button size="icon" className="bg-blue-500 hover:bg-blue-600 h-8 w-8">
          <Eye />
        </Button>
        <Button size="icon" className="hover:bg-violet-700 h-8 w-8">
          <Edit />
        </Button>
        <Button size="icon" variant="destructive" className="h-8 w-8">
          <Trash2 />
        </Button>
      </div>
    ),
  }),
];

const TeacherCoursesTable = () => {
  return (
    <DataTable
      columns={courseColumns}
      data={COURSE_DATA}
      searchKey="title"
      tableTitle="List of Courses"
      buttonText="Add Course"
      linkSlug="add-post"
    />
  );
};

export default TeacherCoursesTable;
