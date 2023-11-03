import { createBrowserRouter } from 'react-router-dom'
import { Root } from './root'
import EmployeePage from '../pages/employees'
import LoginPage from '../pages/login/page'
import CreateEmployeePage from '../pages/employees/create/page'
import EmployeeDetailPage from '../pages/employees/detail/page'
import { DepartmentsPage } from '../pages/departments/page'
import { PrivateRoute } from './private'
import { Provider } from '../providers'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Provider />,
    children: [
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/app',
        element: <Root />,
        children: [
          {
            path: 'home',
            element: (
              <PrivateRoute redirectPath="/login">
                <h1>Home Page</h1>
              </PrivateRoute>
            ),
          },
          {
            path: 'employees',
            element: (
              <PrivateRoute redirectPath="/login">
                <EmployeePage />
              </PrivateRoute>
            ),
          },
          {
            path: 'employee/create',
            element: (
              <PrivateRoute redirectPath="login">
                <CreateEmployeePage />
              </PrivateRoute>
            ),
          },
          {
            path: 'employee/detail/:id',
            element: (
              <PrivateRoute redirectPath="login">
                <EmployeeDetailPage />
              </PrivateRoute>
            ),
          },
          {
            path: 'departments',
            element: (
              <PrivateRoute redirectPath="login">
                <DepartmentsPage />
              </PrivateRoute>
            ),
          },
        ],
      },
    ],
  },
])
