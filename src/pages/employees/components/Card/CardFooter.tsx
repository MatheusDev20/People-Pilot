import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephoneForward } from "react-icons/bs";

interface Props {
  department: string;
  hiredDate: string;
  phone: string;
  email: string;
}
export const CardFooter = ({
  department,
  hiredDate,
  phone,
  email,
}: Props): React.JSX.Element => {
  return (
    <footer className="flex flex-col p-5 bg-gray-100 gap-6 rounded-md dark:bg-[#1A1A1B]">
      <header className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <span className="text-sm text-blue-500 font-semibold dark:text-white">
            Department
          </span>
          <p className="text-sm text-black font-semibold dark:text-white">
            Tech
          </p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <span className="text-sm text-blue-500 dark:text-white font-semibold">
            Hired Date
          </span>
          <p className="text-sm text-black font-semibold dark:text-white">
            {hiredDate}
          </p>
        </div>
      </header>

      <section className="flex flex-col gap-3 justify-center items-start">
        <div className="flex gap-5 items-center">
          <span className="text-lg text-blue-500 dark:text-white">
            <BsTelephoneForward />
          </span>
          <p className="text-sm text-black dark:text-white">{phone}</p>
        </div>

        <div className="flex gap-5 items-center">
          <span className="text-lg text-blue-500 dark:text-white">
            <AiOutlineMail />
          </span>
          <p className="text-sm text-black dark:text-white">{email}</p>
        </div>
      </section>
    </footer>
  );
};
