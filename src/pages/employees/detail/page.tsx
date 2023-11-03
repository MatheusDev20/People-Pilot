import Employee from '../../../assets/imgs/fake-avatar1.png'
import { InfoLabel } from './components/InfoLabel'
import { TabContent, TabsNavigation } from './components/Tabs'
import { useState } from 'react'
import { TabTitle } from './components/TabTitle'
import { BasicInfoProfile } from './components/Tabs/BasicProfile'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getEmployeeById } from '../../../api/employee'

export default function EmployeeDetailPage(): JSX.Element {
  const [activeTab, setActiveTab] = useState(0)

  const { id } = useParams()

  const { data, isSuccess } = useQuery({
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
    <div className="flex flex-col md:flex-row sm:h-full gap-10 p-3 max-w-full">
      {isSuccess && data ? (
        <aside className="p-6 flex gap-6 flex-col shadow-xl ml-8 items-center max-w-sm">
          {/* Avatar + Name */}
          <div className="flex flex-col gap-5 items-center">
            <img
              src={data.avatar ?? Employee}
              alt="employee_picture"
              className="w-48 h-48 rounded-md"
            />

            <span className="text-md font-black dark:text-white leading-6">
              {data.name}
            </span>

            <span className="text-xs font-semibold inline-block py-1 px-2 rounded text-blue-800 bg-blue-200 uppercase last:mr-0 mr-1">
              Employee
            </span>
          </div>

          {/* Other Infos */}
          <div className="flex flex-col gap-5 w-full">
            <InfoLabel title="Journey" info="5x8" w="100%" />
            <InfoLabel title="Admission Date" info={data.hire_date} w="100%" />
            <InfoLabel
              title="Manager"
              info={data.department.manager}
              w="100%"
            />
            <InfoLabel title="Position" info={data.position} w="100%" />
            <InfoLabel
              title="Department"
              info={data.department.name}
              w="100%"
            />
          </div>
        </aside>
      ) : (
        <span>Error Loading Data</span>
      )}
      {/* Basic Info + Avatar */}

      {/* Personal Information + Payment information */}
      {isSuccess ? (
        <div className="md:flex-1 flex flex-col">
          {/* Tabs */}
          <TabsNavigation handleTab={handleTab} activeTab={activeTab} />
          <TabContent idx={0} title="Basic Info Profile" activeTab={activeTab}>
            <TabTitle title="Personal Data" />
            <BasicInfoProfile employee={data} />
          </TabContent>
          <TabContent idx={1} title="Payment Information" activeTab={activeTab}>
            Aqui vai o básico de pagamento
          </TabContent>
        </div>
      ) : (
        <span>Error</span>
      )}
    </div>
  )
}
