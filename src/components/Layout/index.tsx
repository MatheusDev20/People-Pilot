'use client'
import React from 'react'
import { Header } from '../Header'
import { Sidebar } from '../Sidebar'
import { redirect } from 'next/navigation'
import { Provider } from '@/app/providers'
import { getFromLocalStorage } from '@/utils/auth'

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const authPayload = getFromLocalStorage('auth')
  if (!authPayload) redirect('/auth/login')
  const { userId } = JSON.parse(authPayload)

  return (
    <div className="flex">
      <Sidebar />
      <div className={`w-full flex flex-col ml-[80px] md:ml-[230px] h-screen`}>
        <Provider>
          <Header userId={userId} />
          <main className="flex-1 bg-gray-50 p-3">{children}</main>
        </Provider>
      </div>
    </div>
  )
}
