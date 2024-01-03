import { createBrowserRouter } from 'react-router-dom'
import { Root } from './root'
import EmployeePage from '../pages/employees'
import LoginPage from '../pages/login/page'
import CreateEmployeePage from '../pages/employees/create/page'
import EmployeeDetailPage from '../pages/employees/detail/page'
import { DepartmentsPage } from '../pages/departments/page'
import { PrivateRoute } from './private'
import { Provider } from '../providers'
import { CreateDepartmentPage } from '../pages/departments/create/page'
import { EditDepartmentPage } from '../pages/departments/edit'

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
          {
            path: 'departments/create',
            element: (
              <PrivateRoute redirectPath="/">
                <CreateDepartmentPage />
              </PrivateRoute>
            ),
          },
          {
            path: 'departments/edit/:id',
            element: (
              <PrivateRoute redirectPath="/">
                <EditDepartmentPage />
              </PrivateRoute>
            ),
          },
        ],
      },
    ],
  },
])
