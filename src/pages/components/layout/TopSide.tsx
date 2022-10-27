import Image from "next/image";
import React, { FC, useState } from "react";
import NavBtn from "./NavBtn";
import Link from "next/link";
import { motion as m, Variants } from "framer-motion";

const navAnimate: Variants = {
  open: {
    left: 0,
    display: "block",
    opacity: 1,
  },
  closed: {
    left: -72,
    opacity: 0,
  },
};

const TopSide: FC = () => {
  const [navState, setNavState] = useState<boolean>(false);

  return (
    <nav
      className={`   blown-100 
    h-20 lg:mt-16 lg:flex`}
    >
      <m.div
        className={`fixed z-20 flex h-screen w-[70vw] flex-col items-center gap-6 transition-all ${
          navState ? "left-0 block opacity-100" : "-left-72 opacity-0"
        } bg-white lg:static lg:left-0 lg:flex lg:h-full lg:w-full lg:flex-row lg:opacity-100`}
      >
        <Link href="/">
          <a>
            <m.div
              initial={{ x: -50 }}
              animate={{ x: 0 }}
              whileHover={{scale:1.2}}
              className="flex justify-center py-8 px-5 align-middle"
            >
              <Image src={"/logo.png"} width={50} height={50} />
            </m.div>
          </a>
        </Link>

        <div className="align-center hidden gap-2 pl-5  lg:flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>

          <h3 className="text-sm font-bold">jimmy10614d005@gmail.com</h3>
        </div>


        <m.ul
          className="order-2 flex flex-col gap-3 lg:order-3 lg:ml-auto lg:flex-row lg:pr-5"
          // initial={{x:-50}} whileInView={{x:0}} animate={{x:0}}
          // animate={navState?"open":"closed"}
          // variants={navAnimate}
        >
          <m.li whileHover={{y:-4,scaleZ:1.2}} className="">
            <Link href={"/resume"}>
              <a className="flex gap-3" >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
                履歷
              </a>
            </Link>
          </m.li>
          {/* <m.li whileHover={{y:-4,scaleZ:1.2}}>
            <Link href="about_me">
              <a className="flex gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
                關於我
              </a>
            </Link>
          </m.li> */}
        </m.ul>
      </m.div>

      <NavBtn setNavState={setNavState} navState={navState} />
    </nav>
  );
};

export default TopSide;
