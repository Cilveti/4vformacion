import { expect, test } from "bun:test";
import { addToBasket, removeFromBasket } from "./basket";

test("addToBasket()", () => {
  const basket = ["apple", "banana"];

  const newBasket = addToBasket("apple", basket);

  expect(newBasket).toContain("apple");
});

test("removeFromBasket()", () => {
  const basket = ["apple", "banana"];

  const newBasket = removeFromBasket("apple", basket);

  expect(newBasket).not.toContain("apple");
});
