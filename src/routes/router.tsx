
import { createBrowserRouter } from "react-router-dom";
import { Root } from './root'
import HomeEmployeePage from "../pages/employees";
import LoginPage from "../pages/login/page";
import CreateEmployeePage from "../pages/employees/create/page";
import EmployeeDetailPage from "../pages/employees/detail/page";
import { DepartmentsPage } from "../pages/departments/page";

export const router = createBrowserRouter([
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
        element: <HomeEmployeePage />
      },
      {
        path: "employee/create",
        element: <CreateEmployeePage />
      },
      {
        path: "employee/detail",
        element: <EmployeeDetailPage />
      },
      {
        path: "departments",
        element: <DepartmentsPage />
      }
    ]
  },
]);
