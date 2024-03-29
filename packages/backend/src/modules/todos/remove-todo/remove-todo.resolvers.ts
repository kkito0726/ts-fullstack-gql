import { GraphQLError } from "graphql";
import { Resolvers } from "../../../__generated__/graphql.js";
import { MyContext } from "../../../types/graphql.js";

export const resolvers: Resolvers<MyContext> = {
  Mutation: {
    removeTodo: async (_, { removeTodoInput }, { prismaClient }, info) => {
      const existingTodo = await prismaClient.todo.findUnique({
        where: {
          id: removeTodoInput.todoId,
        },
      });

      // idに一致するものがなければ例外処理をする
      if (!existingTodo) throw new GraphQLError("Not Found");

      await prismaClient.todo.delete({
        where: {
          id: existingTodo.id,
        },
      });

      return {
        todo: existingTodo,
      };
    },
  },
};
