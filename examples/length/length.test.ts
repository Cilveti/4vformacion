import { expect, test } from "bun:test";
import { basket, addToBasket, removeFromBasket } from "./lenght";

test("addToBasket()", () => {
  addToBasket("apple");

  expect(basket).toHaveLength(1);
});

test("removeFromBasket()", () => {
  addToBasket("banana");

  removeFromBasket("apple");

  expect(basket).toHaveLength(1);
});
