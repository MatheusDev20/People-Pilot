/* eslint-disable @typescript-eslint/no-floating-promises */
import React, {
  type ReactNode,
  createContext,
  useContext,
  useState,
} from 'react'
import { type ActiveUser } from '../@types/employees'
import { type Organization, type LoginFormData } from '../@types'
import { login, logout } from '../api/auth/auth.query'
import { useNavigate } from 'react-router-dom'
import { removeLocalStorage, setLocalStorage } from '../utils/auth'
import { getMe } from '@/api/employee/employee.query'

export interface AuthenticationContextProps {
  user: ActiveUser | null
  organization: Organization | null
  setUser: React.Dispatch<ActiveUser>
  signIn: (loginInformation: LoginFormData) => Promise<void>
  signOut: () => Promise<void>
  checkAuth: () => Promise<void>
  loading: boolean
  failedMessage: string
  setFailedMessage: React.Dispatch<string>
}

export const AuthenticationContext =
  createContext<AuthenticationContextProps | null>(null)

const AuthProvider = ({
  children,
}: {
  children: ReactNode
}): React.JSX.Element => {
  const [user, setUser] = useState<ActiveUser | null>(() => {
    const user = localStorage.getItem('profile')
    return user ? JSON.parse(user) : null
  })

  const [organization, setOrganization] = useState<Organization | null>(() => {
    const organization = localStorage.getItem('organization')
    return organization ? JSON.parse(organization) : null
  })

  const [loading, setLoading] = useState<boolean>(false)
  const [failedMessage, setFailedMessage] = useState<string>('')

  const navigate = useNavigate()

  const checkAuth = async (): Promise<void> => {
    try {
      const me = await getMe()
      setUser(me)
    } catch (err: any) {
      navigate('/')
    }
  }

  const signIn = async (loginInformation: LoginFormData): Promise<void> => {
    setLoading(true)
    try {
      const response = await login(loginInformation)
      const { user } = response
      const { organization, ...rest } = user
      setUser(user)
      setOrganization(organization)

      setLocalStorage('profile', JSON.stringify(rest))
      setLocalStorage('organization', JSON.stringify(organization))

      setLoading(false)
      navigate('/app/employees')
    } catch (err: any) {
      setLoading(false)
      setFailedMessage('Credenciais Inválidas')
    }
  }

  const signOut = async (): Promise<void> => {
    await logout()
    removeLocalStorage('profile')
    removeLocalStorage('organization')
    setUser(null)
    navigate('/')
  }

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        organization,
        setUser,
        signIn,
        signOut,
        checkAuth,
        loading,
        failedMessage,
        setFailedMessage,
      }}
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
