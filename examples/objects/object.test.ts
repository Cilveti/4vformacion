import { expect, test } from "bun:test";
import { getUser } from "./object";

test("returns user object", () => {
  const user = getUser(1);
  expect(user).toEqual({ id: 1, name: "Magnus" });
});
