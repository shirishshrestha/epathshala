import App from "@/app/App";
import { LoginPage, SignupPage } from "@/features/auth";
import { CoursesPage, HomePage, OrganizationPage } from "@/features/general";
import { createBrowserRouter } from "react-router-dom";
import { Protected as AuthLayout } from "./AuthLayout";
import { PageNotFound, UnauthorizedPage } from "../pages";
import { RoleBasedProtectedRoute } from "./RoleBasedProtectedRoute";
import AdminLayout from "@/features/admin/AdminLayout";
import TeacherLayout from "@/features/teacher/TeacherLayout";
import StudentLayout from "@/features/student/StudentLayout";
import { TeacherDashboard } from "@/features/teacher";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/courses",
        element: <CoursesPage />,
      },
      {
        path: "/organizations",
        element: <OrganizationPage />,
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
        <TeacherLayout />
      </RoleBasedProtectedRoute>
    ),
    children: [
      {
        path: "/teacher",
        element: <TeacherDashboard />,
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
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
  {
    path: "/unauthorized",
    element: <UnauthorizedPage />,
  },
]);
