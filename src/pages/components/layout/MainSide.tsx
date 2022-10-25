import React, { FC } from "react";
import Aside from "./Aside";
import TopSide from "./TopSide";
import Image from "next/image";
interface Props {
  children: React.ReactNode;
}
const MainSide = ({ children }: Props) => {
  return (
    <>
      <div className="mx-auto h-full min-h-screen w-full max-w-5xl    lg:rounded-lg">
        <TopSide />
        <main
          className="blown-100 min-h-48 flex h-full min-h-[70vh] py-5 px-6
          gap-10 shadow-2xl 
     "
        >
          <Aside />
          {children}
        </main>
        <footer className="min-h-[10vh] ">
          <div className="flex flex-col justify-center items-center gap-6 lg:justify-between flex-1 pt-14 lg:flex-row">
            <div className="z-0"><Image src={"/logo.png"} width={50} height={50} /></div>
            <ul className="flex gap-9 ">
              <li>工作經驗</li>
              <li>履歷</li>
              <li>關於我</li>
            </ul>
            <div className="text-sm">© 2022 JIMMY HUNG. ALL RIGHTS RESERVED</div>
          </div>
          <div className="w-full h-3 flex flex-1">
            <div className="blown-100 h-3 w-full"></div>
            <div className="blown-300 h-3 w-full"></div>
            <div className="blown-400 h-3 w-full"></div>
            <div className="blown-500 h-3 w-full"></div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default MainSide;
