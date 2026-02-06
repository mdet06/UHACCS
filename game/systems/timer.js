export function tickTimer(timeLeft, deltaTime) {
  return Math.max(timeLeft - deltaTime, 0);
}

export function isTimeUp(timeLeft) {
  return timeLeft <= 0;
}
