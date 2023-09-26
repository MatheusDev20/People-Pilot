import { GET } from "./handlers";

export const getEmployeeList = async (): Promise<any> => {
  const data = await GET({ path: "/employee?name=Tech", authenticated: true });
  return data;
};
