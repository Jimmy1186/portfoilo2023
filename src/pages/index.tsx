import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { trpc } from "../utils/trpc";
import Image from "next/image";
import Skills from "./components/index/Skills";
import { motion as m, useScroll, useTransform } from "framer-motion";
import Comments from "./components/index/Comments";
import { format } from "date-fns";
import { Fragment, useEffect, useRef } from "react";
import Test from "./components/3dItems/AK";

const Home: NextPage = () => {
  const infiniteQuery = trpc.guest.getAll.useInfiniteQuery(
    { limit: 2 },
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    }
  );
  // const ref = useRef(null);
  // const { scrollYProgress } = useScroll({target:ref});
  //   const titleTrans = useTransform(scrollYProgress,[0.22,0],[0,200])

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
        <section className="flex  h-full flex-col gap-3 pt-20 lg:h-[50vh] lg:flex-row">
          <m.div className="flex flex-col gap-10 lg:w-1/2">
            <m.h1
              className="text-4xl font-extrabold"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
            >
              Jimmy <br />
              Hung
            </m.h1>
            <m.span
              className="lg:pr-10"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              來自台北，大學打學校打工因緣際會的認識程式與前端，之後的工作又讓我了解後端，還希望能持續精進。{" "}
            </m.span>
            <div className="">
            <Test />
            </div>
          </m.div>
          <div
            className="tooltip h-[30vh]  w-full md:h-96 lg:w-1/2"
            data-tip="AK GUY"
          >
            <m.div
              className="relative h-full w-full overflow-hidden rounded-2xl  "
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Image src={"/me2.jpg"} layout="fill" objectFit="cover" />
            </m.div>
          </div>
        </section>

        <section className="h-[220vh] lg:h-[180vh]">
          <div className="sticky top-40 flex flex-col gap-5  ">
            <h2 className="text-3xl font-extrabold">我的專長</h2>
            <Skills />
          </div>
        </section>
        <section className="flex justify-center">
          <div className="blown-200 flex  w-full flex-col gap-10 rounded-lg p-5 shadow-2xl lg:w-1/2 ">
            <m.div
              className="tooltip relative h-64 w-full rounded-2xl lg:w-1/2"
              initial={{ x: -50, opacity: 0 }}
              exit={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              data-tip="Bruh"
            >
              <Image src={"/me1.jpg"} layout="fill" objectFit="cover" />
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
                接觸程式2年的時間，也累積了一定的知識量，能完成專案的要求。
                <br />
                <br />
                學習方式主要以看youtube教學為主，大概有一定的了解後直接去做作品，有問題或不懂先去google查詢，如果找不到再去翻Documentation，不然直接去Github查相關的程式碼。
                <br />
                <br />
                閒暇時間我通常會彈古典吉他、運動、<del>玩電腦</del>
                ，朋友有空的話就去打生存遊戲、打牌。{" "}
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
            <div className="flex w-full flex-col gap-10 lg:flex-row lg:flex-wrap">
              <Link href="https://github.com/Jimmy1186/Dashboard-t3">
                <m.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  whileHover={{ scale: 1.1 }}
                  className="blown-200 tooltip relative h-32 cursor-pointer rounded-3xl shadow-2xl md:h-44 lg:h-72 lg:w-2/5"
                  data-tip="公司後端Dashboard"
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
                  className="blown-200 tooltip relative h-32 cursor-pointer rounded-3xl shadow-2xl md:h-44 lg:h-72 lg:w-2/5"
                  data-tip="魚池參數"
                >
                  <Image src={"/shirp.jpg"} layout="fill" objectFit="cover" />
                </m.div>
              </Link>
              <Link href="https://github.com/Jimmy1186/gallery-portfolio">
                <m.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  whileHover={{ scale: 1.1 }}
                  className="blown-200 tooltip relative h-32 cursor-pointer rounded-3xl shadow-2xl md:h-44 lg:h-72 lg:w-2/5"
                  data-tip="舊的作品集"
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
                {infiniteQuery.data?.pages.map((group, i) => {
                  return (
                    <Fragment key={i}>
                      {group.items.map((v, i) => {
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
                      })}
                    </Fragment>
                  );
                })}
                {infiniteQuery.isLoading ? <li><progress className="progress w-56"></progress></li>:''}
                {infiniteQuery.isFetchingNextPage ? <li><progress className="progress w-56"></progress></li> : ""}
              </ul>
            </div>
            {infiniteQuery.hasNextPage ? (
              <div className="" onClick={() => infiniteQuery.fetchNextPage()}>
                <button type="button" title="more comments select-none">
                  更多留言 ...
                </button>
              </div>
            ) : (
              <span>沒有更多留言啦🗿🗿</span>
            )}

            <div className="">
              {" "}
              <Comments refetch={infiniteQuery.refetch} />{" "}
            </div>
          </div>
        </section>
      </m.div>
    </>
  );
};

export default Home;
