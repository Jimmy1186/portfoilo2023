import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { trpc } from "../utils/trpc";
import Image from "next/image";
import Skills from "./components/index/Skills";
import { motion as m } from "framer-motion";
import Comments from "./components/index/Comments";
import { compareAsc, format } from "date-fns";

const Home: NextPage = () => {
  const { data: comments, refetch } = trpc.guest.getAll.useQuery();
  return (
    <>
      <Head>
        <title>Jimmy Hung Portfolio | 洪翊銘 作品集 | 履歷 </title>
        <meta
          name="description"
          content="Jimmy Hung 洪翊銘的個人資訊，工作經驗及聯絡方式"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <m.div className="flex flex-col gap-24">
        <section className="flex flex-col h-full gap-3 pt-20 lg:flex-row">
          <div className="flex flex-col gap-3 lg:w-1/2">
            <m.h1
              className="text-4xl font-extrabold"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
            >
              Jimmy <br />
              Hung
            </m.h1>
            <m.span
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              venenatis tempor risus, vitae luctus ligula rutrum vitae. Cras
              ullamcorper tempus sollicitudin. Nunc sed nibh eget turpis
              consectetur blandit.{" "}
            </m.span>
          </div>
          <m.div
            className="relative h-64 w-full lg:w-1/2"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Image src={"/cowboy.png"} layout="fill" objectFit="cover" />
          </m.div>
        </section>

        <section className="h-screen ">
          <div className="sticky top-20 flex flex-col gap-5  ">
            <h2 className="text-3xl font-extrabold">我的專長</h2>
            <Skills />
          </div>
        </section>
        <section className="flex justify-center">
          <div className="blown-200 flex  w-full flex-col gap-10 rounded-lg p-5 shadow-2xl lg:w-1/2 ">
            <m.div
              className="relative h-64 w-full rounded-2xl lg:w-1/2"
              initial={{ x: -50, opacity: 0 }}
              exit={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Image src={"/cowboy.png"} layout="fill" objectFit="cover" />
            </m.div>
            <div className="flex flex-col gap-3">
              <m.h3
                className="flex items-center gap-3 text-xl font-bold"
                initial={{ x: -50, opacity: 0 }}
                exit={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
              >
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
                    d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                  />
                </svg>
                README
              </m.h3>
              <m.span
                initial={{ x: -50, opacity: 0 }}
                exit={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas ac sodales dui. Suspendisse porta fringilla turpis.
                Phasellus accumsan ex odio, tempor accumsan leo ultrices
                venenatis. Proin porta tortor ut elit molestie, malesuada
                posuere elit finibus. Nullam enim diam, dignissim et finibus ac,
                commodo at sem. Praesent maximus, turpis sed gravida pretium,
                ligula tortor vulputate libero, at auctor lacus ante ut dolor.
                Proin posuere turpis purus,{" "}
              </m.span>
            </div>
          </div>
        </section>
        <section>
          <div className="flex flex-col gap-5">
            <div className="">
              <h2 className="text-3xl font-extrabold">作品集</h2>
              <h3 className="blown-500-text text-xs">工作或練習作品</h3>
            </div>
            <Link href="https://github.com/Jimmy1186/Dashboard-t3">
                <a>sd</a>
                </Link>
            <div className="flex w-full flex-col gap-10 lg:flex-row lg:flex-wrap">
              <Link href="https://github.com/Jimmy1186/Dashboard-t3">
                <m.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  whileHover={{ scale: 1.1 }}
                  className="blown-200 relative h-32 rounded-3xl shadow-2xl md:h-44 lg:h-72 lg:w-2/5"
                >
                  <Image
                    src={"/dashboard.jpg"}
                    layout="fill"
                    objectFit="cover"
                  />
                </m.div>
              </Link>
              <Link href="https://github.com/Jimmy1186/shrimp_web">
                <m.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  whileHover={{ scale: 1.1 }}
                  className="blown-200 relative h-32 rounded-3xl shadow-2xl md:h-44 lg:h-72 lg:w-2/5"
                >
                  <Image src={"/shirp.jpg"} layout="fill" objectFit="cover" />
                </m.div>
              </Link>
              <Link href="https://github.com/Jimmy1186/gallery-portfolio">
                <m.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  whileHover={{ scale: 1.1 }}
                  className="blown-200 relative h-32 rounded-3xl shadow-2xl md:h-44 lg:h-72 lg:w-2/5"
                >
                  <Image
                    src={"/oldPortfolio.jpg"}
                    layout="fill"
                    objectFit="cover"
                  />
                </m.div>
              </Link>
            </div>
          </div>
        </section>
        <section>
          <div className="flex flex-col gap-5">
            <div className="">
              <h2 className="text-3xl font-extrabold">留言區</h2>
              <h3 className="blown-500-text pl-1 text-xs">歡迎留言~~</h3>
            </div>
            <div className="">
              <ul className="flex flex-col gap-5">
                {comments
                  ? comments.flatMap((v, i) => {
                      return (
                        <li key={i}>
                          <div className="flex items-center gap-3">
                            <div className="relative h-8 w-8 overflow-hidden rounded-full">
                              <Image
                                src={v.users.image as string}
                                layout="fill"
                                objectFit="cover"
                                alt="user photo"
                              />
                            </div>
                            <span>{v.users.name}</span>
                            <span>
                              {format(new Date(v.create_at), "yyyy/MM/dd")}
                            </span>
                          </div>

                          <span className="pl-11">{v.message}</span>
                        </li>
                      );
                    })
                  : []}
              </ul>
            </div>
            <div className="">
              <Comments refetch={refetch} />
            </div>
          </div>
        </section>
      </m.div>
    </>
  );
};

export default Home;
