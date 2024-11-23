import App from "@/app/App";
import { LoginPage, SignupPage } from "@/features/auth";
import { CoursesPage, HomePage, OrganizationPage } from "@/features/general";
import { createBrowserRouter } from "react-router-dom";
import { Protected as AuthLayout } from "../components/AuthLayout";

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
]);
