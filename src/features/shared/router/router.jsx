import App from "@/app/App";
import { LoginPage, SignupPage } from "@/features/auth";
import { CourseDetailsPage, CoursesPage, HomePage } from "@/features/general";
import { createBrowserRouter, ScrollRestoration } from "react-router-dom";
import { Protected as AuthLayout } from "./AuthLayout";
import { PageNotFound, ProfileSetting, UnauthorizedPage } from "../pages";
import { RoleBasedProtectedRoute } from "./RoleBasedProtectedRoute";
import AdminLayout from "@/features/admin/AdminLayout";
import TeacherLayout from "@/features/teacher/TeacherLayout";
import StudentLayout from "@/features/student/StudentLayout";
import {
  AddCoursePage,
  AddLecturesPage,
  CoursesMainView,
  EditCoursePage,
  TeacherCourses,
  TeacherDashboard,
} from "@/features/teacher";
import EsewaSuccess from "../pages/EsewaSuccess";
import EsewaFailure from "../pages/EsewaFailure";
import {
  StudentCourses,
  StudentCoursesMain,
  StudentDashboard,
  StudentViewLectures,
} from "@/features/student";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/courses",
        element: <CoursesPage />,
      },
      {
        path: "/course-details/:id",
        element: <CourseDetailsPage />,
      },
    ],
  },
  {
    path: "/login",
    element: (
      <AuthLayout authentication={false}>
        <LoginPage />
      </AuthLayout>
    ),
  },
  {
    path: "/signup",
    element: (
      <AuthLayout authentication={false}>
        <SignupPage />
      </AuthLayout>
    ),
  },
  {
    path: "/admin",
    element: (
      <RoleBasedProtectedRoute allowedRoles={["admin"]}>
        <AdminLayout />
      </RoleBasedProtectedRoute>
    ),
  },
  {
    path: "/teacher",
    element: (
      <RoleBasedProtectedRoute allowedRoles={["teacher"]}>
        <ScrollRestoration />
        <TeacherLayout />
      </RoleBasedProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <TeacherDashboard />,
      },
      {
        path: "profile",
        element: <ProfileSetting />,
      },
      {
        path: "courses",
        element: <TeacherCourses />,
        children: [
          {
            index: true,
            element: <CoursesMainView />,
          },
          {
            path: "add-course",
            element: <AddCoursePage />,
          },
          {
            path: "add-lectures/:course_id",
            element: <AddLecturesPage />,
          },
          {
            path: "edit-course/:id",
            element: <EditCoursePage />,
          },
        ],
      },
    ],
  },
  {
    path: "/student",
    element: (
      <RoleBasedProtectedRoute allowedRoles={["student"]}>
        <StudentLayout />
      </RoleBasedProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <StudentDashboard />,
      },
      {
        path: "profile",
        element: <ProfileSetting />,
      },
      {
        path: "courses",
        element: <StudentCourses />,
        children: [
          {
            index: true,
            element: <StudentCoursesMain />,
          },
          {
            path: "view-lectures/:id",
            element: <StudentViewLectures />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
  {
    path: "/unauthorized",
    element: <UnauthorizedPage />,
  },
  {
    path: "/success",
    element: (
      // <PaymentProtectedRoute>
      <EsewaSuccess />
      // </PaymentProtectedRoute>
    ),
  },
  {
    path: "/failure",
    element: (
      // <PaymentProtectedRoute>
      <EsewaFailure />
      // </PaymentProtectedRoute>
    ),
  },
]);
