// src/pages/_app.tsx
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { Session } from "next-auth";
import type { AppType } from "next/app";
import { trpc } from "../utils/trpc";
import MainSide from "./components/layout/MainSide";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <MainSide>
        <Component {...pageProps} />
      </MainSide>
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
