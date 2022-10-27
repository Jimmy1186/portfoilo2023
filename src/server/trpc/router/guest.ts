import { router, publicProcedure } from "../trpc";
import { z } from "zod";

export const guestRouter = router({
  getAll: publicProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(100).nullish(),
        cursor: z.number().nullish(),
      })
    )
    .query(async({ ctx, input }) => {
      const limit = input.limit ?? 4;
      const { cursor } = input;

    

  const items = await ctx.prisma.comment.findMany({
        select: {
          id:true,
          message: true,
          create_at: true,
          users: {
            select: {
              name: true,
              image: true,
            },
          },
        },
        take: limit + 1,
        cursor: cursor ? { id: cursor } : undefined,
        orderBy: {
          create_at: 'desc',
        }, 
      });

      let nextCursor: typeof cursor | undefined = undefined;
      if (items.length > limit) {
        const nextItem = items.pop()
        nextCursor = nextItem!.id;
      }
      return {
        items,
        nextCursor,
      };

    }),
});


