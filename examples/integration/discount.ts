import { isEven, multiply } from "../toBe/math";

export function calculateDiscount(price: number): number {
  const discount = isEven(price) ? 0.01 : 0.02;

  return multiply(price, discount);
}
