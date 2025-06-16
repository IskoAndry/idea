// import { initTRPC } from '@trpc/server'
// import _ from 'lodash'
// import { z } from 'zod'

//   // const ideas = [
//   //   { id: 1, nick: 'nick_1', name: 'Idea_1', title: 'Idea1', description: 'Description of idea 1 ...' },
//   //   { id: 2, nick: 'nick_2', name: 'Idea_2', title: 'Idea2', description: 'Description of idea 2 ...' },
//   //   { id: 3, nick: 'nick_3', name: 'Idea_3', title: 'Idea3', description: 'Description of idea 3 ...' },
//   //   { id: 4, nick: 'nick_4', name: 'Idea_4', title: 'Idea4', description: 'Description of idea 4 ...' },
//   // ]
//     const ideas = _.times(10, (i) => ({
//   nick: `nick-${i}`,
//   name: `Idea ${i}`,
//   description: `Description of idea ${i}...`,
//   text: _.times(10, (j) => `<p>Text paragrph ${j} of idea ${i}...</p>`).join(''),
// }))

// export const trpc = initTRPC.create()

// export const trpcRouter = trpc.router({
//   getIdeas: trpc.procedure.query(() => {
//     // throw new Error("Test Error")
//     return { ideas: ideas.map((idea) => _.pick(idea, ['nick', 'name', 'description'])) }
//   }),
//   getIdea: trpc.procedure
//     .input(
//       z.object({
//         ideaNick: z.string(),
//       })
//     )
//     .query(({ input }) => {
//       const idea = ideas.find((idea) => idea.nick === input.ideaNick)
//       return { idea: idea || null }
//     }),
// })

// export type TrpcRouter = typeof trpcRouter