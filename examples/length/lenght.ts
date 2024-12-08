export const basket: string[] = [];

export function addToBasket(item: string) {
  basket.push(item);
}

export function removeFromBasket(item: string) {
  const index = basket.indexOf(item);
  basket.splice(index, 1);
}
