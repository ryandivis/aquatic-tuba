import { getRestProducts } from './fetch';

// Main function to retrieve and log products
const main = async () => {
  const products = await getRestProducts();
  console.log('Products retrieved:', products);
};

// Run the main function
main().catch((err) => console.error(err));
