/* eslint-disable no-void */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import React from 'react'
import { PersonSVG } from '../../../../../assets/svgs/person'
import { TaskSVG } from '../../../../../assets/svgs/tasks'
import { TabNavItem } from './components/TabNavItem'
import { DocumentsSVG } from '../../../../../assets/svgs/documents'

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
    <div role="tablist" className="tabs items-center tabs-boxed">
      <div
        role="tab"
        onClick={() => handleTab(0)}
        className={activeTab === 0 ? 'tab-active tab' : 'tab'}
      >
        <TabNavItem icon={<PersonSVG classStyles="w-6 h-6" />} text="Perfil" />
      </div>
      <div
        role="tab"
        onClick={() => handleTab(1)}
        className={activeTab === 1 ? 'tab-active tab' : 'tab'}
      >
        <TabNavItem icon={<TaskSVG classStyles="w-6 h-6" />} text="Tarefas" />
      </div>
      <div
        role="tab"
        onClick={() => handleTab(2)}
        className={activeTab === 2 ? 'tab-active tab' : 'tab'}
      >
        <TabNavItem
          icon={<DocumentsSVG classStyles="w-6 h-6" />}
          text="Documentos"
        />
      </div>
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
