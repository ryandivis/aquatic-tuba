import { Product } from '../../graphql/generated'
import { getProductById, getProducts } from './fetch';

// Main function to retrieve and log a product by ID
const main = async () => {
  const productId = '7bfcdbe4-e834-45ac-a9b9-034b6a859692'; // replace with the actual product ID

  try {
    const products = await getProducts();
    if (products.length === 0) {
      console.log('No products available');
      return;
    }

    const randomIndex = Math.floor(Math.random() * products.length);
    const selectedProduct = products[randomIndex];

    const product = await getProductById(selectedProduct.id);
    console.log('Product retrieved:', product);
  } catch (err) {
    console.error(err);
  }
};

// Run the main function
main();
