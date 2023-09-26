import { ReactNode } from "react"
import { useAuth } from "../contexts/auth-context"
import { Navigate } from "react-router-dom"

type Props = {
  children: ReactNode
  redirectPath: string
}
export const PrivateRoute = ({ children, redirectPath }: Props) => {
  const { user } = useAuth()
  if(!user) return <Navigate to={redirectPath} replace />;

  return children
}