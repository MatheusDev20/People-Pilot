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
    <footer className="flex flex-col p-5 bg-gray-100 gap-6 rounded-md">
      <header className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <span className="text-sm text-blue-500 font-semibold">
            Department
          </span>
          <p className="text-sm text-black font-semibold">Tech</p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <span className="text-sm text-blue-500 font-semibold">
            Hired Date
          </span>
          <p className="text-sm text-black font-semibold">{hiredDate}</p>
        </div>
      </header>

      <section className="flex flex-col gap-3 justify-center items-start">
        <div className="flex gap-5 items-center">
          <span className="text-lg text-blue-500 font-semibold">
            <BsTelephoneForward />
          </span>
          <p className="text-sm text-black font-semibold">{phone}</p>
        </div>

        <div className="flex gap-5 items-center">
          <span className="text-lg text-blue-500 font-semibold">
            <AiOutlineMail />
          </span>
          <p className="text-sm text-black font-semibold">{email}</p>
        </div>
      </section>
    </footer>
  );
};
