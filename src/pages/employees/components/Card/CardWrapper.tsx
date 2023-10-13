import { type ReactNode } from "react";

export const CardWrapper = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  return (
    <div className="max-w-full border-solid dark:border-darkGray-600 border-2 flex flex-col p-2 gap-6 dark:bg-darkGray-700">
      {children}
    </div>
  );
};
