import { expect, test } from "bun:test";
import { getUser } from "./equal";

test("returns user object", () => {
  const user = getUser(1);
  expect(user).toEqual({ id: 1, name: "Magnus" });
});
