import { MyContext } from "../../../types/graphql.js";

export const greetResolvers = {
  Query: {
    // eslint-disable-next-line @typescript-eslint/require-await
    greet: async (_: any, args: any, context: MyContext, info: any) => {
      return "hello";
    },
  },
};
