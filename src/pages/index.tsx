import type { NextPage } from "next";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";
import { trpc } from "../utils/trpc";
import Image from "next/image";
import Skills from "./components/index/Skills";
const Home: NextPage = () => {


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
      <div className="flex flex-col gap-10">
  <section className="flex gap-3 lg:flex-row">
      <div className="flex flex-col gap-3 lg:w-1/2">
        <h1 className="font-extrabold text-4xl">Jimmy <br />Hung</h1>
      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus venenatis tempor risus, vitae luctus ligula rutrum vitae. Cras ullamcorper tempus sollicitudin. Nunc sed nibh eget turpis consectetur blandit. </span>
  
      </div>
      <div className="w-full h-64 relative lg:w-1/2"><Image src={"/cowboy.png"} layout="fill" objectFit="cover"/></div>
     </section>
     <section className="flex flex-col gap-5">
      <h2 className="font-extrabold text-3xl">我的專長</h2>
      <Skills />
     </section>

      </div>
   
    </>
  );
};

export default Home;
