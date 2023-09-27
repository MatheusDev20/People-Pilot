import clsx from "clsx";
import React, { type InputHTMLAttributes, type ReactNode } from "react";
import { CiCircleAlert } from "react-icons/ci";

interface CustomInputProps extends InputHTMLAttributes<HTMLSelectElement> {
  wSize: "small" | "medium" | "large";
  icon: ReactNode;
  label: string;
  placeholder?: string;
  error: string[] | null;
}

const classes = {
  mediumInput: "w-1/2",
  largeInput: "w-full",
  smallInput: "w-1/4",
};

export const CustomSelect = ({
  wSize,
  icon,
  label,
  error,
  placeholder,
  ...rest
}: CustomInputProps): React.JSX.Element => {
  return (
    <div
      className={clsx(
        {
          [classes.mediumInput]: wSize === "medium",
          [classes.largeInput]: wSize === "large",
          [classes.smallInput]: wSize === "small",
        },
        "flex flex-col gap-2",
      )}
    >
      <label className="font-semibold text-sm p-2.5 text-gray-600">
        {label}
      </label>
      <div className="flex w-full relative">
        {/* Icon */}
        <div className="absolute flex border border-transparent left-0 top-0 h-full w-10">
          <div className="flex items-center justify-center rounded-tl rounded-bl z-10 bg-gray-100 text-gray-600 text-lg h-full w-full">
            {icon}
          </div>
        </div>
        <select
          defaultValue=""
          {...rest}
          className={clsx(
            { "border-red-600": error },
            "text-sm sm:text-base relative w-full border rounded bg-white placeholder-gray-400 focus:border-indigo-400 focus:outline-none py-2.5 pr-2 pl-12",
          )}
        >
          {/* TODO: Turn this dyamic */}
          <option value="">{placeholder}</option>
          <option value="Tech Department">Tech</option>
          <option value="People and Culture">People and culture</option>
          <option value="Operations">Operations</option>
        </select>
      </div>
      {error && (
        <div className="flex gap-4 items-center">
          <CiCircleAlert className="text-red-500" />
          <span className="text-sm text-red-500 font-semibold">{error[0]}</span>
        </div>
      )}
    </div>
  );
};
