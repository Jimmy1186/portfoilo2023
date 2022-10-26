// src/server/trpc/router/_app.ts
import { router } from "../trpc";
import { guestRouter } from "./guest";
import { authRouter } from "./auth";

export const appRouter = router({
  guest: guestRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
