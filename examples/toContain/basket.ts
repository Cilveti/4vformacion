export function addToBasket(item: string, basket: string[]): string[] {
  return [...basket, item];
}

export function removeFromBasket(item: string, basket: string[]): string[] {
  return basket.filter((i) => i !== item);
}
