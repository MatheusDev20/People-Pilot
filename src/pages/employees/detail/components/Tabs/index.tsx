/* eslint-disable no-void */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import React from 'react'

interface NavigationProps {
  handleTab: (activeTab: number) => void
  activeTab: number
}
interface TabContentProps {
  idx: number
  children: React.ReactNode
  activeTab: number
}

export const TabsNavigation = ({
  handleTab,
  activeTab,
}: NavigationProps): React.JSX.Element => {
  return (
    <div role="tablist" className="tabs tabs-boxed">
      <span
        role="tab"
        className={activeTab === 0 ? 'tab-active tab' : 'tab'}
        onClick={() => handleTab(0)}
      >
        Profile
      </span>
      <span
        role="tab"
        className={activeTab === 2 ? 'tab-active tab' : 'tab'}
        onClick={() => handleTab(2)}
      >
        Tasks Assigned
      </span>
    </div>
  )
}

export const TabContent = ({
  idx,
  children,
  activeTab,
}: TabContentProps): React.JSX.Element => {
  return (
    <div
      className={`${
        activeTab === idx ? 'block' : 'hidden'
      } p-8 bg-white shadow-lg rounded-lg mt-8 flex flex-col border border-neutral gap-6 dark:bg-base-300`}
    >
      {children}
    </div>
  )
}
