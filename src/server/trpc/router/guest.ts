import { router, publicProcedure } from "../trpc";
import { z } from "zod";

export const guestRouter = router({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.comment.findMany({
      select:{
        message:true,
        create_at:true,
        users:{
          select:{
            name:true,
            image:true
          }
        }
      }
    })
  }),
});
