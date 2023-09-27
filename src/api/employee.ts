import { type Employee } from "../@types/employees";
import { GET } from "./handlers";

export const getEmployeeList = async (): Promise<Employee[]> => {
  const data = await GET({ path: "/employee?name=Tech", authenticated: true });
  return data;
};
