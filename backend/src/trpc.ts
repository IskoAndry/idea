import { initTRPC } from '@trpc/server'

  const ideas = [
    { id: 1, nick: 'nick_1', name: 'Idea_1', title: 'Idea1', description: 'Description of idea 1 ...' },
    { id: 2, nick: 'nick_2', name: 'Idea_2', title: 'Idea2', description: 'Description of idea 2 ...' },
    { id: 3, nick: 'nick_3', name: 'Idea_3', title: 'Idea3', description: 'Description of idea 3 ...' },
    { id: 4, nick: 'nick_4', name: 'Idea_4', title: 'Idea4', description: 'Description of idea 4 ...' },
  ]

export const trpc = initTRPC.create()

export const trpcRouter = trpc.router({
  getIdeas: trpc.procedure.query(() => {
    // throw new Error("Test Error")
    return { ideas }
  }),
})

export type TrpcRouter = typeof trpcRouter