import { faker } from '@faker-js/faker';
import { addProduct } from './fetch';

// Function to create a product using faker
const createProduct = () => ({
    name: faker.commerce.productName(),
    price: parseFloat(faker.commerce.price({ dec: 2 })),
    description: faker.commerce.productDescription(),
});

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
