import { expect, test, spyOn } from "bun:test";
import * as math from "../toBe/math";
import { calculateDiscount } from "../integration/discount";

test("isEven is called", () => {
  const isEvenSpy = spyOn(math, "isEven");

  calculateDiscount(10);

  expect(isEvenSpy).toHaveBeenCalledWith(10);
});

test("multiply is called on even numbers", () => {
  const multiplySpy = spyOn(math, "multiply");

  calculateDiscount(10);

  expect(multiplySpy).toHaveBeenCalledWith(10, 0.01);
});

test("multiply is called on odd numbers", () => {
  const multiplySpy = spyOn(math, "multiply");

  calculateDiscount(11);

  expect(multiplySpy).toHaveBeenCalledWith(11, 0.02);
});
