import { GraphQLError } from "graphql";
import { Resolvers } from "../../../__generated__/graphql.js";
import { MyContext } from "../../../types/graphql.js";

export const resolvers: Resolvers<MyContext> = {
  Query: {
    getTodo: async (_, { getTodoInput }, { prismaClient }, info) => {
      const existingTodo = await prismaClient.todo.findUnique({
        where: {
          id: getTodoInput.todoId,
        },
      });
      // idに一致するものがなければ例外処理をする
      if (!existingTodo) throw new GraphQLError("Not Found");

      return {
        todo: existingTodo,
      };
    },
  },
};
