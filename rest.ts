import { FastifyRequest, FastifyReply } from "fastify";

export default async function routes(fastify: any) {
  fastify.post(
    "/",
    async (req: FastifyRequest, reply: FastifyReply) => {
      return req.body;
    }
  );
}
