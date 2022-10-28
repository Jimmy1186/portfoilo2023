import React, { FC, useEffect, useRef } from "react";
import {
  motion as m,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";


const Skills: FC = () => {
  // const ref = useRef(null);
  const { scrollY } = useScroll();

  // const scaleX = useSpring(scrollYProgress)

  const title1 = useTransform(scrollY, [50, 600], [0, 1.2]);
  const title2 = useTransform(scrollY, [1000, 1500], [0, 1.2]);

  const text1 = useTransform(scrollY, [600, 700], [0, 1.2]);
  const text2 = useTransform(scrollY, [1500, 1600], [0, 1.2]);


  // const png1 = useTransform(scrollY, [, ], [0, 1.2]);
  const png1 = useTransform(scrollY, [400, 800], [50, 0]);
  const png1_Opa = useTransform(scrollY, [400, 800], [0, 1]);

  const png2 = useTransform(scrollY, [600, 1000], [-100, 0]);
  const png2_Opa = useTransform(scrollY, [600, 1000], [0, 1]);


  const png3 = useTransform(scrollY, [800, 1200], [50, 0]);
  const png3_Opa = useTransform(scrollY, [800, 1200], [0, 1]);

  const png4 = useTransform(scrollY, [1000, 1400], [-100, 0]);
  const png4_Opa = useTransform(scrollY, [1000, 1400], [0, 1]);



  const png5 = useTransform(scrollY, [1200, 1600], [-100, 0]);
  const png5_Opa = useTransform(scrollY, [1200, 1600], [0, 1]);


  const png6 = useTransform(scrollY, [600, 1600], [0, 1]);
  const png6_Opa = useTransform(scrollY, [600, 1600], [0, 1]);


  // useEffect(() => {
  //   scrollY.onChange((sub) => {
  //     console.log(sub);
  //   });
  // }, []);
  return (
    <m.div
      className="blown-200 flex flex-col h-full w-full gap-3 rounded-lg p-10 shadow-2xl lg:flex-row"
    >
      <div className="flex flex-col gap-5 lg:w-1/3">
        <div>
          <m.h3 className="text-2xl font-bold" style={{ opacity: title1 }}>
            前端
          </m.h3>
          <m.span style={{ opacity: text1 }}>
            主要以SPA為主，以目前主流的套件語法不斷學習，像是NextJS(ReactJS)、TailwindCSS、Typescript。
          </m.span>
        </div>
        <div className="">
          <m.h3 className="text-2xl font-bold" style={{ opacity: title2 }}>
            後端
          </m.h3>
          <m.span style={{ opacity: text2 }}>
            從Node後端學習起、目前常用NextJS、tRPC、Prisma以及MySQL於後端。
          </m.span>
        </div>
        {/* <h3 className='font-bold text-2xl' >看我的作品集</h3> */}
      </div>
      <div className="grid grid-cols-9 grid-rows-6  w-full min-h-[30vh] md:min-h-[45vh] lg:min-h-[40vh] lg:w-2/3">
      <m.div 
          style={{y:png5,opacity:png5_Opa}}
      className="w-9/12 h-9/12 relative visible
       col-start-5 col-end-8 row-start-6 row-end-7"
       ><Image src={"/static/1.png"} layout="fill" objectFit="cover" />
       </m.div>
      
       <m.div
       style={{x:png1,opacity:png1_Opa}}
       className="w-[80%] h-[80%] relative visible
       col-start-7 col-end-10 row-start-1 row-end-3"
       ><Image src={"/static/2.png"} layout="fill" objectFit="cover" />
       </m.div>


       <m.div 
        style={{x:png4,opacity:png4_Opa}}
       className="w-full h-full relative visible
       col-start-3 col-end-5 row-start-5 row-end-6"
       ><Image src={"/static/3.png"} layout="fill" objectFit="cover" />
       </m.div>


       <m.div 
         style={{x:png3,opacity:png3_Opa}}
       className="w-[60%] h-[40%] relative visible
       col-start-8 col-end-10 row-start-5 row-end-7"
       ><Image src={"/static/4.png"} layout="fill" objectFit="cover" />
       </m.div>

       <m.div 
         style={{x:png2,opacity:png2_Opa}}
       className="w-[80%] h-[80%] relative visible
       col-start-2 col-end-5 row-start-2 row-end-4"
       ><Image src={"/static/5.png"} layout="fill" objectFit="cover" />
       </m.div>


       <m.div 
        style={{scale:png6,opacity:png6_Opa}}
       className="w-full h-full relative visible
       col-start-4 col-end-8 row-start-2 row-end-6"
       ><Image src={"/static/6.png"} layout="fill" objectFit="cover" />
       </m.div>


      </div>
    </m.div>
  );
};

export default Skills;
