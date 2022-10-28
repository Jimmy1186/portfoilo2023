import React, { FC } from "react";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { motion as m } from "framer-motion";
import { signOut } from "next-auth/react";

const Aside: FC = () => {
  const { data: session, status } = useSession();

  if (!session) {
    return (
      <aside className="hidden lg:flex lg:w-20 lg:justify-center">
        <m.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className=" hover:blown-500 fixed flex h-10 w-10 items-center justify-center rounded-full border-2 border-yellow-800"
        >
          <button
            title="login"
            onClick={() => signIn("google")}
            className="tooltip tooltip-bottom flex h-full w-full items-center justify-center"
            data-tip="登入留言吧"
          >
            <Image src={"/google.png"} height={10} width={10} />
          </button>
        </m.div>
      </aside>
    );
  }
  return (
    <>
      <aside className="hidden lg:flex lg:w-20 lg:justify-center">
        <label className=" tooltip tooltip-bottom fixed mt-5  modal-button"  htmlFor="my-modal-4" data-tip="去留個言吧">
          <m.div
            className="relative h-8 w-8 overflow-hidden rounded-full"
            whileHover={{ scale: 1.2 }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            {session.user ? (
              <Image
                src={session.user.image as string}
                layout="fill"
                objectFit="cover"
              />
            ) : (
              "no image"
            )}
          </m.div>
        </label>
      </aside>

      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative">
          <h3 className="text-lg font-bold">登出 ??</h3>
          <p className="py-4">謝謝惠顧</p>
          <div className="modal-action" onClick={()=>signOut()}>
            <label htmlFor="my-modal-4" className="btn" >
              Yay!
            </label>
          </div>
        </label>
      </label>
    </>
  );
};

export default Aside;
