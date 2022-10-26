import { z } from "zod";
import { router, publicProcedure, protectedProcedure } from "../trpc";

export const authRouter = router({
  getSecretMessage: protectedProcedure.query(() => {
    return "You are logged in and can see this secret message!";
  }),
  insetComment: protectedProcedure
    .input(
      z.object({
        message: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.comment.create({
          data: {
            message: input.message,
            user_id: ctx.session.user.id,
          },
        });
      } catch (e) {
        console.log(e);
      }
    }),
});
