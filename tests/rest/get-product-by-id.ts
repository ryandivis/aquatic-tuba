import { getRestProductById, getRestProducts } from './fetch';

// Main function to retrieve and log products
const main = async () => {
  const products = await getRestProducts();
  if (products.length === 0) {
    console.log('No products available');
    return;
  }

  const randomIndex = Math.floor(Math.random() * products.length);
  const selectedProduct = products[randomIndex];
  const product = await getRestProductById(selectedProduct.id);
  console.log('Product retrieved:', product);
};

// Run the main function
main().catch((err) => console.error(err));
