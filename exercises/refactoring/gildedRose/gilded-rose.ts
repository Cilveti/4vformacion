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

function increaseItemQuality(item: Item, amount: number) {
  if (item.quality >= 50) {
    return;
  }
  item.quality = item.quality + amount;
}

function decreaseItemQuality(item: Item, amount: number) {
  item.quality = item.quality - amount;
  if (item.quality < 0) {
    item.quality = 0;
  }
}

function decreaseItemSellIn(item: Item) {
  item.sellIn = item.sellIn - 1;
}

function updateBrie(item: Item) {
  decreaseItemSellIn(item);
  if (item.sellIn < 0) {
    increaseItemQuality(item, 1);
  }
  increaseItemQuality(item, 1);
}

function updateBackstage(item: Item) {
  increaseItemQuality(item, 1);

  if (item.sellIn <= 10) {
    increaseItemQuality(item, 1);
  }

  if (item.sellIn <= 5) {
    increaseItemQuality(item, 1);
  }

  decreaseItemSellIn(item);

  if (item.sellIn < 0) {
    item.quality = 0;
  }
}

function updateRegularItem(item: Item) {
  decreaseItemQuality(item, 1);
  decreaseItemSellIn(item);

  if (item.sellIn < 0) {
    decreaseItemQuality(item, 1);
  }
}

const updateItemCommands: Record<string, (item: Item) => void> = {
  "Sulfuras, Hand of Ragnaros": () => {},
  "Aged Brie": updateBrie,
  "Backstage passes to a TAFKAL80ETC concert": updateBackstage,
};

function updateItem(item: Item) {
  const specialUpdater = updateItemCommands[item.name];
  if (specialUpdater !== undefined) {
    specialUpdater(item);
    return;
  }
  updateRegularItem(item);
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach(updateItem);
    return this.items;
  }
}
