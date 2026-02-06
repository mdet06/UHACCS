export const ITEMS = {
  heal20: {
    id: "heal20",
    name: "Honey",
    description: "Heals main bee by 20 HP",
    cost: 20,
    effect: {
      type: "HEAL",
      amount: 20
    }
  },

  freezeEnemies: {
    id: "freezeEnemies",
    name: "Freeze Pot",
    description: "Slows all enemies temporarily",
    cost: 40,
    effect: {
      type: "SLOW",
      duration: 5
    }
  },

  autoShoot: {
    id: "autoShoot",
    name: "Auto Shooter",
    description: "Bees fire faster for a short time",
    cost: 60,
    effect: {
      type: "FIRE_RATE_BOOST",
      multiplier: 2,
      duration: 5
    }
  }
};
