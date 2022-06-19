export function getDateFormatted() {
  const date = new Date();
  date.setMilliseconds(0);

  if (date.getSeconds() % 10 !== 0) {
    date.setSeconds(date.getSeconds() - (date.getSeconds() % 10));
  }

  date.setSeconds(date.getSeconds() - 60);

  return date.toISOString();
}

export function getGameState(gameState: GameState): string {
  const states = {
    in_game: 'Ao vivo',
    finished: 'Finalizado',
    paused: 'Pausado'
  };

  return states[gameState];
}
