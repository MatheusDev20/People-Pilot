import { useEffect } from "react";
import { CardList } from "./components/CardList";
import { Header } from "./components/Header";
import { getEmployeeList } from "../../api/employee";

export default function HomeEmployeePage(): JSX.Element {
  useEffect(() => {
    getEmployeeList();
  }, []);
  return (
    <div className="flex flex-col md:flex-col sm:h-full bg-gray-50 max-w-full">
      <Header />
      <CardList />
    </div>
  );
}
