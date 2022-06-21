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

export function SetGold(gold: number, newGold: number, setNewGold: any): void {
  const dif = newGold - gold;

  if (dif > 2000) {
    setNewGold(newGold);
    return;
  }

  for (let i = 0; i <= dif; i++) {
    setTimeout(
      (nr) => {
        setNewGold(gold + nr);
      },
      (i * 5000) / newGold,
      i
    );
  }
}
