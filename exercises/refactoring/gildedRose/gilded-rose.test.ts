import { expect, test, describe } from "bun:test";
import { Item, GildedRose } from "./gilded-rose";

describe("Gilded Rose", () => {
  describe("Normal Items", () => {
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

    test("Once the sell by date has passed, Quality degrades twice as fast", () => {
       const items = [new Item("foo", 0, 2)];
       const gildedRose = new GildedRose(items);
       
       gildedRose.updateQuality();
       
       expect(items[0].name).toBe("foo");
       expect(items[0].sellIn).toBe(-1);
       expect(items[0].quality).toBe(0);
    })

    test("The Quality of an item is never negative", () => {
      const items = [
          new Item("foo", 1, 0),
          new Item("foo", -2, 0),
      ];
      const gildedRose = new GildedRose(items);
      
      gildedRose.updateQuality();

      expect(items[0].sellIn).toBe(0);
      expect(items[0].quality).toBe(0);

      expect(items[1].sellIn).toBe(-3);
      expect(items[1].quality).toBe(0);
    })

    test.skip("The Quality of an item is never more than 50", () => {
      const items = [
          new Item("foo", 1, 55),
      ];
      const gildedRose = new GildedRose(items);
      
      gildedRose.updateQuality();

      expect(items[0].quality).toBe(50);
    })
  });

  describe("Aged Brie", () => {
    test('"Aged Brie" actually increases in Quality the older it gets', () => {
      const items = [
          new Item("Aged Brie", 1, 0),
      ];
      const gildedRose = new GildedRose(items);
      
      gildedRose.updateQuality();

      expect(items[0].sellIn).toBe(0);
      expect(items[0].quality).toBe(1);
    });

    test("The Quality of an item is never more than 50", () => {
      const items = [
          new Item("Aged Brie", 1, 49),
      ];
      const gildedRose = new GildedRose(items);
      
      gildedRose.updateQuality();

      expect(items[0].quality).toBe(50);
    });
  });

  describe("Sulfuras", () => {
    test('"Sulfuras", being a legendary item, never has to be sold or decreases in Quality', () => {
      const items = [
          new Item('Sulfuras, Hand of Ragnaros', 1, 80),
      ];
      const gildedRose = new GildedRose(items);
      
      gildedRose.updateQuality();
      
      expect(items[0].sellIn).toBe(1);
      expect(items[0].quality).toBe(80);
    });
  });

  describe("Backstage Passes", () => {
    test("increases in Quality as its SellIn value approaches", () => {
      const items = [
          new Item('Backstage passes to a TAFKAL80ETC concert', 20, 0),
      ];

      const gildedRose = new GildedRose(items);
      gildedRose.updateQuality();

      expect(items[0].sellIn).toBe(19);
      expect(items[0].quality).toBe(1);
    });

    test("Quality increases by 2 when there are 10 days or less", () => {
      const items = [
          new Item('Backstage passes to a TAFKAL80ETC concert', 10, 0),
      ];

      const gildedRose = new GildedRose(items);
      gildedRose.updateQuality();

      expect(items[0].sellIn).toBe(9);
      expect(items[0].quality).toBe(2);
    });

    test("Quality increases by 3 when there are 5 days or less", () => {
      const items = [
          new Item('Backstage passes to a TAFKAL80ETC concert', 5, 0),
      ];

      const gildedRose = new GildedRose(items);
      gildedRose.updateQuality();

      expect(items[0].sellIn).toBe(4);
      expect(items[0].quality).toBe(3);
    });

    test("Quality drops to 0 after the concert", () => {
      const items = [
          new Item('Backstage passes to a TAFKAL80ETC concert', 0, 100),
      ];

      const gildedRose = new GildedRose(items);
      gildedRose.updateQuality();

      expect(items[0].sellIn).toBe(-1);
      expect(items[0].quality).toBe(0);
    });
  });
  describe.skip("Conjured items", () => {
    test("Conjured items degrade in Quality twice as fast as normal items", () => {
      const items = [
          new Item('Conjured Mana Cake', 10, 10),
          new Item('foo', 10, 10) // Normal item for comparison
      ];
      const gildedRose = new GildedRose(items);
      
      gildedRose.updateQuality();

      expect(items[0].sellIn).toBe(9);
      expect(items[0].quality).toBe(8); // Conjured degrades by 2
      expect(items[1].quality).toBe(9); // Normal degrades by 1
    });

    test("Conjured items degrade in Quality twice as fast after sell by date", () => {
      const items = [
          new Item('Conjured Mana Cake', 0, 10),
          new Item('foo', 0, 10) // Normal item for comparison
      ];
      const gildedRose = new GildedRose(items);
      
      gildedRose.updateQuality();

      expect(items[0].sellIn).toBe(-1);
      expect(items[0].quality).toBe(6); // Conjured degrades by 4 after sellIn
      expect(items[1].quality).toBe(8); // Normal degrades by 2 after sellIn
    });

    test("Conjured items cannot have negative quality", () => {
      const items = [
          new Item('Conjured Mana Cake', 5, 0),
      ];
      const gildedRose = new GildedRose(items);
      
      gildedRose.updateQuality();

      expect(items[0].sellIn).toBe(4);
      expect(items[0].quality).toBe(0);
    });
  })
});
