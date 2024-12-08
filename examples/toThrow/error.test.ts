import { expect, test } from "bun:test";
import { throwError } from "./error";

test("throws an error", () => {
  expect(() => throwError()).toThrow("Oops!");
});
