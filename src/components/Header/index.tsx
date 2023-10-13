import React from "react";
import avatar from "../../assets/imgs/fake-avatar.jpg";
import { MyDropdown } from "./Dropdown";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsChatLeftText } from "react-icons/bs";
import { useAuth } from "../../contexts/auth-context";

export const Header = (): React.JSX.Element => {
  const { user } = useAuth();
  return (
    <header className="flex justify-end border-b-[0.50px] border-solid p-4 dark:bg-[#1A1A1B] border-[#343536]">
      {/* Logged user Avatar */}
      <div className="flex gap-12 md:justify-normal">
        <div className="gap-6 items-center hidden md:flex">
          {/* Icons */}
          <IoIosNotificationsOutline
            size={24}
            className="text-gray-500 font-semibold cursor-pointer hover:text-blue-800"
          />
          <BsChatLeftText className="text-gray-500 font-semibold cursor-pointer hover:text-blue-800" />
        </div>
        <div className="flex gap-6">
          <img
            src={avatar}
            className="w-8 h-8 md:w-10 md:h-10 rounded-full cursor-pointer"
            alt="me"
          />
          {/* Profile Avatar and Role */}
          <div className="flex-col justify-center hidden md:flex">
            <span className="text-sm text-blue-800 font-bold">
              {user?.name}
            </span>
            <span className="text-gray-400 font-semibold text-xs place-self-start">
              {user?.position}
            </span>
          </div>

          <div className="place-self-center mr-11">
            <MyDropdown />
          </div>
        </div>
      </div>
    </header>
  );
};
