import { FastifyInstance } from "fastify";

export default async function routes(fastify: FastifyInstance) {
  fastify.post(
    "/",
    {
      onRequest: fastify.csrfProtection
    },
    async (req, reply) => {
      return req.body;
    }
  );
}
