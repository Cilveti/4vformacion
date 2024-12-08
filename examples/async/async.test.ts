import { expect, test } from "bun:test";
import { fetchData } from "./async";

test("fetches data", async () => {
  const data = await fetchData();
  expect(data).toBe("Hi!");
});
