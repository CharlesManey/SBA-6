import { Product } from "./models/Product";
import { getAllProducts, getProductById } from "./services/apiService";
import { calculateTax } from "./utils/taxCalculator";

async function displayProducts(): Promise<void> {
  const products = await getAllProducts();
  const grid = document.getElementById('product-grid');

  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';

    card.innerHTML = `
    <img src="${product.thumbnail}" alt"${product.title}" />
    <h3><strong>${product.title}</strong></h3>
    <p>${product.description}</p>
    <p><strong>$${product.price}</strong></p>
    <p>⭐ ${product.rating} | Stock: ${product.stock}</p>
    <button>Add to Cart</button>
    `;

    grid?.appendChild(card);
  });
}

displayProducts()

getProductById(1);