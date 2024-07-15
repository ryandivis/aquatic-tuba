import { faker } from '@faker-js/faker';
import { ProductInput } from '../../graphql/generated';

// Function to create a product using faker
const createProduct = () => ({
    name: faker.commerce.productName(),
    price: parseFloat(faker.commerce.price()),
    description: faker.commerce.productDescription(),
});

// Function to send a mutation to add a product
const addProduct = async (product: ProductInput) => {
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

// Main function to add three products
const main = async () => {
  for (let i = 0; i < 3; i++) {
    const product = createProduct();
    const result = await addProduct(product);
    console.log('Product added:', result);
  }
};

// Run the main function
main().catch((err) => console.error(err));
