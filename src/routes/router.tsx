import { createBrowserRouter } from "react-router-dom";
import { Root } from "./root";
import HomeEmployeePage from "../pages/employees";
import LoginPage from "../pages/login/page";
import CreateEmployeePage from "../pages/employees/create/page";
import EmployeeDetailPage from "../pages/employees/detail/page";
import { DepartmentsPage } from "../pages/departments/page";
import { PrivateRoute } from "./private";
import { Provider } from "../providers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Provider />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/app",
        element: <Root />,
        children: [
          {
            path: "home",
            element: (
              <PrivateRoute redirectPath="/login">
                <HomeEmployeePage />
              </PrivateRoute>
            ),
          },
          {
            path: "employee/create",
            element: <CreateEmployeePage />,
          },
          {
            path: "employee/detail",
            element: <EmployeeDetailPage />,
          },
          {
            path: "departments",
            element: <DepartmentsPage />,
          },
        ],
      },
    ],
  },
]);
