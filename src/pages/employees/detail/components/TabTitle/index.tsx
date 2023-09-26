import React from "react";
import EditIcon from "../../../../../assets/svgs/edit.svg";

interface TabTitleProps {
  title: string;
}

export const TabTitle = ({ title }: TabTitleProps): React.JSX.Element => {
  return (
    <header className="flex justify-between">
      <span className="text-2xl font-semibold">{title}</span>
      <div>
        <img className="w-6 cursor-pointer" src={EditIcon} alt="edit" />
      </div>
    </header>
  );
};
