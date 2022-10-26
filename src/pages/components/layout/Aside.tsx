import React, { FC } from "react";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import {motion as m } from "framer-motion"

const Aside: FC = () => {
  const { data: session, status } = useSession();

  if (!session) {
    return (
      <aside className="hidden lg:flex lg:w-20 lg:justify-center">
        <m.div  initial={{scale:0,opacity:0}} animate={{scale:1,opacity:1}} transition={{duration:1}} className=" fixed w-10 h-10 rounded-full border-2 border-yellow-800 flex justify-center items-center hover:blown-500">
          <button title="login" onClick={() => signIn("google")} className="flex justify-center items-center w-full h-full " >
            <Image src={"/google.png"} height={10} width={10} />
          </button>
        </m.div>
      </aside>
    );
  }
  return (
    <aside className="hidden lg:flex lg:w-20 lg:justify-center">
      <div className=" fixed mt-5">
        <m.div className="w-8 h-8 relative rounded-full overflow-hidden"  initial={{scale:0}} animate={{scale:1}}>
          {session.user ? (
            <Image src={session.user.image as string} layout="fill" objectFit="cover" />
          ) : (
            "no image"
          )}
        </m.div>
      </div>
    </aside>
  );
};

export default Aside;
