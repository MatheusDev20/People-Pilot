import { type ReactNode } from "react";

export const CardWrapper = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  return (
    <div className="max-w-full border-solid dark:border-[#343536] border-2 flex flex-col p-2 gap-6 dark:bg-[#272729]">
      {children}
    </div>
  );
};
