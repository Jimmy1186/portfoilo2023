import React, { FC } from "react";
import Aside from "./Aside";
import TopSide from "./TopSide";
import Image from "next/image";
import { motion as m, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
interface Props {
  children: React.ReactNode;
}
const MainSide = ({ children }: Props) => {
  const router = useRouter();
  return (
    <>
      <m.div
        className="mx-auto h-full min-h-screen w-full max-w-5xl lg:rounded-lg lg:pt-16 "
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <TopSide />
        <main
          className="blown-100 min-h-48 flex h-full min-h-[70vh] gap-10 py-5
          px-6 shadow-2xl 
     "
        >
          <Aside />
          <AnimatePresence mode="wait">
            <m.div
              className="w-full"
              key={router.pathname}
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -5 }}
            >
              {children}
            </m.div>
          </AnimatePresence>
        </main>
        <footer className="min-h-[10vh] ">
          <div className="flex flex-1 flex-col items-center justify-center gap-6 pt-14 lg:flex-row lg:justify-between">
            <m.div className="z-0" whileHover={{ scale: 1.2 }}>
              <Link href={"/"}>
                <a>
                  <Image src={"/logo.png"} width={50} height={50} />
                </a>
              </Link>
            </m.div>
            <m.ul className="flex gap-9 ">
              {/* <li>工作經驗</li> */}
              <m.li whileHover={{ y: -4, scaleZ: 1.2 }}>
                <Link href={"resume"}>
                  <a>履歷</a>
                </Link>
              </m.li>
              {/* <m.li whileHover={{y:-4,scaleZ:1.2}}>
                <Link href={"about_me"}>
                  <a>關於我</a>
                </Link>
              </m.li> */}
            </m.ul>

            <div className="text-sm">
              © 2022 JIMMY HUNG. ALL RIGHTS RESERVED
            </div>
          </div>
          <div className="flex h-3 w-full flex-1">
            <div className="blown-100 h-3 w-full"></div>
            <div className="blown-300 h-3 w-full"></div>
            <div className="blown-400 h-3 w-full"></div>
            <div className="blown-500 h-3 w-full"></div>
          </div>
        </footer>
      </m.div>
    </>
  );
};

export default MainSide;
