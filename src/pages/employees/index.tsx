/* eslint-disable @typescript-eslint/no-floating-promises */

import { CardList } from "./components/CardList";
import { Header } from "./components/Header";

import { useEmployeeList } from "../../hooks/employee-list";

export default function HomeEmployeePage(): JSX.Element {
  const { data, requestState } = useEmployeeList();
  // TODO: Melhorar
  if (requestState.loading) return <h1>Loading...</h1>;

  return (
    <>
      {requestState.error ? (
        // TODO: Melhorar
        <h1>Deu erro fi</h1>
      ) : (
        <div className="flex flex-col md:flex-col sm:h-full bg-gray-50 max-w-full">
          <Header foundedEmployees={data.length} />
          <CardList list={data} />
        </div>
      )}
    </>
  );
}
