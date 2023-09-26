/* eslint-disable no-undef */
import { Outlet } from "react-router-dom";
import { AuthProvider } from "./contexts/auth-context";

export const Provider = (): JSX.Element => {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
};
