export function checkCollision(enemy, bees) {
  return enemy.position <= bees.position;
}

export function getCollisions(enemies, bees) {
  const collisions = [];

  enemies.forEach(enemy => {
    bees.forEach(bee => {
      if (checkCollision(enemy, bee)) {
        collisions.push({ enemy, bee });
      }
    });
  });

  return collisions;
}
