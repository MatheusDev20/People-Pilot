
import { CardList } from './components/CardList'
import { Header } from './components/Header'

export default function HomeEmployeePage() {
  return (
    <div className="flex flex-col md:flex-col sm:h-full bg-gray-50 max-w-full">
      <Header employeesSelected={3} />
      <CardList />
    </div>
  )
}
