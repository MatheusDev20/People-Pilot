import clsx from "clsx";
import React from "react";

interface CardLabelProps {
  status: "Not Active" | "Active";
}

const classes = {
  wrapperInactive: "border-red-600 bg-red-100",
  wrapperActive: "border-green-600 bg-green-100",
  textActive: "text-green-600",
  textInactive: "text-red-600",
};

export const CardLabel = ({ status }: CardLabelProps): React.JSX.Element => {
  return (
    <div
      className={clsx(
        {
          [classes.wrapperActive]: status === "Active",
          [classes.wrapperInactive]: status === "Not Active",
        },
        "border border-solid p-1 rounded-lg flex items-center",
      )}
    >
      <span
        className={clsx(
          {
            [classes.textActive]: status === "Active",
            [classes.textInactive]: status === "Not Active",
          },
          "text-xs font-semibold",
        )}
      >
        {status}
      </span>
    </div>
  );
};
