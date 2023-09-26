import React from "react";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <div className="flex">
      <Sidebar />
      <div className={`w-full flex flex-col ml-[80px] md:ml-[230px] h-screen`}>
        <Header />
        <main className="flex-1 bg-gray-50 p-3">{children}</main>
      </div>
    </div>
  );
}
