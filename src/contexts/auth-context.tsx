
import React, { ReactNode, createContext, useContext, useState } from 'react'

export type AuthenticationContextProps = {
  user: any
  setUser: React.Dispatch<any>
  isAuthenticated: boolean
}

export const AuthenticationContext =
  createContext<AuthenticationContextProps | null>(null)

const AuthProvider = ({
  children,
}: {
  children: ReactNode
}): React.JSX.Element => {
  const [user, setUser] = useState<any | null>(null)

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
