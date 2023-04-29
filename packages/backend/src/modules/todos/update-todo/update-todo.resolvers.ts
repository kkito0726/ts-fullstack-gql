import { GraphQLError } from "graphql";
import { Resolvers } from "../../../__generated__/graphql.js";
import { MyContext } from "../../../types/graphql.js";

export const resolvers: Resolvers<MyContext> = {
  Mutation: {
    updateTodo: async (_, { updateTodoInput }, { prismaClient }, info) => {
      const existingTodo = await prismaClient.todo.findUnique({
        where: {
          id: updateTodoInput.todoId,
        },
      });

      // idに一致するものがなければ例外処理をする
      if (!existingTodo) throw new GraphQLError("Not Found");

      if (typeof updateTodoInput.title === "string") {
        existingTodo.title = updateTodoInput.title;
      }

      if (typeof updateTodoInput.isCompleted === "boolean") {
        existingTodo.isCompleted = updateTodoInput.isCompleted;
      }

      await prismaClient.todo.update({
        where: {
          id: updateTodoInput.todoId,
        },
        data: {
          title: existingTodo.title,
          isCompleted: existingTodo.isCompleted,
        },
      });

      return {
        todo: {
          ...existingTodo,
          updatedAt: existingTodo.updatedAt.toISOString(),
          createdAt: existingTodo.createdAt.toISOString(),
        },
      };
    },
  },
};
