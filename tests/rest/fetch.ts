import { Product, ProductInput } from "../../graphql/generated";

type ProductsResponse = Product[];

export const addProduct = async (product: ProductInput) => {
    try {
        const response = await fetch('http://localhost:3000/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer YOUR_AUTH_TOKEN', // replace with your actual auth token if needed
            },
            body: JSON.stringify({
                product
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error adding product:', error);
        throw error;
    }
};

// Function to send a query to retrieve products
export const getRestProductById = async (id: string) => {
    try {
        const response = await fetch(`http://localhost:3000/products/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer YOUR_AUTH_TOKEN', // replace with your actual auth token if needed
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json() as Product;
        return data;
    } catch (error) {
        console.error('Error retrieving products:', error);
        throw error;
    }
};

// Function to send a query to retrieve products
export const getRestProducts = async () => {
    try {
        const response = await fetch('http://localhost:3000/products', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer YOUR_AUTH_TOKEN', // replace with your actual auth token if needed
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json() as ProductsResponse;
        return data;
    } catch (error) {
        console.error('Error retrieving products:', error);
        throw error;
    }
};