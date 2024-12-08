import { expect, test } from "bun:test";
import { sum, multiply, isEven } from "./math";

test("sum()", () => {
  expect(sum(2, 2)).toBe(4);
  expect(sum(-1, 1)).toBe(0);
  expect(sum(0, 0)).toBe(0);
});

test("multiply()", () => {
  expect(multiply(2, 3)).toBe(6);
  expect(multiply(0, 5)).toBe(0);
  expect(multiply(-2, 3)).toBe(-6);
});

test("isEven()", () => {
  expect(isEven(2)).toBe(true);
  expect(isEven(3)).toBe(false);
  expect(isEven(0)).toBe(true);
});
