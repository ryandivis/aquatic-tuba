import { Product } from '../../graphql/generated'
type ProductQueryResponse = { data: { product: Product } }

// Function to send a query to retrieve a product by ID
const getProductById = async (id: string): Promise<Product> => {
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

// Main function to retrieve and log a product by ID
const main = async () => {
  const productId = '7bfcdbe4-e834-45ac-a9b9-034b6a859692'; // replace with the actual product ID

  try {
    const product = await getProductById(productId);
    console.log('Product retrieved:', product);
  } catch (err) {
    console.error(err);
  }
};

// Run the main function
main();
