

export function calculateTax(price: number, category: string): number {
  const taxRate = category === "groceries"? 3 : 4.75;
  return price * (taxRate / 100);
}

