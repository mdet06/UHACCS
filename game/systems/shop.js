export function canBuy(coins, cost) {
  return coins >= cost;
}

export function buyItem(coins, item) {
  if (!canBuy(coins, item.cost)) return null;

  return {
    remainingCoins: coins - item.cost,
    item
  };
}
