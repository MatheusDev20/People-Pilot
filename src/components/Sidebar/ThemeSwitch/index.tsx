"use client";

import React, { useState } from "react";
import sun from "../../../assets/imgs/sun.png";
import moon from "../../../assets/imgs/moon.png";

export const ThemeSwitch = (): React.JSX.Element => {
  const [mode, setMode] = useState("light");
  const set = (theme: string): void => {
    setMode(theme);
  };
  return (
    <div className="hidden md:flex place-self-center w-3/4 h-12 border border-solid border-red mb-12 rounded-xl bg-gray-200 p-1">
      <div
        onClick={() => {
          set("light");
        }}
        className={`flex gap-2 cursor-pointer justify-center items-center rounded-xl ${
          mode === "light" ? "bg-white" : ""
        } w-1/2`}
      >
        <img src={sun} alt="sun" className="h-4 w-4 cursor-pointer " />
        <span className="font-semibold text-sm">Light</span>
      </div>

      <div
        onClick={() => {
          set("dark");
        }}
        className={`flex gap-2 cursor-pointer justify-center items-center ${
          mode === "dark" ? "bg-white" : ""
        } w-1/2 rounded-xl`}
      >
        <img src={moon} alt="moon" className="h-4 w-4 cursor-pointer" />
        <span className="font-semibold text-sm">Dark</span>
      </div>
    </div>
  );
};
