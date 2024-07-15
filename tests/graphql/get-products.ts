import { Product } from '../../graphql/generated'

type ProductsResponse = { data: { products: Product[] } }

// Function to send a query to retrieve products
const getProducts = async () => {
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
  
  // Main function to retrieve and log products
  const main = async () => {
    const products = await getProducts();
    console.log('Products retrieved:', products);
  };
  
  // Run the main function
  main().catch((err) => console.error(err));
  