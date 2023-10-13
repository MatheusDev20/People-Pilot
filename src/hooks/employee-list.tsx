/* eslint-disable @typescript-eslint/no-floating-promises */
import { useQuery } from "@tanstack/react-query";
import { type Employee } from "../@types/employees";
import { getEmployeeList } from "../api/employee";

type Hook = {
  data: Employee[];
  isLoading: boolean;
  isError: boolean;
};
export const useEmployeeList = (): Hook => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["employeeList"],
    queryFn: getEmployeeList,
  });

  return { isError, isLoading, data: data ?? [] };
};
