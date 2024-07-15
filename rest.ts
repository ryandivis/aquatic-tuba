const fastify = require('fastify');

export default async function routes(fastify: any) {
  fastify.post(
    "/",
    {
      onRequest: fastify.csrfProtection
    },
    async (req: any, reply: any) => {
      return req.body;
    }
  );
}
