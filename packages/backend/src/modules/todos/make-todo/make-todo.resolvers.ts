// import crypto from "crypto";
import { MyContext } from "../../../types/graphql.js";
import { Resolvers } from "../../../__generated__/graphql.js";

export const resolvers: Resolvers<MyContext> = {
  Mutation: {
    // eslint-disable-next-line @typescript-eslint/require-await
    makeTodo: async (_, { makeTodoInput }, { prismaClient }, info) => {
      const newTodo = await prismaClient.todo.create({
        data: {
          title: makeTodoInput.title,
        },
      });

      return {
        todo: {
          ...newTodo,
          updatedAt: newTodo.updatedAt.toISOString(),
          createdAt: newTodo.createdAt.toISOString(),
        },
      };
    },
  },
};
