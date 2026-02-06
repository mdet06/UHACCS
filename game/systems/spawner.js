export function spawnEnemy(enemyData) {
  return {
    ...enemyData,
    currentHp: enemyData.hp,
    position: 100
  };
}

export function spawnWave(enemyTypes, ENEMIES) {
  return enemyTypes.map(type => spawnEnemy(ENEMIES[type]));
}
