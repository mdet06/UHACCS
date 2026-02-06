export function applyDamage(target, amount) {
  return {
    ...target,
    currentHp: Math.max(target.currentHp - amount, 0)
  };
}

export function resolveCombat(plant, enemy) {
  const updatedEnemy = applyDamage(enemy, plant.damage);
  const updatedPlant = applyDamage(plant, enemy.damage);

  return {
    plant: updatedPlant,
    enemy: updatedEnemy
  };
}

export function isDead(entity) {
  return entity.currentHp <= 0;
}
