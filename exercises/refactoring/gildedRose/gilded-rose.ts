export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name: string, sellIn: number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

const AGED_BRIE = "Aged Brie";
const SULFURAS = "Sulfuras, Hand of Ragnaros";
const BACKSTAGE_PASSES = "Backstage passes to a TAFKAL80ETC concert";

function increaseItemQuality(item: Item) {
  item.quality++;
  if (item.quality > 50) {
    item.quality = 50;
  }
}

function decreaseItemQuality(item: Item, amount: number = 1) {
  item.quality = item.quality - amount
  if (item.quality < 0) {
    item.quality = 0;
  }
}

function decreaseItemSellin(item: Item) {
  item.sellIn--;
}

function updateAgedBrie(item: Item){
  increaseItemQuality(item);
  item.sellIn = item.sellIn - 1;
  if (item.sellIn < 0) {
    increaseItemQuality(item);
  }
}

function updateBackstage(item: Item){
  increaseItemQuality(item);
  if (item.sellIn <= 10) {
    increaseItemQuality(item);
  }
  if (item.sellIn <= 5) {
    increaseItemQuality(item);
  }
  decreaseItemSellin(item);
  if (item.sellIn < 0) {
    item.quality = 0;
  }
}

function isConjuredItem(item: Item){
  return item.name.toLowerCase().includes("conjured")
}

function udpateConjuredItem(item: Item){
  decreaseItemQuality(item, 2);

  decreaseItemSellin(item);
  if (item.sellIn < 0) {
    decreaseItemQuality(item, 2);
  }
}

function updateItem(item: Item) {
  if (item.name === SULFURAS) {
    return;
  }

  if (item.name === AGED_BRIE) {
    updateAgedBrie(item)
    return;
  }

  if (item.name === BACKSTAGE_PASSES) {
    updateBackstage(item)
    return;
  }

  if(isConjuredItem(item)){
    udpateConjuredItem(item)
    return;
  }

  decreaseItemQuality(item);
  decreaseItemSellin(item);
  if (item.sellIn < 0) {
    decreaseItemQuality(item);
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach(updateItem);
  }
}
