import type { GraphQLResolveInfo } from "graphql";
import type { MercuriusContext } from "mercurius";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) =>
  | Promise<import("mercurius-codegen").DeepPartial<TResult>>
  | import("mercurius-codegen").DeepPartial<TResult>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  _FieldSet: any;
};

export type Product = {
  __typename?: "Product";
  id: Scalars["ID"];
  name: Scalars["String"];
  price: Scalars["Float"];
  description?: Maybe<Scalars["String"]>;
};

export type Query = {
  __typename?: "Query";
  products?: Maybe<Array<Maybe<Product>>>;
  product?: Maybe<Product>;
};

export type QueryproductArgs = {
  id: Scalars["ID"];
};

export type ProductInput = {
  name: Scalars["String"];
  price: Scalars["Float"];
  description?: InputMaybe<Scalars["String"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  addProduct?: Maybe<Product>;
  updateProduct?: Maybe<Product>;
  deleteProduct?: Maybe<Scalars["Boolean"]>;
};

export type MutationaddProductArgs = {
  input?: InputMaybe<ProductInput>;
};

export type MutationupdateProductArgs = {
  id: Scalars["ID"];
  input?: InputMaybe<ProductInput>;
};

export type MutationdeleteProductArgs = {
  id: Scalars["ID"];
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {},
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Product: ResolverTypeWrapper<Product>;
  ID: ResolverTypeWrapper<Scalars["ID"]>;
  String: ResolverTypeWrapper<Scalars["String"]>;
  Float: ResolverTypeWrapper<Scalars["Float"]>;
  Query: ResolverTypeWrapper<{}>;
  ProductInput: ProductInput;
  Mutation: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Product: Product;
  ID: Scalars["ID"];
  String: Scalars["String"];
  Float: Scalars["Float"];
  Query: {};
  ProductInput: ProductInput;
  Mutation: {};
  Boolean: Scalars["Boolean"];
};

export type ProductResolvers<
  ContextType = MercuriusContext,
  ParentType extends
    ResolversParentTypes["Product"] = ResolversParentTypes["Product"],
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  price?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = MercuriusContext,
  ParentType extends
    ResolversParentTypes["Query"] = ResolversParentTypes["Query"],
> = {
  products?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Product"]>>>,
    ParentType,
    ContextType
  >;
  product?: Resolver<
    Maybe<ResolversTypes["Product"]>,
    ParentType,
    ContextType,
    RequireFields<QueryproductArgs, "id">
  >;
};

export type MutationResolvers<
  ContextType = MercuriusContext,
  ParentType extends
    ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"],
> = {
  addProduct?: Resolver<
    Maybe<ResolversTypes["Product"]>,
    ParentType,
    ContextType,
    Partial<MutationaddProductArgs>
  >;
  updateProduct?: Resolver<
    Maybe<ResolversTypes["Product"]>,
    ParentType,
    ContextType,
    RequireFields<MutationupdateProductArgs, "id">
  >;
  deleteProduct?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType,
    RequireFields<MutationdeleteProductArgs, "id">
  >;
};

export type Resolvers<ContextType = MercuriusContext> = {
  Product?: ProductResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
};

export type Loader<TReturn, TObj, TParams, TContext> = (
  queries: Array<{
    obj: TObj;
    params: TParams;
  }>,
  context: TContext & {
    reply: import("fastify").FastifyReply;
  },
) => Promise<Array<import("mercurius-codegen").DeepPartial<TReturn>>>;
export type LoaderResolver<TReturn, TObj, TParams, TContext> =
  | Loader<TReturn, TObj, TParams, TContext>
  | {
      loader: Loader<TReturn, TObj, TParams, TContext>;
      opts?: {
        cache?: boolean;
      };
    };
export interface Loaders<
  TContext = import("mercurius").MercuriusContext & {
    reply: import("fastify").FastifyReply;
  },
> {
  Product?: {
    id?: LoaderResolver<Scalars["ID"], Product, {}, TContext>;
    name?: LoaderResolver<Scalars["String"], Product, {}, TContext>;
    price?: LoaderResolver<Scalars["Float"], Product, {}, TContext>;
    description?: LoaderResolver<
      Maybe<Scalars["String"]>,
      Product,
      {},
      TContext
    >;
  };
}
declare module "mercurius" {
  interface IResolvers
    extends Resolvers<import("mercurius").MercuriusContext> {}
  interface MercuriusLoaders extends Loaders {}
}
