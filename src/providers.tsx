/* eslint-disable no-undef */
import { Outlet } from 'react-router-dom'
import { AuthProvider } from './contexts/auth-context'

export const Provider = () => {
  return <AuthProvider>
           <Outlet />
        </AuthProvider>
}
