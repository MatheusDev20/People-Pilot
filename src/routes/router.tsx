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
        path: '/',
        element: <LoginPage />,
      },
      {
        path: '/app',
        element: (
          <PrivateRoute redirectPath="/">
            <Root />
          </PrivateRoute>
        ),
        children: [
          {
            path: 'employees',
            element: (
              <PrivateRoute redirectPath="/">
                <EmployeePage />
              </PrivateRoute>
            ),
          },
          {
            path: 'employee/create',
            element: (
              <PrivateRoute redirectPath="/">
                <CreateEmployeePage />
              </PrivateRoute>
            ),
          },
          {
            path: 'employee/detail/:id',
            element: (
              <PrivateRoute redirectPath="/">
                <EmployeeDetailPage />
              </PrivateRoute>
            ),
          },
          /* Departments Routes */
          {
            path: 'departments',
            element: (
              <PrivateRoute redirectPath="/">
                <DepartmentsPage />
              </PrivateRoute>
            ),
          },
        ],
      },
    ],
  },
])
