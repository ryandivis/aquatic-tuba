import { FastifyRequest, FastifyReply } from "fastify";
import { v4 as uuidv4 } from "uuid";

import { getInMemoryProductRepository } from "./repositories/InMemoryProductRepository";
import { ProductInput } from "./graphql/generated";

const productRepository = getInMemoryProductRepository();

type AddProductRequest = FastifyRequest<{
  Body: ProductInput;
}>;

type GetProductByIdRequest = FastifyRequest<{
  Params: {
    id: string
  }
}>;

export default async function routes(fastify: any) {
  fastify.post(
    "/",
    async (req: AddProductRequest, reply: FastifyReply) => {
      return req.body;
    }
  );
  
}
