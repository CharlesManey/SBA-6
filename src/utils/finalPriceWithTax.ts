import { calculateDiscount } from "./discountCalculator";
import { calculateTax } from "./taxCalculator";

export function calculateFinalPrice(price: number, discountPercentage: number): number {
  return price - calculateDiscount(price, discountPercentage);
}

export function calculateFinalPriceWithTax(price:number, category: string, discountPercentage:number): number {
  const finalPrice = calculateFinalPrice(price, discountPercentage);
  return finalPrice + calculateTax(finalPrice, category);
}