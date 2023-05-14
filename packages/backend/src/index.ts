import http from "http";

import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { expressMiddleware } from "@apollo/server/express4";
import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import { MyContext } from "./types/graphql.js";
import { buildSchema } from "./utils/buildSchema.js";

const prismaClient = new PrismaClient();

async function main() {
  await prismaClient.$connect();

  const PORT = process.env.PORT || 5555;
  const app = express();

  const httpServer = http.createServer(app);
  const server = new ApolloServer<MyContext>({
    schema: await buildSchema(),
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();

  app.use(
    cors({
      origin: ["http://localhost:3000"],
      credentials: true,
      optionsSuccessStatus: 200,
    })
  );

  app.use(express.json());

  app.use(
    "/graphql",
    expressMiddleware(server, {
      // eslint-disable-next-line @typescript-eslint/require-await
      context: async ({ req, res }) => ({ req, res, prismaClient }),
    })
  );

  await new Promise<void>((resolve) => {
    httpServer.listen({ port: PORT }, resolve);
  });

  console.log(`🚀 server is up and running at http://localhost:${PORT}`);
}

main().catch(async (err) => {
  console.error(err);
  await prismaClient.$disconnect();
  process.exit(1);
});
