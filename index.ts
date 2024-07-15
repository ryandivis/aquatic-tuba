import Fastify, { FastifyRequest, FastifyReply } from "fastify";
import mercurius, { IResolvers } from "mercurius";
import mercuriusCodegen, { gql } from "mercurius-codegen";
import { v4 as uuidv4 } from "uuid";

import { Product } from "./graphql/generated";
import { InMemoryProductRepository } from "./repositories/InMemoryProductRepository";
import routes from './rest';

// Initialize Fastify
const server = Fastify({ logger: true });

server.register(routes)

// Graphql

const productRepository = new InMemoryProductRepository();

const buildContext = async (req: FastifyRequest, _reply: FastifyReply) => {
  return {
    authorization: req.headers.authorization,
  };
};

type PromiseType<T> = T extends PromiseLike<infer U> ? U : T;

declare module "mercurius" {
  interface MercuriusContext
    extends PromiseType<ReturnType<typeof buildContext>> {}
}

// GraphQL schema
const schema = gql`
  type Product {
    id: ID!
    name: String!
    price: Float!
    description: String
  }

  type Query {
    products: [Product]
    product(id: ID!): Product
  }

  input ProductInput {
    name: String!
    price: Float!
    description: String
  }

  type Mutation {
    addProduct(input: ProductInput): Product
    updateProduct(id: ID!, input: ProductInput): Product
    deleteProduct(id: ID!): Boolean
  }
`;

// GraphQL resolvers
const resolvers: IResolvers = {
  Query: {
    products: () => productRepository.getAll(),
    product: (parent: any, args: any) => productRepository.getById(args.id),
  },
  Mutation: {
    addProduct: (parent: any, args: any) => {
      const product = { id: uuidv4(), ...args.input };
      productRepository.create(product);
      return product;
    },
    updateProduct: (parent: any, args: any) => {
      const product: Product = args.input;
      return productRepository.update(product);
    },
    deleteProduct: (parent: any, args: any) => {
      return productRepository.delete(args.id);
    },
  },
};

// Apollo Server setup
server.register(mercurius, {
  schema,
  resolvers,
  context: buildContext,
});

mercuriusCodegen(server, {
  // Commonly relative to your root package.json
  targetPath: "./graphql/generated.ts",
}).catch(console.error);

// Run the server!
server.listen({ port: 3000 }, (err, address) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
  server.log.info(`Server is running on ${address}/graphql`);
});
