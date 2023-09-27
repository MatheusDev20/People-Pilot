import { type ReactNode } from "react";

export const CardWrapper = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  return (
    <div className="max-w-full border-solid border flex flex-col p-2 gap-6 bg-white">
      {children}
    </div>
  );
};
