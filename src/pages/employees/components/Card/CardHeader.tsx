import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { CardLabel } from "./CardLabel";

interface CardLabelProps {
  employeeStatus: "Not Active" | "Active";
}

export const CardHeader = ({
  employeeStatus,
}: CardLabelProps): React.JSX.Element => {
  return (
    <header className="flex justify-between items-center">
      <input
        type="checkbox"
        // onChange={(e) => handleCheck(e)}
        className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <div className="flex gap-4 items-center">
        <CardLabel status={employeeStatus} />
        <BsThreeDots className="cursor-pointer hover:text-blue-600 dark:text-white" />
      </div>
    </header>
  );
};
