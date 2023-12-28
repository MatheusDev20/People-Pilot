import React, { useEffect } from 'react'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode
}): React.JSX.Element {
  useEffect(() => {
    const root = window.document.documentElement
    root.classList.add('dark')
  }, [])

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className={'w-full flex flex-col flex-1'}>
        <Header />
        <main className="p-3 bg-base-100">{children}</main>
      </div>
    </div>
  )
}
