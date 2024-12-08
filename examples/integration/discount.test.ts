import { expect, test } from "bun:test";
import { calculateDiscount } from "./discount";

test("even discount()", () => {
  expect(calculateDiscount(10)).toBe(0.1);
});

test("odd discount()", () => {
  expect(calculateDiscount(11)).toBe(0.22);
});
