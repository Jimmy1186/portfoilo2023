import type { NextPage } from "next";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";
import { trpc } from "../utils/trpc";

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
      <main></main>
    </>
  );
};

export default Home;
