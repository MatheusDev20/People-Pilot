/* eslint-disable @typescript-eslint/no-floating-promises */
import { useEffect } from 'react'
import sideImage from '@/assets/imgs/login_side.jpg'
import { useAuth } from '@/contexts/auth-context'
import { Logo } from '@/components/Logo'
import { LoginForm } from './components/Form'
import { useNavigate } from 'react-router-dom'

export default function LoginPage(): JSX.Element {
  const { user } = useAuth()

  const navigate = useNavigate()
  useEffect(() => {
    if (user) navigate('/app/employees')
  }, [])

  return (
    <div className="w-full h-screen">
      <main className="flex flex-col md:flex-row sm:h-full">
        <aside className="md:w-1/2 sm:w-full sm:h-full flex items-center py-12">
          <main className="flex flex-col p-12 mb-4 w-full">
            <div className="flex flex-col gap-11 items-center">
              <Logo isOpen />
              <h3 className="text-white tracking-tighter md:text-2xl text-sm">
                Welcome back! please enter your credentials!
              </h3>
            </div>
            <LoginForm />
          </main>
        </aside>
        <aside
          className="md:w-1/2 h-full bg-cover bg-center hidden md:flex"
          style={{
            backgroundImage: `url(${sideImage})`,
          }}
        />
      </main>
    </div>
  )
}
