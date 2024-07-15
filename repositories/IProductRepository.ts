// src/repositories/IProductRepository.ts

import { Product } from '../graphql/generated';

export interface IProductRepository {
    getAll(): Promise<Product[]>;
    getById(id: string): Promise<Product | null>;
    create(product: Product): Promise<void>;
    update(product: Product): Promise<Product>;
    delete(id: string): Promise<boolean>;
}
