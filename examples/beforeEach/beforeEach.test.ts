import { expect, test, spyOn, beforeEach } from "bun:test";
import { getRandomSeed } from "../mock/random";

beforeEach(() => {
  spyOn(Math, "random").mockReturnValue(0.5);
});

test("getRandomSeed()", () => {
  const seed = 10;
  const result = getRandomSeed(seed);

  expect(result).toBe(5);
});

test("getRandomSeed() with different seed", () => {
  const seed = 20;
  const result = getRandomSeed(seed);

  expect(result).toBe(10);
});

test("getRandomSeed() with float", () => {
  const seed = 30.33;
  const result = getRandomSeed(seed);

  expect(result).toBe(15);
});

console.log("math.random", Math.random());
