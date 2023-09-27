import React from "react";
import { EmployeeCard } from "../Card";
import { Pagination } from "../Pagination";
import { type Employee } from "../../../../@types/employees";

interface Props {
  list: Employee[];
}
export const CardList = ({ list }: Props): React.JSX.Element => {
  return (
    <main className="flex flex-col gap-0">
      <div className="p-8 grid grid-cols-4 gap-4 w-full">
        {list.map((employee) => {
          return (
            <EmployeeCard.Wrapper key={employee.id}>
              <EmployeeCard.Header
                employeeStatus={
                  employee.status !== "Active" ? "Not Active" : employee.status
                }
              />
              <EmployeeCard.Info
                employeeName={employee.name}
                employeePosition={employee.position}
                employeeAvatar={employee.avatar}
              />
              <EmployeeCard.Footer
                department="Tech"
                email={employee.email}
                hiredDate={employee.hire_date}
                phone={employee.phone}
              />
            </EmployeeCard.Wrapper>
          );
        })}
      </div>
      <footer className="px-8 place-self-center w-full">
        <Pagination.Wrapper>
          <Pagination.Limit />
          <Pagination.List />
        </Pagination.Wrapper>
      </footer>
    </main>
  );
};
