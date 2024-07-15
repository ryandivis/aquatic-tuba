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
    "/products",
    async (req: AddProductRequest, reply: FastifyReply) => {
      const product = { id: uuidv4(), ...req.body };
      productRepository.create(product);
      reply.status(201).send(product);
    }
  );
  fastify.get(
    '/products',
    async (req: FastifyRequest, reply: FastifyReply) => {
      return productRepository.getAll();
    }
  );
  fastify.get(
    '/products/:id',
    async (req: GetProductByIdRequest, reply: FastifyReply) => {
      return productRepository.getById(req.params.id);
    }
  );
}
