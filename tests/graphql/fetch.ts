import { Product, ProductInput } from "../../graphql/generated";

type ProductsResponse = { data: { products: Product[] } }
type ProductQueryResponse = { data: { product: Product } };

// Function to send a mutation to add a product
export const addProduct = async (product: ProductInput) => {
    const mutation = `
      mutation AddProduct($input: ProductInput!) {
        addProduct(input: $input) {
          name
          price
          description
        }
      }
    `;

    try {
        const response = await fetch('http://localhost:3000/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer YOUR_AUTH_TOKEN', // replace with your actual auth token if needed
            },
            body: JSON.stringify({
                query: mutation,
                variables: {
                    input: product,
                },
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

// Function to send a query to retrieve a product by ID
export const getProductById = async (id: string): Promise<Product> => {
    const query = `
      query GetProductById($id: ID!) {
        product(id: $id) {
          id
          name
          price
          description
        }
      }
    `;

    try {
        const response = await fetch('http://localhost:3000/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer YOUR_AUTH_TOKEN', // replace with your actual auth token if needed
            },
            body: JSON.stringify({
                query: query,
                variables: { id },
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json() as ProductQueryResponse;
        return data.data.product;
    } catch (error) {
        console.error('Error retrieving product:', error);
        throw error;
    }
};

// Function to send a query to retrieve products
export const getProducts = async () => {
    const query = `
      query {
        products {
          id
          name
          price
          description
        }
      }
    `;

    try {
        const response = await fetch('http://localhost:3000/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer YOUR_AUTH_TOKEN', // replace with your actual auth token if needed
            },
            body: JSON.stringify({
                query: query,
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json() as ProductsResponse;
        return data.data.products;
    } catch (error) {
        console.error('Error retrieving products:', error);
        throw error;
    }
};