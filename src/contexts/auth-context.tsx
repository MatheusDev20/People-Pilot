
import React, { ReactNode, createContext, useContext, useState } from 'react'
import { ActiveUser } from '../@types/employees'

export type AuthenticationContextProps = {
  user: ActiveUser | null
  setUser: React.Dispatch<ActiveUser>
  isAuthenticated: boolean
}

export const AuthenticationContext =
  createContext<AuthenticationContextProps | null>(null)

const AuthProvider = ({
  children,
}: {
  children: ReactNode
}): React.JSX.Element => {
  const [user, setUser] = useState<ActiveUser | null>(null)

  return (
    <AuthenticationContext.Provider
      value={{ user, setUser, isAuthenticated: false }}
    >
      {children}
    </AuthenticationContext.Provider>
  )
}

const useAuth = (): AuthenticationContextProps => {
  const context = useContext(AuthenticationContext)
  if (context == null) {
    throw new Error('useAuth must be used within a provider')
  }
  return context
}

export { AuthProvider, useAuth }
