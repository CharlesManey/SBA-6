import { Product } from "../models/Product";
import { apiErrorHandler, NetworkError, NotFoundError, ServerError } from "../utils/errorHandler";

const BASE_URL = "https://dummyjson.com"

export async function getAllProducts(): Promise<Product[]> {
  try {
    const response = await fetch(`${BASE_URL}/products`);

    if (!response.ok) {
      apiErrorHandler(response);
    }

    const data = await response.json();
    const products: Product[] = data.products.map((item:any) => new Product(item));
    console.log(products);
    return products;

  } catch (error) {
    if (error instanceof NotFoundError) {
      console.error(`Not Found: ${error.message}`);
    } else if (error instanceof ServerError) {
      console.error(`Server Error: ${error.message}`);
    } else if (error instanceof NetworkError) {
      console.error(`Network Error: ${error.message}`);
    } else if (error instanceof Error) {
      console.error(`Unexpected Error: ${error.message}`);
    }
    return [];
  } finally {
    console.log("Operation Completed");
  }
}

export async function getProductById(id: number): Promise<Product | null> {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`);

    if (!response.ok) {
      apiErrorHandler(response);
    }

    const productById = await response.json();
    console.log(productById);
    return productById;

  } catch (error) {
    if (error instanceof NotFoundError) {
      console.error(`Not Found: ${error.message}`);
    } else if (error instanceof ServerError) {
      console.error(`Server Error: ${error.message}`);
    } else if (error instanceof NetworkError) {
      console.error(`Network Error: ${error.message}`);
    } else if (error instanceof Error) {
      console.error(`Unexpected Error: ${error.message}`);
    }
    return null;
  } finally {
    console.log("Operation Completed")
  }
  
}