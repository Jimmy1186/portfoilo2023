import { NextPage } from "next";
import React from "react";
import Image from "next/image";
import { motion as m,Variants } from "framer-motion";

const listVariant:Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };
  const listItem:Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  };
  

const Resume: NextPage = () => {
  return (
    <div className="flex w-full flex-col">
      <section className="flex w-full flex-col gap-10">
        <h2 className="text-3xl font-extrabold">使用的語言與套件</h2>
        <div className="blown-200 flex w-full flex-col gap-5 py-8 px-12">
          <h3>這些是我用於前端的</h3>
          <m.ul className="flex gap-8 flex-wrap" variants={listVariant} initial={"hidden"} animate={"show"}>
            <m.li variants={listItem} className="tooltip" data-tip="HTML">
              <Image src={"/html.png"} height={50} width={50} />
            </m.li>
            <m.li variants={listItem} className="tooltip" data-tip="CSS">
              <Image src={"/css.png"} height={50} width={50} />
            </m.li>
            <m.li variants={listItem} className="tooltip" data-tip="JS">
              <Image src={"/js.png"} height={50} width={50} />
            </m.li>

            <m.li variants={listItem} className="tooltip" data-tip="TailwindCSS">
              <Image src={"/tailwind.png"} height={50} width={80} />
            </m.li>
            <m.li variants={listItem} className="tooltip" data-tip="TS">
              <Image src={"/ts.png"} height={50} width={70}/>
            </m.li>
            <m.li variants={listItem} className="tooltip" data-tip="ReactJS">
              <Image src={"/react.png"} height={50} width={50}/>
            </m.li>
            <m.li variants={listItem} className="tooltip" data-tip="NextJS">
              <Image src={"/next.png"} height={50} width={80}/>
            </m.li>
          </m.ul>
        </div>
        <div className="blown-200 flex w-full flex-col gap-5 py-8 px-12">
          <h3>這些是我用於後端的</h3>
          <m.ul className="flex gap-8  flex-wrap" variants={listVariant} initial={"hidden"} animate={"show"}>
            <m.li variants={listItem} className="tooltip" data-tip="React-Query">
              <Image src={"/react-query.png"} height={50} width={50}/>
               </m.li>
            <m.li variants={listItem} className="tooltip" data-tip="Prisms">
              <Image src={"/prisma.png"} height={50} width={50}/>
               </m.li>
            <m.li variants={listItem} className="tooltip" data-tip="MongoDB">
              <Image src={"/mongo.png"} height={50} width={120}/>
               </m.li>
            <m.li variants={listItem} className="tooltip" data-tip="MySQL">
              <Image src={"/mysql.png"} height={50} width={70}/>
               </m.li>
            <m.li variants={listItem} className="tooltip" data-tip="tRPC">
              <Image src={"/trpc-io.png"} height={50} width={50}/>
               </m.li>
            </m.ul>
        </div>
        <h2 className="text-3xl font-extrabold">工作經驗</h2>

        <div className="flex flex-col gap-5">
          <div className="">
            <h3 className="font-bold text-lg">遠端工作</h3>
            <h4 className="text-xs">全端 - 全職</h4>
          </div>
          <div className="">
          <h3 className="font-bold text-lg">中國龍</h3>
            <h4 className="text-xs">網頁切版 - 兼職 </h4>
          </div>
          <div className="">
          <h3 className="font-bold text-lg">大綜電腦</h3>
            <h4 className="text-xs">硬體維修、機器維護 - 全職</h4>
          </div>
          <div className="">
          <h3 className="font-bold text-lg">學校網站更新</h3>
            <h4 className="text-xs">網頁切版 - 兼職 </h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;
