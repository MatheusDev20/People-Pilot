import React from "react";
import logo from "../../assets/imgs/logo1.png";
import { Navigation } from "./Navigation";
import { ThemeSwitch } from "./ThemeSwitch";
import { Link } from "react-router-dom";
import { useTheme } from "../../hooks/theme";

export const Sidebar = (): React.JSX.Element => {
  const { theme } = useTheme();
  console.log("Theme na Sidebar", theme);

  return (
    <aside
      className={`flex md:w-[230px] w-[80px] border-r-2 border-solid border-gray-200 dark:border-gray-700 dark:bg-gray-800 flex-col gap-2 h-screen justify-between fixed`}
    >
      <div className="relative">
        <header className="flex items-center justify-center py-12">
          <Link to="/app/home">
            <img
              src={logo}
              alt="KSX"
              className="place-self-center cursor-pointer"
            />
            {/* <span className="text-3xl place-self-center cursor-pointer dark:text-white">
              STX
            </span> */}
          </Link>
        </header>
        <Navigation />
      </div>
      <ThemeSwitch />
    </aside>
  );
};
