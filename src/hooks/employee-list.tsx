/* eslint-disable @typescript-eslint/no-floating-promises */
import { useEffect, useState } from "react";
import { type RequestState } from "../@types/http";
import { type Employee } from "../@types/employees";
import { getEmployeeList } from "../api/employee";
type Hook = {
  requestState: RequestState;
  data: Employee[];
};
export const useEmployeeList = (): Hook => {
  const [requestState, setRequestState] = useState<RequestState>({
    error: "",
    loading: false,
  });
  const [data, setData] = useState<Employee[]>([]);

  useEffect(() => {
    const fetch = async (): Promise<void> => {
      try {
        setRequestState({ ...requestState, loading: true });
        const list = await getEmployeeList();
        setData(list);
      } catch (err) {
        setRequestState({
          ...requestState,
          error: "Failed to Fetch Employee List",
        });
      }
    };
    fetch();
  }, []);

  return { requestState, data };
};
