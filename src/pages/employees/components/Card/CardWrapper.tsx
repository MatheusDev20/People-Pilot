import { ReactNode } from 'react'

export const CardWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-full border-solid border flex flex-col p-2 gap-6 bg-white">
      {children}
    </div>
  )
}
