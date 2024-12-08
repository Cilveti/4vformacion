import { expect, test, spyOn } from "bun:test";
import { getRandomSeed } from "./random";

test("getRandomSeed()", () => {
  spyOn(Math, "random").mockReturnValue(0.5);

  const seed = 10;
  const result = getRandomSeed(seed);

  expect(result).toBe(5);
});
