import React from "react";

interface NavigationProps {
  handleTab: (activeTab: number) => void;
  activeTab: number;
}
interface TabContentProps {
  idx: number;
  title: string;
  children: React.ReactNode;
  activeTab: number;
}

export const TabsNavigation = ({
  handleTab,
  activeTab,
}: NavigationProps): React.JSX.Element => {
  return (
    <div className="flex text-sm font-medium text-center text-gray-500 justify-center pt-2">
      <ul className="flex flex-wrap justify-self-center">
        <li className="mr-2">
          <span
            onClick={() => {
              handleTab(0);
            }}
            className={`cursor-pointer inline-block p-4 hover:border-b-2 hover: border-gray-300 ${
              activeTab === 0
                ? " text-blue-600 border-blue-700 border-b-2"
                : "text-gray-400"
            } rounded-t-lg`}
          >
            Basic Profile Info
          </span>
        </li>
        <li className="mr-2">
          <span
            onClick={() => {
              handleTab(1);
            }}
            className={`cursor-pointer inline-block p-4 hover:border-b-2 hover: border-gray-300 ${
              activeTab === 1
                ? " text-blue-600 border-blue-700 border-b-2"
                : "text-gray-400"
            } rounded-t-lg`}
          >
            Payment Information
          </span>
        </li>
        {/* <li className="mr-2">
          <span
            onClick={() => handleTab(2)}
            className="cursor-pointer inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
          >
            Tasks Assigned
          </span>
        </li> */}
      </ul>
    </div>
  );
};

export const TabContent = ({
  idx,
  title,
  children,
  activeTab,
}: TabContentProps): React.JSX.Element => {
  return (
    <div
      className={`${
        activeTab === idx ? "block" : "hidden"
      } p-8 bg-white shadow-lg rounded-lg mt-8 flex flex-col gap-6`}
    >
      {children}
    </div>
  );
};
