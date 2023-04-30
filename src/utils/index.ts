export function getDateFormatted() {
  const date = new Date();
  date.setMilliseconds(0);

  if (date.getSeconds() % 10 !== 0) {
    date.setSeconds(date.getSeconds() - (date.getSeconds() % 10));
  }

  date.setSeconds(date.getSeconds() - 60);

  return date.toISOString();
}

export function getGameState(gameState: GameState | State): string {
  const states = {
    in_game: 'Ao vivo',
    finished: 'Finalizado',
    paused: 'Pausado',
    inProgress: 'Em andamento',
    completed: 'Completado',
    unstarted: 'Não iniciado'
  };

  return states[gameState];
}

export function SetGold(
  gold: number,
  newGold: number,
  setNewGold: (x: number) => void
): void {
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

interface EventParams {
  action: string;
  category: string;
  label: string;
  value: number;
}

export const event = ({ action, category, label, value }: EventParams) => {
  // @ts-ignore
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
    debug_mode: true
  });
};
