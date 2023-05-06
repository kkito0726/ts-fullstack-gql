import { Todo } from "@prisma/client";
import { Resolvers } from "../../../__generated__/graphql.js";
import { MyContext } from "../../../types/graphql.js";

export const resolvers: Resolvers<MyContext> = {
  Mutation: {
    RemoveAllTodo: async (_, args, { prismaClient }, info) => {
      //
      await prismaClient.todo.deleteMany({});
      return {
        status: "removed",
      };
    },
  },
};
