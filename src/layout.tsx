import React from 'react'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Provider } from './providers'

export default function BaseLayout({children}: { children: React.ReactNode}) {

  return (
    <div className="flex">
      <Sidebar />
      <div className={`w-full flex flex-col ml-[80px] md:ml-[230px] h-screen`}>
        <Provider>
          <Header userId={'3'} />
          <main className="flex-1 bg-gray-50 p-3">{children}</main>
        </Provider>
      </div>
    </div>
  )
}
