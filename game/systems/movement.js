export function moveEnemy(enemy, deltaTime) {
  return {
    ...enemy,
    position: Math.max(enemy.position - enemy.speed * deltaTime, 0)
  };
}

export function updateEnemies(enemies, deltaTime) {
  return enemies.map(enemy => moveEnemy(enemy, deltaTime));
}
