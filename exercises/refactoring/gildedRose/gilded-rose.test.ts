import { expect, test, describe } from "bun:test";
import { Item, GildedRose } from "./gilded-rose";

describe("Gilded Rose", () => {
  test("should decrease quality and sellIn for normal items", () => {
    // Arrange
    const items = [new Item("foo", 10, 10)];
    const gildedRose = new GildedRose(items);
    
    // Act
    gildedRose.updateQuality();
    
    // Assert
    expect(items[0].name).toBe("foo");
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(9);
  });
  
});
