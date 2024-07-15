// src/repositories/InMemoryProductRepository.ts

import { IProductRepository } from './IProductRepository';
import { Product } from '../graphql/generated';

export class InMemoryProductRepository implements IProductRepository {
    private products: Product[] = [];

    async getAll(): Promise<Product[]> {
        return this.products;
    }

    async getById(id: string): Promise<Product | null> {
        return this.products.find(product => product.id === id) || null;
    }

    async create(product: Product): Promise<void> {
        this.products.push(product);
    }

    async update(product: Product): Promise<Product> {
        const index = this.products.findIndex(p => p.id === product.id);
        if (index !== -1) {
            this.products[index] = product;
        }
        return this.products[index];
    }

    async delete(id: string): Promise<boolean> {
        this.products = this.products.filter(product => product.id !== id);
        return true;
    }
}
