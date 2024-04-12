import Employee from '../../../assets/imgs/fake-avatar1.png'
import { TabContent, TabsNavigation } from './components/Tabs'
import { useState } from 'react'
import { BasicInfoProfile } from './components/Tabs/Profile'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getEmployeeById } from '../../../api/employee/employee.query'
import clsx from 'clsx'
import { Task } from './components/Tabs/Tasks'
import { DocumentsData } from './components/Tabs/Documents'

export default function EmployeeDetailPage(): JSX.Element {
  const [activeTab, setActiveTab] = useState(0)
  const { id } = useParams()

  const { data: employee, isSuccess } = useQuery({
    queryKey: ['employeeDetail', id],
    queryFn: async () => {
      const data = await getEmployeeById(id ?? '')
      return data
    },
  })

  const handleTab = (activeTab: number): void => {
    setActiveTab(activeTab)
  }

  return (
    <div className="flex flex-col md:flex-row sm:h-full gap-10 p-8 max-w-full">
      {isSuccess && employee ? (
        <aside className="p-12 max-h-[360px] flex gap-6 flex-col shadow-xl ml-8 items-center rounded-md max-w-sm border border-neutral">
          {/* Avatar + Name */}
          <div className="flex flex-col gap-7 items-center">
            <img
              src={employee.avatar ?? Employee}
              alt="employee_picture"
              className="w-32 h-32 rounded-full object-cover"
            />
            <div className="flex flex-col gap-2 items-center">
              <span className="text-md font-black dark:text-white leading-6">
                {employee.name}
              </span>
              <span>{employee.position}</span>
            </div>

            <span
              className={clsx(
                'text-xs font-semibold inline-block py-1 px-2 rounded text-blue-800 bg-blue-200 uppercase last:mr-0 mr-1',
                employee.isManager
                  ? 'bg-green-200 text-green-800'
                  : 'bg-blue-200',
              )}
            >
              {employee.isManager ? 'Manager' : 'Employee'}
            </span>
          </div>

          {/* <div className="flex flex-col gap-5 w-full">
            <InfoLabel
              title="Data de Admissão"
              info={convertDateFormat(employee.hire_date)}
              w="100%"
            />
            <InfoLabel
              title="Gestor"
              info={
                employee.department.manager
                  ? employee.department.manager.name
                  : 'N/A'
              }
              w="100%"
            />
            <InfoLabel title="Cargo" info={employee.position} w="100%" />
            <InfoLabel
              title="Departmento"
              info={employee.department.name}
              w="100%"
            />
          </div> */}
        </aside>
      ) : (
        <span>Error Loading Data</span>
      )}

      {/* Basic Info + Avatar */}

      {isSuccess ? (
        <div className="md:flex-1 flex flex-col">
          <TabsNavigation handleTab={handleTab} activeTab={activeTab} />
          <TabContent idx={0} activeTab={activeTab}>
            <BasicInfoProfile employee={employee} />
          </TabContent>
          <TabContent idx={1} activeTab={activeTab}>
            <Task />
          </TabContent>
          <TabContent idx={2} activeTab={activeTab}>
            <DocumentsData data={employee.documents} />
          </TabContent>
        </div>
      ) : (
        <span>Error</span>
      )}
    </div>
  )
}
